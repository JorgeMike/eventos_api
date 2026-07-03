import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Eventos } from './eventos.entity';
import { Secciones } from 'src/secciones/entity/secciones.entity';

@Entity({ name: 'evento_seccion' })
export class EventoSeccion {
  @PrimaryGeneratedColumn()
  id_evento_seccion!: number;

  @Column()
  posicion!: string;

  @ManyToOne(() => Eventos)
  @JoinColumn({ name: 'id_evento' })
  evento!: Eventos;

  @ManyToOne(() => Secciones)
  @JoinColumn({ name: 'id_seccion' })
  seccion!: Secciones;
}
