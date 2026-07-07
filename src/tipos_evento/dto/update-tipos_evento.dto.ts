import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposEventoDto } from './create-tipos_evento.dto';

export class UpdateTiposEventoDto extends PartialType(CreateTiposEventoDto) {}
