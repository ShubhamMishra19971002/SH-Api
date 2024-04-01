import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin/admin.module';
import { DatabaseModule } from './database/database.module';
import { NareController } from './nare/nare.controller';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/your_database_name')
  //  MongooseModule.forRoot('mongodb+srv://TEST_Dev:qwerty123456@cluster0.m98xvio.mongodb.net/'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule{}