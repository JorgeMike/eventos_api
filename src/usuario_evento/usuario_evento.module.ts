import { Module } from '@nestjs/common';
import { UsuarioEventoService } from './usuario_evento.service';
import { UsuarioEventoController } from './usuario_evento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEvento } from './entities/usuario_evento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEvento])],
  controllers: [UsuarioEventoController],
  providers: [UsuarioEventoService],
})
export class UsuarioEventoModule {}
