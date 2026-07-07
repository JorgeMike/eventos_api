import { Test, TestingModule } from '@nestjs/testing';
import { TiposEventoService } from './tipos_evento.service';

describe('TiposEventoService', () => {
  let service: TiposEventoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposEventoService],
    }).compile();

    service = module.get<TiposEventoService>(TiposEventoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
