import { Controller, UseGuards, Get } from '@nestjs/common'
import { ClientGuard } from '../guards/client.guard'
import { ClientService } from './client.service'

@UseGuards(ClientGuard)
@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}
  @Get()
  getClient() {
    return this.clientService.getClient()
  }
}
