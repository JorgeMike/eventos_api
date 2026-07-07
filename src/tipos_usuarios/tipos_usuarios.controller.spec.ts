import { Test, TestingModule } from '@nestjs/testing';
import { TiposUsuariosController } from './tipos_usuarios.controller';
import { TiposUsuariosService } from './tipos_usuarios.service';

describe('TiposUsuariosController', () => {
  let controller: TiposUsuariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposUsuariosController],
      providers: [TiposUsuariosService],
    }).compile();

    controller = module.get<TiposUsuariosController>(TiposUsuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
