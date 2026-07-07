import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
@Entity('tipos_usuario')
export class TiposUsuario {
  @PrimaryGeneratedColumn()
  id_tipo_usuario!: number;

  @Column({ unique: true })
  nombre!: string;

  @Column({ type: 'text', nullable: true })
  descripcion!: string;

  @OneToMany(() => Usuario, (usuario) => usuario.tipo_usuario)
  usuarios!: Usuario[];
}
