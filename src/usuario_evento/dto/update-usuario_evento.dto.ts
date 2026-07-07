import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioEventoDto } from './create-usuario_evento.dto';

export class UpdateUsuarioEventoDto extends PartialType(CreateUsuarioEventoDto) {}
