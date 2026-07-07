import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TiposUsuario } from './entities/tipos_usuario.entity';
import { Injectable } from '@nestjs/common';
import { CreateTiposUsuarioDto } from './dto/create-tipos_usuario.dto';
import { UpdateTiposUsuarioDto } from './dto/update-tipos_usuario.dto';

@Injectable()
export class TiposUsuariosService {
  constructor(
    @InjectRepository(TiposUsuario)
    private readonly tiposUsuariosRepository: Repository<TiposUsuario>,
  ) {}
  create(createTiposUsuarioDto: CreateTiposUsuarioDto) {
    return 'This action adds a new tiposUsuario';
  }

  findAll() {
    return this.tiposUsuariosRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tiposUsuario`;
  }

  update(id: number, updateTiposUsuarioDto: UpdateTiposUsuarioDto) {
    return `This action updates a #${id} tiposUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiposUsuario`;
  }
}
