import { Injectable, HttpService, OnModuleInit } from '@nestjs/common'
import { map } from 'rxjs/operators'
import { Observable, ReplaySubject } from 'rxjs'
import { Client, ClientGrpc } from '@nestjs/microservices'
import { IUser, ICredentials } from '../grpc.interface'
import { getMicroserviceOptions } from '../grpc.options'

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(private readonly http: HttpService) {}

  @Client({ ...getMicroserviceOptions(process.env.AUTH_SERVICE_URL) })
  private client: ClientGrpc
  private grpcService: IUser

  onModuleInit() {
    this.grpcService = this.client.getService<IUser>('AuthService')
  }

  isAuthUser(JWT): Observable<boolean> {
    return this.grpcService.isAuthUser(JWT).pipe(map((response) => response))
  }

  userAuth({ email, password }: { email: string; password: string }): Observable<boolean> {
    const helloRequest$ = new ReplaySubject<ICredentials>()
    helloRequest$.next({ email, password })
    return this.grpcService.userAuth(helloRequest$).pipe(
      map((data) => {
        helloRequest$.complete()
        return data
      }),
    )
  }
}
