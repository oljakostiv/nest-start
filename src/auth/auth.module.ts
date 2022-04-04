import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {HorsesService} from "../horses/horses.service";
import {JwtModule} from "@nestjs/jwt";
import {HorsesModule} from "../horses/horses.module";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        HorsesModule,
        JwtModule.register({
            secret: process.env.SECRET_KEY || 'SECRET_KEY',
            signOptions: {
                expiresIn: '24h'
            }
        })
    ]
})
export class AuthModule {
}
