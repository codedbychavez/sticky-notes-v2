import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from '../prisma/services/prisma.service';
import { UserModule } from './user/user.module';
import { StickyModule } from './sticky/sticky.module';
import { join } from 'path';

@Module({
  imports: [
    UserModule, 
    StickyModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
