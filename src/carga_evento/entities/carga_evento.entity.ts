import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
@Entity('carga_evento')
export class CargaEvento {
  @PrimaryGeneratedColumn()
  id_carga_evento!: number;

  @Column()
  tipo_origen!: string;

  @Column()
  identificador!: string;
  /*me falta agregar la union entre tablas con Evento, pero quedaria algi asi: 

  @ManyToOne(() => Evento)
  @JoinColumn({ name: 'id_evento' })
  evento!: Evento;

  solo hay que eliminar los textos y comentarios y queda*/
}
