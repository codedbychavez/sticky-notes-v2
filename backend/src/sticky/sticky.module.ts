import { Module } from '@nestjs/common';
import { StickyService } from './services/sticky.service';
import { PrismaService } from 'prisma/services/prisma.service';
import { StickyController } from './controllers/sticky.controller';

@Module({
  providers: [StickyService, PrismaService],
  controllers: [StickyController]
})
export class StickyModule {}
