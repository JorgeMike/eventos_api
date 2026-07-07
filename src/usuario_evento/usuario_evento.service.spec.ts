import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioEventoService } from './usuario_evento.service';

describe('UsuarioEventoService', () => {
  let service: UsuarioEventoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioEventoService],
    }).compile();

    service = module.get<UsuarioEventoService>(UsuarioEventoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
