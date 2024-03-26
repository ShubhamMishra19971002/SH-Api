import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AdminDetailsDB } from '../admin.schema';

@Injectable()
export class AdminService {
   //  constructor(private adminModel:Model<AdminDetailsDB>){}
   //   async createAdmin(adminDetails:AdminDetailsDB){
   //      const admin=""
   //    //  admin.save()
  //   }
}
