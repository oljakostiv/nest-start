import {Body, Controller, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {CreateHorseDto} from "../horses/dto/create-horse.dto";
import {Horse} from "../horses/horses.model";

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'The instance entered'})
    @ApiResponse({status: 200, type: Horse})
    @Post('/login')
    login(@Body() horseDto: CreateHorseDto) {
        return this.authService.login(horseDto);
    }

    @ApiOperation({summary: 'The instance registered'})
    @ApiResponse({status: 200, type: Horse})
    @Post('/registration')
    registration(@Body() horseDto: CreateHorseDto) {
        return this.authService.registration(horseDto);
    }
}
