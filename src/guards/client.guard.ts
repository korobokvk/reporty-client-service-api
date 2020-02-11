import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { AuthService } from '../auth/auth.service'

@Injectable()
export class ClientGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const {
      headers: { authorization },
    } = context.switchToHttp().getRequest()

    const response = this.authService.isAuthUser(authorization)
    return response.pipe(
      map((data: boolean) => {
        console.log(data)
        return data
      }),
    )
  }
}
