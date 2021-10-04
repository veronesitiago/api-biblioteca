import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LivrosController } from './livros.controller';
import { LivrosService } from './services/livros.service';
import { LivrosSchema } from './schemas/livros.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Livros', schema: LivrosSchema}
    ])
  ],
  controllers: [LivrosController],
  providers: [LivrosService]
})
export class LivrosModule {}
