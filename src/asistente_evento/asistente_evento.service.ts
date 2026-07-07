import { Injectable } from '@nestjs/common';
import { CreateAsistenteEventoDto } from './dto/create-asistente_evento.dto';
import { UpdateAsistenteEventoDto } from './dto/update-asistente_evento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AsistenteEvento } from './entities/asistente_evento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AsistenteEventoService {
  constructor(
    @InjectRepository(AsistenteEvento)
    private readonly asistenteEventoRepository: Repository<AsistenteEvento>,
  ) {}
  create(createAsistenteEventoDto: CreateAsistenteEventoDto) {
    return 'This action adds a new asistenteEvento';
  }

  findAll() {
    return this.asistenteEventoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} asistenteEvento`;
  }

  update(id: number, updateAsistenteEventoDto: UpdateAsistenteEventoDto) {
    return `This action updates a #${id} asistenteEvento`;
  }

  remove(id: number) {
    return `This action removes a #${id} asistenteEvento`;
  }
}
