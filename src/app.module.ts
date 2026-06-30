import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),
  TypeOrmModule.forRootAsync({
    useFactory: (config: ConfigService) => ({
      type: 'mariadb',
      host: config.get<string>('DB_HOST'),
      port: parseInt(config.get<string>('DB_PORT')!),
      username: config.get<string>('DB_USERNAME'),
      password: config.get<string>('DB_PASSWORD'),
      database: config.get<string>('DB_NAME'),
      synchronize: true,
    }),    
    inject: [ConfigService],
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
