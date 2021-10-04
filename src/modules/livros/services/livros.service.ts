import { Injectable, Logger, NotFoundException } from '@nestjs/common';
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

  async obterLivro(isbn_10: string): Promise <Livro> {
    const livroEncontrado = await this.livroModel.findOne({ isbn_10 }).exec();
    if (!livroEncontrado) {
      throw new NotFoundException(`Livro com isbn10: '${isbn_10}' não encontrado.`);
    }
    return livroEncontrado;
  }

  async criarAtualizarLivro(criarLivroDto: CriarLivroDto) {

    const livroExiste = await this.livroModel.findOne(
      {
        isbn_10: criarLivroDto.isbn_10
      }
    ).exec();

    if (livroExiste) {
      return await this.livroModel.findOneAndUpdate({ isbn_10: criarLivroDto.isbn_10}, {$set: criarLivroDto}).exec();
    } else {
      const criarLivro = new this.livroModel(criarLivroDto);
      return await criarLivro.save();
    }


  }

}
