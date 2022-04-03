import {Injectable} from '@nestjs/common';
import {Horse} from "./horses.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateHorseDto} from "./dto/create-horse.dto";
import {RolesService} from "../roles/roles.service";

@Injectable()
export class HorsesService {
    //knocking on db for req:
    constructor(@InjectModel(Horse)
                private horseRepository: typeof Horse,
                private rolesService: RolesService
    ) {}

    async create(dto: CreateHorseDto) {
        const horse = await this.horseRepository.create(dto);
        const role = await this.rolesService.getByValue("EVENTING");
        //щоб перезаписати поле (першочергово по умові ролей нема у table horses):
        await horse.$set('roles', [role.id]);   //can be many roles;
        return horse;

    }

    async getAll() {
        const horses = await this.horseRepository.findAll({include: {all: true}});  //відобразити і ролі;
        return horses;
    }
}
