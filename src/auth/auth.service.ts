import { Injectable, HttpService } from '@nestjs/common'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpService) {}

  isAuthUser(JWT): Observable<boolean> {
    return this.http.get(`http://docker.for.mac.localhost:3020/is-auth/${JWT}`).pipe(map((response) => response.data))
  }

  userAuth({ username, password }: { username: string; password: string }): Observable<string> {
    return this.http
      .post(`http://docker.for.mac.localhost:3020/create-useer/`, { username, password })
      .pipe(map((response) => response.data))
  }
}
