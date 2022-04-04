import {Module} from '@nestjs/common';
import {HorsesController} from './horses.controller';
import {HorsesService} from './horses.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Horse} from "./horses.model";
import {Role} from "../roles/roles.model";
import {HorseRoles} from "../roles/horse-roles.model";
import {RolesModule} from "../roles/roles.module";

@Module({
    controllers: [HorsesController],
    providers: [HorsesService],
    imports: [
        SequelizeModule.forFeature([Horse, Role, HorseRoles]),
        RolesModule
    ],
    exports: [HorsesService]
})
export class HorsesModule {
}
