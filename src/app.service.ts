import {Injectable} from "@nestjs/common";

@Injectable()   //to become a provider;
export class AppService {

    getUsers() {
        return [{id: 1, name: 'Max', message: 'Hello!'}];
    }
}
