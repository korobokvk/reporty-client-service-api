import { Controller, Post, Body, Logger } from '@nestjs/common'
import { AuthService } from './auth.service'
import { map } from 'rxjs/operators'

class CredentialDTO {
  readonly email: string
  readonly password: string
}

@Controller('auth')
export class AuthController {
  private logger = new Logger('AuthController')
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async signInUser(@Body() body: CredentialDTO) {
    return this.authService.userAuth(body)
  }

  @Post('sign-up')
  async signUpUser(@Body() body: CredentialDTO) {
    return this.authService.userAuth(body)
  }
}
