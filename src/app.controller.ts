import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express'
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getTextInput(@Req() request: Request): string {
    console.log("GOT POST REQUEST")
    console.log("BODY: ", request.body)
    return 'Server received message'
  }
}
