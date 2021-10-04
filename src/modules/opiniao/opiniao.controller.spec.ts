import { Test, TestingModule } from '@nestjs/testing';
import { OpiniaoController } from './opiniao.controller';

describe('OpiniaoController', () => {
  let controller: OpiniaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpiniaoController],
    }).compile();

    controller = module.get<OpiniaoController>(OpiniaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
