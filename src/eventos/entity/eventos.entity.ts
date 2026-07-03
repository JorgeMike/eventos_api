import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EventoSeccion } from './eventoseccion.entity';

@Entity()
export class Eventos {
  @PrimaryGeneratedColumn()
  id_evento!: number;

  @Column()
  nombre!: string;

  @Column({ nullable: true })
  descripcionX?: string;

  @Column()
  editable!: boolean;

  @Column({ nullable: true })
  fecha_maxima_registro?: number;

  @Column()
  fecha_inicio!: number;

  @Column()
  fecha_fin!: number;

  @Column({ nullable: true })
  cupo_maximo?: number;

  @Column({ nullable: true })
  banner?: string;

  @Column({ nullable: true })
  mensaje_confirmacion?: string;

  @Column({ nullable: true })
  exclusivo?: boolean;

  @OneToMany(() => EventoSeccion, (eventoSeccion) => eventoSeccion.evento)
  eventoSecciones!: EventoSeccion[];
}
