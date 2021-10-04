import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiConfigModule } from './modules/api-config/api-config.module';
import { ApiConfigService } from './modules/api-config/services';
import { LivrosModule } from './modules/livros/livros.module';
import { OpiniaoModule } from './modules/opiniao/opiniao.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ApiConfigService],
      imports: [ApiConfigModule],
      useFactory: ({ mongoConnection }: ApiConfigService) => mongoConnection,
    }),
    LivrosModule,
    OpiniaoModule,
    AuthModule,
    UsuariosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
