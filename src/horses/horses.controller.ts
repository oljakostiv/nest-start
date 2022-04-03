import {Body, Controller, Get, Post} from '@nestjs/common';
import {HorsesService} from "./horses.service";
import {CreateHorseDto} from "./dto/create-horse.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Horse} from "./horses.model";

@ApiTags('Actions')
@Controller('horses')
export class HorsesController {
    constructor(private horsesService: HorsesService) {}

    @ApiOperation({summary: 'Instance creation'})
    @ApiResponse({status: 200, type: Horse})
    @Post()
    create(@Body() horseDto: CreateHorseDto) {
        return this.horsesService.create(horseDto);
    }

    @ApiOperation({summary: 'Getting all instances'})
    @ApiResponse({status: 200, type: [Horse]})
    @Get()
    getAll() {
        return this.horsesService.getAll();
    }
}
