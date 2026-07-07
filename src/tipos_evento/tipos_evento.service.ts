import { Injectable } from '@nestjs/common';
import { CreateTiposEventoDto } from './dto/create-tipos_evento.dto';
import { UpdateTiposEventoDto } from './dto/update-tipos_evento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TiposEvento } from './entities/tipos_evento.entity';

@Injectable()
export class TiposEventoService {
  constructor(
    @InjectRepository(TiposEvento)
    private readonly tiposEventoRepository: Repository<TiposEvento>,
  ) {}
  create(createTiposEventoDto: CreateTiposEventoDto) {
    return 'This action adds a new tiposEvento';
  }

  findAll() {
    return this.tiposEventoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tiposEvento`;
  }

  update(id: number, updateTiposEventoDto: UpdateTiposEventoDto) {
    return `This action updates a #${id} tiposEvento`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiposEvento`;
  }
}
