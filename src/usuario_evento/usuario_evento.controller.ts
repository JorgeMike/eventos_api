import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioEventoService } from './usuario_evento.service';
import { CreateUsuarioEventoDto } from './dto/create-usuario_evento.dto';
import { UpdateUsuarioEventoDto } from './dto/update-usuario_evento.dto';

@Controller('usuario-evento')
export class UsuarioEventoController {
  constructor(private readonly usuarioEventoService: UsuarioEventoService) {}

  @Post()
  create(@Body() createUsuarioEventoDto: CreateUsuarioEventoDto) {
    return this.usuarioEventoService.create(createUsuarioEventoDto);
  }

  @Get()
  findAll() {
    return this.usuarioEventoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioEventoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioEventoDto: UpdateUsuarioEventoDto) {
    return this.usuarioEventoService.update(+id, updateUsuarioEventoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioEventoService.remove(+id);
  }
}
