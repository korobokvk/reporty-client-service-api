import { Controller, Post, Body, Logger, Res, Headers, Get } from '@nestjs/common'
import { AuthService } from './auth.service'

class CredentialDTO {
  readonly email: string
  readonly password: string
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async signInUser(@Body() body: CredentialDTO) {
    console.log(body, process.env.AUTH_SERVICE_URL, process.env.TEST_ENV)
    return this.authService.userAuth(body)
  }

  @Post('sign-up')
  async signUpUser(@Body() body: CredentialDTO) {
    return this.authService.createUser(body)
  }

  @Get('check-auth')
  async checkAuth(@Headers() headers) {
    const { authorization } = headers
    return this.authService.isAuthUser(authorization)
  }
}
