import { Injectable } from '@nestjs/common';
import { CreateUsuarioEventoDto } from './dto/create-usuario_evento.dto';
import { UpdateUsuarioEventoDto } from './dto/update-usuario_evento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEvento } from './entities/usuario_evento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioEventoService {
  constructor(
    @InjectRepository(UsuarioEvento)
    private readonly usuarioEventoRepository: Repository<UsuarioEvento>,
  ) {}
  create(createUsuarioEventoDto: CreateUsuarioEventoDto) {
    return 'This action adds a new usuarioEvento';
  }

  findAll() {
    return this.usuarioEventoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} usuarioEvento`;
  }

  update(id: number, updateUsuarioEventoDto: UpdateUsuarioEventoDto) {
    return `This action updates a #${id} usuarioEvento`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuarioEvento`;
  }
}
