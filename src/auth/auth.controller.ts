import { Controller, Post, Body, Logger } from '@nestjs/common'
import { AuthService } from './auth.service'
import { map } from 'rxjs/operators'

class CredentialDTO {
  readonly username: string
  readonly password: string
}

@Controller('auth')
export class AuthController {
  private logger = new Logger('AuthController')
  constructor(private readonly authService: AuthService) {}

  @Post()
  async createUser(@Body() body: CredentialDTO) {
    return this.authService.userAuth(body)
  }
}
