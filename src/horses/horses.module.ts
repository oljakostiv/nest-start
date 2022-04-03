import { Module } from '@nestjs/common';
import { HorsesController } from './horses.controller';
import { HorsesService } from './horses.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Horse} from "./horses.model";

@Module({
  controllers: [HorsesController],
  providers: [HorsesService],
  imports: [
      SequelizeModule.forFeature([Horse])
  ]
})
export class HorsesModule {}
