import {Injectable} from '@nestjs/common';
import {Horse} from "./horses.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateHorseDto} from "./dto/create-horse.dto";

@Injectable()
export class HorsesService {
    constructor(@InjectModel(Horse) private horseRepository: typeof Horse) {}

    async create(dto: CreateHorseDto) {
        const horse = await this.horseRepository.create(dto);
        return horse;

    }

    async getAll() {
        const horses = await this.horseRepository.findAll();
        return horses;
    }
}
