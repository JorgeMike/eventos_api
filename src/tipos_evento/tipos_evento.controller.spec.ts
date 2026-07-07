import { Test, TestingModule } from '@nestjs/testing';
import { TiposEventoController } from './tipos_evento.controller';
import { TiposEventoService } from './tipos_evento.service';

describe('TiposEventoController', () => {
  let controller: TiposEventoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposEventoController],
      providers: [TiposEventoService],
    }).compile();

    controller = module.get<TiposEventoController>(TiposEventoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
