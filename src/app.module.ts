import {Module} from "@nestjs/common";
import {SequelizeModule} from '@nestjs/sequelize';
import {HorsesModule} from './horses/horses.module';
import {ConfigModule} from "@nestjs/config";
import {Horse} from "./horses/horses.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {HorseRoles} from "./roles/horse-roles.model";

@Module({
    controllers: [],
    providers: [],  //for services (all the logic here);
    imports: [
        //add .env(dev or prod):
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        //add db:
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Horse, Role, HorseRoles],
            autoLoadModels: true    //for tables;
        }),
        //add other:
        HorsesModule,
        RolesModule,
    ],
})
export class AppModule {
}

