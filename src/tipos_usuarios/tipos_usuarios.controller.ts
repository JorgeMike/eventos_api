import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposUsuariosService } from './tipos_usuarios.service';
import { CreateTiposUsuarioDto } from './dto/create-tipos_usuario.dto';
import { UpdateTiposUsuarioDto } from './dto/update-tipos_usuario.dto';

@Controller('tipos-usuarios')
export class TiposUsuariosController {
  constructor(private readonly tiposUsuariosService: TiposUsuariosService) {}

  @Post()
  create(@Body() createTiposUsuarioDto: CreateTiposUsuarioDto) {
    return this.tiposUsuariosService.create(createTiposUsuarioDto);
  }

  @Get()
  findAll() {
    return this.tiposUsuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposUsuariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiposUsuarioDto: UpdateTiposUsuarioDto) {
    return this.tiposUsuariosService.update(+id, updateTiposUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposUsuariosService.remove(+id);
  }
}
