import { Test, TestingModule } from '@nestjs/testing';
import { AsistenteEventoService } from './asistente_evento.service';

describe('AsistenteEventoService', () => {
  let service: AsistenteEventoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsistenteEventoService],
    }).compile();

    service = module.get<AsistenteEventoService>(AsistenteEventoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
