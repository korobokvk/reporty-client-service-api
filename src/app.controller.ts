import { Controller, Get, Logger } from '@nestjs/common'

@Controller()
export class AppController {
  private logger = new Logger('AppController')

  @Get()
  getSome() {
    return 'main'
  }
}
