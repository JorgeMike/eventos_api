import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Secciones {
    @PrimaryGeneratedColumn ()
    id_seccion!: number

    @Column ()
    nombre!: string
    
    @Column ({nullable : true})
    descripcion?: string
}