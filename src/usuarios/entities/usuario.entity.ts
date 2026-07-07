import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TiposUsuario } from 'src/tipos_usuarios/entities/tipos_usuario.entity';
@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario!: number;

  @Column({ unique: true })
  nombre!: string;

  @Column()
  password!: string;

  @ManyToOne(() => TiposUsuario)
  @JoinColumn({ name: 'id_tipo_usuario' })
  tipo_usuario!: TiposUsuario;
}
