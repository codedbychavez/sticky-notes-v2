import { 
    Controller,
    Post,
    Body,
 } from '@nestjs/common';

 import { UserService } from '../services/user.service';

 import { User as UserModel, Sticky as StickyModel } from '@prisma/client';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Post('user')
    async signupUser(
        @Body() userData: { name?: string; email: string },
    ): Promise<UserModel> {
        return this.userService.createUser(userData);
    }
}
