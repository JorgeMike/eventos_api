import { Test, TestingModule } from '@nestjs/testing';
import { TiposUsuariosService } from './tipos_usuarios.service';

describe('TiposUsuariosService', () => {
  let service: TiposUsuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposUsuariosService],
    }).compile();

    service = module.get<TiposUsuariosService>(TiposUsuariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
