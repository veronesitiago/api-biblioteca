import { Module } from '@nestjs/common';
import { OpiniaoController } from './opiniao.controller';
import { OpiniaoService } from './services/opiniao.service';
import { OpiniaoSchema } from './schemas/opiniao.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { LivrosModule } from '../livros/livros.module';
import { LivrosSchema } from '../livros/schemas/livros.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Opiniao', schema: OpiniaoSchema },
      { name: 'Livro', schema: LivrosSchema}
    ]),
    LivrosModule
  ],
  controllers: [OpiniaoController],
  providers: [OpiniaoService]
})
export class OpiniaoModule {}
