import { Module } from '@nestjs/common';
import { TiposUsuariosService } from './tipos_usuarios.service';
import { TiposUsuariosController } from './tipos_usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposUsuario } from './entities/tipos_usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TiposUsuario])],
  controllers: [TiposUsuariosController],
  providers: [TiposUsuariosService],
})
export class TiposUsuariosModule {}
