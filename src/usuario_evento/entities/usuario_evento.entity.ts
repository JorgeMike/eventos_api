import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { PrimaryGeneratedColumn, ManyToOne, JoinColumn, Entity } from 'typeorm';
@Entity('usuario_evento')
export class UsuarioEvento {
  @PrimaryGeneratedColumn()
  id_usuario_evento!: number;

  /* falta agregar las otras  tablas, pero cuando se agreguen solo hay que eloiminar el comentario y dejar el codigo:
  @ManyToOne(() => Evento)
  @JoinColumn({ name: 'id_evento' })
  evento!: Evento; */

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario!: Usuario;
}
