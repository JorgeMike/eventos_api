import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import { Eventos } from "./eventos.entity";
import { Secciones } from "src/secciones/entity/secciones.entity";

@Entity({name: "evento_seccion"})
export class EventoSeccion {
    @PrimaryGeneratedColumn ()
    id_evento_seccion!: number

    @Column ()
    posicion!: string

    @OneToOne(() => Eventos) 
       @JoinColumn({name: "id_evento"})
       evento!: Eventos   

     @OneToOne(() => Secciones) 
       @JoinColumn({name: "id_seccion"})
       seccion!: Secciones  
}