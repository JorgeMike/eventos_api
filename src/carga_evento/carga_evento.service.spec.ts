import { Test, TestingModule } from '@nestjs/testing';
import { CargaEventoService } from './carga_evento.service';

describe('CargaEventoService', () => {
  let service: CargaEventoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CargaEventoService],
    }).compile();

    service = module.get<CargaEventoService>(CargaEventoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
