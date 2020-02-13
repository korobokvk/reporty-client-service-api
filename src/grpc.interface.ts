import { Observable } from 'rxjs'

export interface IUser {
  userAuth(credentials: Observable<ICredentials>): Observable<boolean>
  isAuthUser(JWT: IJWT): Observable<boolean>
}
interface IJWT {
  JWT: string
}

export interface ICredentials {
  username: string
  password: string
}
