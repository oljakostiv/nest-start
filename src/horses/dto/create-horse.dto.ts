import {ApiProperty} from "@nestjs/swagger";

export class CreateHorseDto {
    @ApiProperty({example: 'Magnat', description: 'Horse name'})
    readonly name: string;

    @ApiProperty({example: 30000, description: 'Starting price'})
    readonly price: number;
}
