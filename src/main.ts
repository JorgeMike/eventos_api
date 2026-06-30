import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  console.log(config.get<string>('DB_HOST'));
  console.log(config.get<string>('DB_PORT'));
  console.log(config.get<string>('DB_USERNAME'));
  console.log(config.get<string>('DB_PASSWORD'));
  console.log(config.get<string>('DB_NAME')); 
  await app.listen(config.get<string>('PORT') ?? 3000);
}
bootstrap();
