import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminDBReq, AdminDtoRequest, updateUserScreenDtoRequest } from '../dto/admin.dto/admin.dto';
import { AdminService } from './admin.service';
import { AdminDetailsDB, changeUIDBSchema } from '../admin.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { uiChange } from '../interface';
import { error } from 'console';

@Controller('admin')
export class AdminController {
    constructor(@InjectModel('uiChange') private readonly uiChangeModal:Model<uiChange>){}

    @Get()
    testAdmin(req,res){
        return "admin api is working"
        
    }
    @Post('/update-user-screen')
    updateUserScreen(@Body() updateUserScreenReq:updateUserScreenDtoRequest){
        if(updateUserScreenReq && updateUserScreenReq.updateType==="header_color"){
            console.log(updateUserScreenReq.headerColor)
            let uiChangeModalDbReq:uiChange
            uiChangeModalDbReq.headerColor=updateUserScreenReq.headerColor

            const uiSchema =new this.uiChangeModal(uiChangeModalDbReq)
            uiSchema.save().then((res)=>{console.log(res)
            return res}
            ).catch(error=>console.log(error))
        


            //save the response in database 
        }
        
    }
    
    @Post('/create-admin')
    createAdmin(@Body() createAdminReq:AdminDtoRequest, ){
        // let admin:AdminDetails
        // admin.adminId=createAdminReq.admin_id
        // admin.password=createAdminReq.password
        // admin.adminRoles=createAdminReq.adminRoles?createAdminReq.adminRoles:[]
        // admin.adminId=createAdminReq.admin_id
        // admin.adminName=createAdminReq.adminName
        // this.adminService.createAdmin(admin)
        // console.log(createAdminReq,admin)
    }
    @Post('/login')
    adminLogin(@Body() adminRequest:AdminDtoRequest ){
        console.log(adminRequest)
    }
    
}
