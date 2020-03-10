import { Injectable, HttpService, OnModuleInit } from '@nestjs/common'
import { map, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Client, ClientGrpc } from '@nestjs/microservices'
import { IUser, ICredentials, IJWT } from '../grpc.interface'
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

  userAuth(credentials: ICredentials): Observable<IJWT> {
    console.log(credentials)
    return this.grpcService.userAuth(credentials).pipe(
      map((data) => {
        console.log(data)
        return data
      }),
    )
  }

  createUser(credentials: ICredentials): Observable<IJWT> {
    return this.grpcService.createUser(credentials)
  }
}
