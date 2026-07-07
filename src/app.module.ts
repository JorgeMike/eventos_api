import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposCuestionarioModule } from './tipos_cuestionario/tipos_cuestionario.module';
import { TiposUsuariosModule } from './tipos_usuarios/tipos_usuarios.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuarioEventoModule } from './usuario_evento/usuario_evento.module';
import { TiposEventoModule } from './tipos_evento/tipos_evento.module';
import { CargaEventoModule } from './carga_evento/carga_evento.module';
import { AsistenteEventoModule } from './asistente_evento/asistente_evento.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mariadb',
          host: config.get<string>('DB_HOST'),
          database: config.get<string>('DB'),
          username: config.get<string>('DB_USER'),
          password: config.get<string>('DB_PASSWORD'),
          port: parseInt(config.get<string>('DB_PORT')!),
          synchronize: true,
        };
      },
    }),
    TiposCuestionarioModule,
    AsistenteEventoModule,
    CargaEventoModule,
    TiposEventoModule,
    UsuarioEventoModule,
    UsuariosModule,
    TiposUsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
