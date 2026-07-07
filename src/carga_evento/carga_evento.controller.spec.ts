import { Test, TestingModule } from '@nestjs/testing';
import { CargaEventoController } from './carga_evento.controller';
import { CargaEventoService } from './carga_evento.service';

describe('CargaEventoController', () => {
  let controller: CargaEventoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CargaEventoController],
      providers: [CargaEventoService],
    }).compile();

    controller = module.get<CargaEventoController>(CargaEventoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
