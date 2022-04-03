import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Horse} from "../horses/horses.model";
import { HorseRoles } from "./horse-roles.model";

//to create an obj from this class:
export interface RoleCreation {
    value: string;
    description: string;
}

//to become a table in db:
@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreation> {
    @ApiProperty({example: 1, description: 'Unique number'})
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true})
    id: number;

    @ApiProperty({example: 'EVENTING', description: 'Discipline'})
    @Column({type: DataType.STRING})
    value: string;

    @ApiProperty({example: 'CC2', description: 'Level of training'})
    @Column({type: DataType.STRING})
    description: string;

    //db dependencies:
    @BelongsToMany(() => Horse, () => HorseRoles)
    horses: Horse[];
}
