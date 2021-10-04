import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiConfigModule } from './modules/api-config/api-config.module';
import { ApiConfigService } from './modules/api-config/services';
import { LivrosModule } from './modules/livros/livros.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ApiConfigService],
      imports: [ApiConfigModule],
      useFactory: ({ mongoConnection }: ApiConfigService) => mongoConnection,
    }),
    LivrosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
