import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
 //    MongooseModule.forRoot('mongodb+srv://sh.3cu9n0t.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&appName=sh'),
    ],
  })
export class DatabaseModule {}
