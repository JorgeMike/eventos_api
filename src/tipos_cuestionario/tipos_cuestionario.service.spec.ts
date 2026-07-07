import { Test, TestingModule } from '@nestjs/testing';
import { TiposCuestionarioService } from './tipos_cuestionario.service';

describe('TiposCuestionarioService', () => {
  let service: TiposCuestionarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposCuestionarioService],
    }).compile();

    service = module.get<TiposCuestionarioService>(TiposCuestionarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
