import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriarLivroDto } from '../dtos/criar-livro.dto';
import { Livro } from '../interface/livro.interface';

@Injectable()
export class LivrosService {
  private readonly logger = new Logger(LivrosService.name);

  constructor(
    @InjectModel('Livros')
    private readonly livroModel: Model<Livro>
  ){}

  async obterTodosLivros(): Promise <Array<Livro>> {
    return await this.livroModel.find().exec();
  }

  async criarAtualizarLivro(criarLivroDto: CriarLivroDto) {
    this.logger.log(`criarAtualizarLivro: ${JSON.stringify(criarLivroDto)}`);

    const livroExiste = await this.livroModel.findOne(
      {
        isbn_10: criarLivroDto.isbn_10
      }
    ).exec();

    if (livroExiste) {
      return await this.livroModel.findOneAndUpdate({ isbn_10: criarLivroDto.isbn_10}, {$set: criarLivroDto}).exec();
    } else {
      const criarLivro = new this.livroModel(criarLivroDto);
      this.logger.log(`objetoModel: ${JSON.stringify(criarLivro.save())}`);
      return await criarLivro.save();
    }


  }

}
