import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposCuestionarioDto } from './create-tipos_cuestionario.dto';

export class UpdateTiposCuestionarioDto extends PartialType(CreateTiposCuestionarioDto) {}
