import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {RolesService} from "./roles.service";
import {Role} from "./roles.model";
import {CreateRoleDto} from "./dto/create-role.dto";

@ApiTags('Actions')
@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {}

    @ApiOperation({summary: 'Instance creation'})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() roleDto: CreateRoleDto) {
        return this.rolesService.create(roleDto);
    }

    @ApiOperation({summary: 'Getting value by unique number'})
    @ApiResponse({status: 200, type: Role})
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.rolesService.getByValue(value);
    }
}
