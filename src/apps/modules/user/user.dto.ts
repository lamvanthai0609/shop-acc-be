import { User } from './user.entity';

export class CreateUserDto {
    name: string;
    username: string;
    email: string;
    password: string;
    numberPhone: string;

    constructor(user: Partial<User>) {
        this.name = user?.name || '';
        this.email = user?.email || '';
        this.numberPhone = user?.numberPhone || '';
        this.username = user?.username || '';
        this.password = user?.password || '';
    }
}

export class UpdateUserDto {
    username: string;
    name: string;
    email: string;
    numberPhone: string;

    constructor(user: Partial<User>) {
        this.name = user?.name || '';
        this.email = user?.email || '';
        this.numberPhone = user?.numberPhone || '';
        this.username = user?.username || '';
    }
}
