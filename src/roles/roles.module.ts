import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "./roles.model";
import {Horse} from "../horses/horses.model";
import {HorseRoles} from "./horse-roles.model";

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    SequelizeModule.forFeature([Role, Horse, HorseRoles])
  ],
  exports: [RolesService] //for horses module;
})
export class RolesModule {}
