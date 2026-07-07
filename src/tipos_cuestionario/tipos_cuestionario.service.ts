import { Injectable } from '@nestjs/common';
import { CreateTiposCuestionarioDto } from './dto/create-tipos_cuestionario.dto';
import { UpdateTiposCuestionarioDto } from './dto/update-tipos_cuestionario.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TiposCuestionario } from './entities/tipos_cuestionario.entity';

@Injectable()
export class TiposCuestionarioService {
  constructor(
    @InjectRepository(TiposCuestionario)
    private readonly tiposCuestionarioRepository: Repository<TiposCuestionario>,
  ) {}
  create(createTiposCuestionarioDto: CreateTiposCuestionarioDto) {
    return 'This action adds a new tiposCuestionario';
  }

  findAll() {
    return this.tiposCuestionarioRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tiposCuestionario`;
  }

  update(id: number, updateTiposCuestionarioDto: UpdateTiposCuestionarioDto) {
    return `This action updates a #${id} tiposCuestionario`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiposCuestionario`;
  }
}
