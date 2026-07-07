import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposCuestionarioService } from './tipos_cuestionario.service';
import { CreateTiposCuestionarioDto } from './dto/create-tipos_cuestionario.dto';
import { UpdateTiposCuestionarioDto } from './dto/update-tipos_cuestionario.dto';

@Controller('tipos-cuestionario')
export class TiposCuestionarioController {
  constructor(private readonly tiposCuestionarioService: TiposCuestionarioService) {}

  @Post()
  create(@Body() createTiposCuestionarioDto: CreateTiposCuestionarioDto) {
    return this.tiposCuestionarioService.create(createTiposCuestionarioDto);
  }

  @Get()
  findAll() {
    return this.tiposCuestionarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposCuestionarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiposCuestionarioDto: UpdateTiposCuestionarioDto) {
    return this.tiposCuestionarioService.update(+id, updateTiposCuestionarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposCuestionarioService.remove(+id);
  }
}
