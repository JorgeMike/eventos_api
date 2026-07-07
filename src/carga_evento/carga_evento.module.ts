import { Module } from '@nestjs/common';
import { CargaEventoService } from './carga_evento.service';
import { CargaEventoController } from './carga_evento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargaEvento } from './entities/carga_evento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CargaEvento])],
  controllers: [CargaEventoController],
  providers: [CargaEventoService],
})
export class CargaEventoModule {}
