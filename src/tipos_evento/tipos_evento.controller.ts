import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposEventoService } from './tipos_evento.service';
import { CreateTiposEventoDto } from './dto/create-tipos_evento.dto';
import { UpdateTiposEventoDto } from './dto/update-tipos_evento.dto';

@Controller('tipos-evento')
export class TiposEventoController {
  constructor(private readonly tiposEventoService: TiposEventoService) {}

  @Post()
  create(@Body() createTiposEventoDto: CreateTiposEventoDto) {
    return this.tiposEventoService.create(createTiposEventoDto);
  }

  @Get()
  findAll() {
    return this.tiposEventoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposEventoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiposEventoDto: UpdateTiposEventoDto) {
    return this.tiposEventoService.update(+id, updateTiposEventoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposEventoService.remove(+id);
  }
}
