import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import { HorseRoles } from "src/roles/horse-roles.model";

//to create an obj from this class:
export interface HorseCreation {
    name: string;
    price: number;
}

//to become a table in db:
@Table({tableName: 'horses'})
export class Horse extends Model<Horse, HorseCreation> {
    @ApiProperty({example: 1, description: 'Unique number'})
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true})
    id: number;

    @ApiProperty({example: 'Magnat', description: 'Horse name'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @ApiProperty({example: 30000, description: 'Starting price'})
    @Column({type: DataType.INTEGER})
    price: number;

    @ApiProperty({example: false, description: 'Banned or not'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    //db dependencies:
    @BelongsToMany(() => Role, () => HorseRoles)
    roles: Role[];
}
