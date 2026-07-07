import { Injectable } from '@nestjs/common';
import { CreateCargaEventoDto } from './dto/create-carga_evento.dto';
import { UpdateCargaEventoDto } from './dto/update-carga_evento.dto';
import { CargaEvento } from './entities/carga_evento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CargaEventoService {
  constructor(
    @InjectRepository(CargaEvento)
    private readonly cargaEventioRepository: Repository<CargaEvento>,
  ) {}
  create(createCargaEventoDto: CreateCargaEventoDto) {
    return 'This action adds a new cargaEvento';
  }

  findAll() {
    return this.cargaEventioRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cargaEvento`;
  }

  update(id: number, updateCargaEventoDto: UpdateCargaEventoDto) {
    return `This action updates a #${id} cargaEvento`;
  }

  remove(id: number) {
    return `This action removes a #${id} cargaEvento`;
  }
}
