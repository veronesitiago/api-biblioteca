import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LivrosService } from 'src/modules/livros/services/livros.service';
import { CriarOpiniaoDto } from '../dtos/criar-opiniao.dto';
import { Opiniao } from '../interfaces/opiniao.interface';

@Injectable()
export class OpiniaoService {

  private readonly logger = new Logger(OpiniaoService.name);

  constructor(
    @InjectModel('Opiniao')
    private readonly opiniaoModel: Model<Opiniao>,
    private readonly livrosService: LivrosService,
  ) { }

  async enviarOpiniao(criarOpiniaoDto: CriarOpiniaoDto): Promise<Opiniao> {

    const livro = await this.livrosService.obterLivro(criarOpiniaoDto.livro.isbn_10);

    if (!livro) {
      throw new BadRequestException(`O isbn10: ${criarOpiniaoDto.livro.isbn_10} não é um livro!`);
    }

    const registrarOpiniao = new this.opiniaoModel(criarOpiniaoDto)
    return await registrarOpiniao.save();

  }

  async obterOpiniaoDeLivro(_id: any): Promise<Array<Opiniao>> {
    const opiniaoEncontrada = await this.opiniaoModel.find()
      .where('livro')
      .in(_id)
      .populate("livro").exec();

    if (!opiniaoEncontrada) {
      throw new NotFoundException(`Avaliação para o isbn10: '${_id}' não encontrada.`);
    }
    return opiniaoEncontrada;
  }
}
