import { Test, TestingModule } from '@nestjs/testing';
import { AsistenteEventoController } from './asistente_evento.controller';
import { AsistenteEventoService } from './asistente_evento.service';

describe('AsistenteEventoController', () => {
  let controller: AsistenteEventoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsistenteEventoController],
      providers: [AsistenteEventoService],
    }).compile();

    controller = module.get<AsistenteEventoController>(
      AsistenteEventoController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
