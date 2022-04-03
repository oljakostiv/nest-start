import {Body, Controller, Get, Post} from '@nestjs/common';
import {HorsesService} from "./horses.service";
import {CreateHorseDto} from "./dto/create-horse.dto";

@Controller('horses')
export class HorsesController {
    constructor(private horsesService: HorsesService) {}

    @Post()
    create(@Body() horseDto: CreateHorseDto) {
        return this.horsesService.create(horseDto);
    }

    @Get()
    getAll() {
        return this.horsesService.getAll();
    }
}
