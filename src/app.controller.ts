import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AdminDtoRequest } from './admin/dto/admin.dto/admin.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }



  @Post('/login')
  adminLogin(@Body() adminRequest:AdminDtoRequest ){
      console.log(adminRequest)
  }
}
