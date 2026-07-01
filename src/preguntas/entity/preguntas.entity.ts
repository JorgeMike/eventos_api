import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Preguntas {
    @PrimaryGeneratedColumn ()
    id_pregunta!: number

    @Column ()
    enunciado!: string

    @Column ()
    tipo_pregunta!: string
    
    @Column ({nullable : true})
    validacion?: string
}