import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('tipos_evento')
export class TiposEvento {
  @PrimaryGeneratedColumn()
  id_tipo_evento!: number;

  @Column({ unique: true })
  nombre!: string;

  @Column({ type: 'text', nullable: true })
  descripcion!: string;
}
