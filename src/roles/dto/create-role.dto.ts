import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({example: 'EVENTING', description: 'Discipline'})
    readonly value: string;

    @ApiProperty({example: 'CC2', description: 'Level of training'})
    readonly description: string;
}
