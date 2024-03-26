import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // // Enable CORS
  // app.enableCors({
  //   origin: true, // Allow all origins
  //   methods: ['GET', 'POST'], // Allow only specified HTTP methods
  //   allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specified headers
  //   credentials: true, // Allow sending cookies and other credentials
  // });
  app.enableCors()

  await app.listen(5011);
}
bootstrap();