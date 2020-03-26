import { Injectable, HttpService, OnModuleInit, HttpException } from '@nestjs/common'
import { map, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Client, ClientGrpc } from '@nestjs/microservices'
import { IUser, ICredentials, IJWT } from '../grpc.interface'
import { getMicroserviceOptions } from '../grpc.options'
import { errorsCode } from '../constants/grpc-errors-code'

const grpsRoute = process.env.TEST_ENV
@Injectable()
export class AuthService implements OnModuleInit {
  constructor(private readonly http: HttpService) {
    console.log(grpsRoute)
  }

  @Client({ ...getMicroserviceOptions(grpsRoute) })
  private client: ClientGrpc
  private grpcService: IUser

  onModuleInit() {
    this.grpcService = this.client.getService<IUser>('AuthService')
  }

  isAuthUser(JWT): Observable<any> {
    return this.grpcService.isAuthUser({ JWT }).pipe(
      map((response) => {
        return !!response
      }),
      catchError((err) => {
        throw new HttpException(err.details, errorsCode[err.code])
      }),
    )
  }

  userAuth(credentials: ICredentials): Observable<IJWT> {
    return this.grpcService.userAuth(credentials).pipe(
      map((data) => {
        console.log('RESPONSE API', data)
        return data
      }),
      catchError((err) => {
        console.log('ERROR API', err)
        throw new HttpException(err.details, errorsCode[err.code])
      }),
    )
  }

  createUser(credentials: ICredentials): Observable<IJWT> {
    return this.grpcService.createUser(credentials).pipe(
      map((data) => {
        return data
      }),
      catchError((err) => {
        throw new HttpException(err.details, errorsCode[err.code])
      }),
    )
  }
}
