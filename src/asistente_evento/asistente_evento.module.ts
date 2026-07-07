import { Module } from '@nestjs/common';
import { AsistenteEventoService } from './asistente_evento.service';
import { AsistenteEventoController } from './asistente_evento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsistenteEvento } from './entities/asistente_evento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AsistenteEvento])],
  controllers: [AsistenteEventoController],
  providers: [AsistenteEventoService],
})
export class AsistenteEventoModule {}
