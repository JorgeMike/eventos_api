import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Secciones } from 'src/secciones/entity/secciones.entity';
import { Preguntas } from 'src/preguntas/entity/preguntas.entity';

@Entity({ name: 'seccion_pregunta' })
export class SeccionPregunta {
  @PrimaryGeneratedColumn()
  id_seccion_pregunta!: number;

  @Column()
  posicion!: string;

  @ManyToOne(() => Secciones)
  @JoinColumn({ name: 'id_seccion' })
  seccion!: Secciones;

  @ManyToOne(() => Preguntas)
  @JoinColumn({ name: 'id_pregunta' })
  pregunta!: Preguntas;
}
