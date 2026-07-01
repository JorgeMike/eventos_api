import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import { Preguntas } from "src/preguntas/entity/preguntas.entity";

@Entity({name: "pregunta_opcion"})
export class PreguntaOpcion {
    @PrimaryGeneratedColumn ()
    id_pregunta_opcion!: number

    @Column ()
    valor!: string

    @Column ({nullable : true})
    posicion?: number   

    @OneToOne(() => Preguntas) 
       @JoinColumn({name: "id_pregunta"})
       pregunta!: Preguntas   

}