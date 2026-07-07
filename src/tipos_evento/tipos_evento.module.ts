import { Module } from '@nestjs/common';
import { TiposEventoService } from './tipos_evento.service';
import { TiposEventoController } from './tipos_evento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposEvento } from './entities/tipos_evento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TiposEvento])],
  controllers: [TiposEventoController],
  providers: [TiposEventoService],
})
export class TiposEventoModule {}
