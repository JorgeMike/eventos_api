import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsistenteEventoService } from './asistente_evento.service';
import { CreateAsistenteEventoDto } from './dto/create-asistente_evento.dto';
import { UpdateAsistenteEventoDto } from './dto/update-asistente_evento.dto';

@Controller('asistente-evento')
export class AsistenteEventoController {
  constructor(private readonly asistenteEventoService: AsistenteEventoService) {}

  @Post()
  create(@Body() createAsistenteEventoDto: CreateAsistenteEventoDto) {
    return this.asistenteEventoService.create(createAsistenteEventoDto);
  }

  @Get()
  findAll() {
    return this.asistenteEventoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asistenteEventoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsistenteEventoDto: UpdateAsistenteEventoDto) {
    return this.asistenteEventoService.update(+id, updateAsistenteEventoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asistenteEventoService.remove(+id);
  }
}
