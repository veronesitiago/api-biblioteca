import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigService } from './services';
import { validationSchema } from './api-config.validation';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ validationSchema })],
  providers: [ApiConfigService],
  exports: [ApiConfigService],
})
export class ApiConfigModule {}
