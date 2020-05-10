import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  indexRender(): void {}

  @Get('sender')
  @Render('send')
  senderRender(): void {}

  @Get('receiver')
  @Render('receive')
  receiverRender(): void {}
}
