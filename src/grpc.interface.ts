import { Observable } from 'rxjs'

export interface IUser {
  userAuth(credentials: Observable<ICredentials>): Observable<IJWT>
  createUser(credentials: Observable<ICredentials>): Observable<boolean>
  isAuthUser(JWT: IJWT): Observable<boolean>
}
export interface IJWT {
  JWT: string
}

export interface ICredentials {
  email: string
  password: string
}
