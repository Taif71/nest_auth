import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.gaurd';
import { AuthService } from './auth/auth.service';
import { Request } from 'express';

@Controller('auth')
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() body: any) {
      console.log(body);
      if(body == undefined){
        console.log("Undefined\n");
      }
     return this.authService.login(body.username);
  }
}
