import { Test, TestingModule } from '@nestjs/testing';
import { OpiniaoService } from './opiniao.service';

describe('OpiniaoService', () => {
  let service: OpiniaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpiniaoService],
    }).compile();

    service = module.get<OpiniaoService>(OpiniaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
