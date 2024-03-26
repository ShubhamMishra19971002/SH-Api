import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
export class AdminDetailsDB extends Document{
    @Prop()
    adminId:string
    @Prop()
    password:string
    @Prop()
    adminName:string
    @Prop()
    adminRoles:Array<any>
    @Prop()
    adminRolesID:string
}

export const AdminDetailsSchema =SchemaFactory.createForClass(AdminDetailsDB)


export const changeUIDBSchema = new mongoose.Schema(
    {
        headerColor:String
    }
)