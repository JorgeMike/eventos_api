import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioEventoController } from './usuario_evento.controller';
import { UsuarioEventoService } from './usuario_evento.service';

describe('UsuarioEventoController', () => {
  let controller: UsuarioEventoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioEventoController],
      providers: [UsuarioEventoService],
    }).compile();

    controller = module.get<UsuarioEventoController>(UsuarioEventoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
