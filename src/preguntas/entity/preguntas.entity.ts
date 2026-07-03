import { SeccionPregunta } from 'src/secciones/entity/seccionpregunta.entity';
import { PreguntaOpcion } from './preguntaopcion.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Preguntas {
  @PrimaryGeneratedColumn()
  id_pregunta!: number;

  @Column()
  enunciado!: string;

  @Column()
  tipo_pregunta!: string;

  @Column({ nullable: true })
  validacion?: string;

  @OneToMany(
    () => SeccionPregunta,
    (seccionPregunta) => seccionPregunta.pregunta,
  )
  seccionPreguntas!: SeccionPregunta[];

  @OneToMany(() => PreguntaOpcion, (preguntaOpcion) => preguntaOpcion.pregunta)
  preguntaOpciones!: PreguntaOpcion[];
}
