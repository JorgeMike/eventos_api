import { Test, TestingModule } from '@nestjs/testing';
import { TiposCuestionarioController } from './tipos_cuestionario.controller';
import { TiposCuestionarioService } from './tipos_cuestionario.service';

describe('TiposCuestionarioController', () => {
  let controller: TiposCuestionarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposCuestionarioController],
      providers: [TiposCuestionarioService],
    }).compile();

    controller = module.get<TiposCuestionarioController>(TiposCuestionarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
