import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://127.0.0.1:27017/your_database_name')
    ],
})
export class DatabaseModule implements OnModuleInit {
    constructor(private readonly connection: Connection) {}

    async onModuleInit() {
        try {
            await this.connection;
            console.log('Connected to MongoDB database');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    }
}