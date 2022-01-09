import { Test, TestingModule } from '@nestjs/testing';
import { StickyController } from './sticky.controller';

describe('StickyController', () => {
  let controller: StickyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StickyController],
    }).compile();

    controller = module.get<StickyController>(StickyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
