import { Module, Global } from '@nestjs/common'
import { ClientModule } from './client/client.module'
import { AppController } from './app.controller'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [ClientModule, AuthModule],
  providers: [],
  controllers: [AppController],
  exports: [],
})
export class AppModule {}
