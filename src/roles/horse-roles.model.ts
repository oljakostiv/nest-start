import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Horse} from "../horses/horses.model";
import {Role} from "./roles.model";

@Table({tableName: 'horse_roles', createdAt: false, updatedAt: false})
export class HorseRoles extends Model<HorseRoles> {
    @ApiProperty({example: 1, description: 'Unique number'})
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true})
    id: number;

    @ForeignKey(() => Horse)
    @ApiProperty({example: 2, description: 'Unique horse number'})
    @Column({type: DataType.INTEGER})
    horseId: number;

    @ForeignKey(() => Role)
    @ApiProperty({example: 3, description: 'Unique role number'})
    @Column({type: DataType.INTEGER})
    roleId: number;
}
