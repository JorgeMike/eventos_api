import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Preguntas } from "../../preguntas/entity/preguntas.entity";

@Entity()
export class Respuestas {
    @PrimaryGeneratedColumn ()
    id_respuesta!: number

    @Column ()
    respuesta!: string

   @OneToOne(() => Preguntas) 
   @JoinColumn({name: "id_pregunta"})
   pregunta!: Preguntas   
}