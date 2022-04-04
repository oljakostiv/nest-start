import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateHorseDto} from "../horses/dto/create-horse.dto";
import {HorsesService} from "../horses/horses.service";
import {JwtService} from "@nestjs/jwt";
import {Horse} from "../horses/horses.model";

@Injectable()
export class AuthService {
    constructor(
        private horsesService: HorsesService,
        private jwtService: JwtService
    ) {
    }

    async login(horseDto: CreateHorseDto) {
        const horse = await this.validateHorse(horseDto);
        return this.generateToken(horse);
    }

    async registration(horseDto: CreateHorseDto) {
        const candidate = await this.horsesService.getByName(horseDto.name);

        if (candidate) {
            throw new HttpException('Previously registered', HttpStatus.BAD_REQUEST);
        }

        //todo: add some unique number + hash;

        const horse = await this.horsesService.create(horseDto);
        return this.generateToken(horse);
    }

    private async generateToken(horse: Horse) {
        const payload = {id: horse.id, name: horse.name, price: horse.price, roles: horse.roles};
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateHorse(horseDto: CreateHorseDto) {
        const horse = await this.horsesService.getByName(horseDto.name);

        //todo: compare unique num vs hashed;

        if (!horse) {
            throw new UnauthorizedException({message: 'Not found'});
        }

        return horse;
    }
}
