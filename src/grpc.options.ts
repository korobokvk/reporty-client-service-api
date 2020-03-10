import { ClientOptions, Transport } from '@nestjs/microservices'
import { join } from 'path'

console.log(join(__dirname, '../src/app.proto'))
export const getMicroserviceOptions = (url: string): ClientOptions => {
  return {
    transport: Transport.GRPC,
    options: {
      package: 'app',
      url,
      protoPath: join(__dirname, '../src/app.proto'),
    },
  }
}
