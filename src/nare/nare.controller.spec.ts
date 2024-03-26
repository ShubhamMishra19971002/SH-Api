import { Test, TestingModule } from '@nestjs/testing';
import { NareController } from './nare.controller';

describe('NareController', () => {
  let controller: NareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NareController],
    }).compile();

    controller = module.get<NareController>(NareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
