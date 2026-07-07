import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
@Entity('asistente_evento')
export class AsistenteEvento {
  @PrimaryGeneratedColumn()
  id_asistente_evento!: number;

  @Column()
  tipo_origen!: string;

  @Column()
  identificador!: string;

  @Column({ type: 'tinyint', nullable: true })
  asistencia!: boolean;

  @Column({ type: 'bigint', nullable: true })
  fecha_asistencia!: number;

  @Column({ type: 'bigint', nullable: true })
  fecha_respuestas!: number;

  /* falta unir las tablas, pero solo hay que elimiar el comentario cuando se unan
    @ManyToOne(() => Evento)
  @JoinColumn({ name: 'id_evento' })
  evento!: Evento; */
}
