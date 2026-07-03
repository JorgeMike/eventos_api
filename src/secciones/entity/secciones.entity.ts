import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EventoSeccion } from 'src/eventos/entity/eventoseccion.entity';
import { SeccionPregunta } from './seccionpregunta.entity';

@Entity()
export class Secciones {
  @PrimaryGeneratedColumn()
  id_seccion!: number;

  @Column()
  nombre!: string;

  @Column({ nullable: true })
  descripcion?: string;

  @OneToMany(() => EventoSeccion, (eventoSeccion) => eventoSeccion.seccion)
  eventoSecciones!: EventoSeccion[];

  @OneToMany(
    () => SeccionPregunta,
    (seccionPregunta) => seccionPregunta.seccion,
  )
  seccionPreguntas!: SeccionPregunta[];
}
