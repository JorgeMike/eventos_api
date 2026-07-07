import { Module } from '@nestjs/common';
import { TiposCuestionarioService } from './tipos_cuestionario.service';
import { TiposCuestionarioController } from './tipos_cuestionario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposCuestionario } from './entities/tipos_cuestionario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TiposCuestionario])],
  controllers: [TiposCuestionarioController],
  providers: [TiposCuestionarioService],
})
export class TiposCuestionarioModule {}
