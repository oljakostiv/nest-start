import {Column, DataType, Model, Table} from "sequelize-typescript";

//to create an obj from this class:
export interface HorseCreation {
    name: string;
    price: number;
}

//to become a table in db:
@Table({tableName: 'horses'})
export class Horse extends Model<Horse, HorseCreation> {
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    price: number;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;
}
