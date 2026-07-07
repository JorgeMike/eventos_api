import { PartialType } from '@nestjs/mapped-types';
import { CreateAsistenteEventoDto } from './create-asistente_evento.dto';

export class UpdateAsistenteEventoDto extends PartialType(CreateAsistenteEventoDto) {}
