import { ClientOptions, Transport } from '@nestjs/microservices'
import { join } from 'path'

// Same options object used by microservice server
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
