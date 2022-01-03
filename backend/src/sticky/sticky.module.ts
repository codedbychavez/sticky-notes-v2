import { Module } from '@nestjs/common';
import { StickyService } from './services/sticky.service';

@Module({
  providers: [StickyService]
})
export class StickyModule {}
