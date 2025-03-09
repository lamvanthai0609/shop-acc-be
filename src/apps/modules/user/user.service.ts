import { GeneralService } from '../general';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserModel } from './user.model';

export class UserService extends GeneralService<User> {
    constructor() {
        super(new UserModel());
    }

    async save(data: Partial<User>): Promise<number> {
        const userDTO = new CreateUserDto(data);
        console.log('userDTO', userDTO);
        return super.save(userDTO);
    }

    async update(id: number, data: Partial<User>): Promise<boolean> {
        const userDTO = new UpdateUserDto(data);
        return super.update(id, userDTO);
    }
}
