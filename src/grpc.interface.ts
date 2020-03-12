import { Observable } from 'rxjs'

export interface IUser {
  userAuth(credentials: ICredentials): Observable<IJWT>
  createUser(credentials: ICredentials): Observable<IJWT>
  isAuthUser(JWT: IJWT): Observable<boolean>
}
export interface IJWT {
  JWT: string
}

export interface ICredentials {
  email: string
  password: string
}
