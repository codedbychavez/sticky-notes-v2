import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { PrismaService } from 'prisma/services/prisma.service';
import { UserController } from './controllers/user.controller';

@Module({
  providers: [UserService, PrismaService],
  controllers: [UserController]
})
export class UserModule {}
