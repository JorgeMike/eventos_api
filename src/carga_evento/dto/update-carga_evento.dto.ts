import { PartialType } from '@nestjs/mapped-types';
import { CreateCargaEventoDto } from './create-carga_evento.dto';

export class UpdateCargaEventoDto extends PartialType(CreateCargaEventoDto) {}
