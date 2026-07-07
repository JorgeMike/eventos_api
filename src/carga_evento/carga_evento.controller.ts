import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CargaEventoService } from './carga_evento.service';
import { CreateCargaEventoDto } from './dto/create-carga_evento.dto';
import { UpdateCargaEventoDto } from './dto/update-carga_evento.dto';

@Controller('carga-evento')
export class CargaEventoController {
  constructor(private readonly cargaEventoService: CargaEventoService) {}

  @Post()
  create(@Body() createCargaEventoDto: CreateCargaEventoDto) {
    return this.cargaEventoService.create(createCargaEventoDto);
  }

  @Get()
  findAll() {
    return this.cargaEventoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cargaEventoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCargaEventoDto: UpdateCargaEventoDto) {
    return this.cargaEventoService.update(+id, updateCargaEventoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cargaEventoService.remove(+id);
  }
}
