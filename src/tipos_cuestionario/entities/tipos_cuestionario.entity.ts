import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
Entity('tipos_cuestionario');
export class TiposCuestionario {
  @PrimaryGeneratedColumn()
  id_tipos_cuestionario!: number;

  @Column({ unique: true })
  nombre!: string;

  @Column({ type: 'text', nullable: true })
  descripcion!: string;
}
