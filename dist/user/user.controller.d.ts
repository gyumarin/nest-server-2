import { Prisma } from '@prisma/client';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(data: Prisma.UserCreateInput): Promise<import(".prisma/client").User>;
}
