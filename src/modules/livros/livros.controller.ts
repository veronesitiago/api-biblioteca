import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriarLivroDto } from './dtos/criar-livro.dto';
import { Livro } from './interface/livro.interface';
import { LivrosService } from './services/livros.service';
import { ValidacaoParametrosPipe } from '../../common/pipes/validacao-parametros.pipe';

@Controller('api/v1/livros')
export class LivrosController {

  constructor(
    private readonly service: LivrosService
  ) {}

  @Get()
  async obterTodosLivros(): Promise<Array<Livro>> {
    return await this.service.obterTodosLivros();
  };

  @Get('/:_isbn_10')
  async obterLivro(
    @Param('_isbn_10', ValidacaoParametrosPipe) _isbn_10: string): Promise<Livro> {
    return await this.service.obterLivro(_isbn_10);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async criarAtualizarLivro(
    @Body() criarLivroDto: CriarLivroDto,
  ): Promise<Livro> {
    return await this.service.criarAtualizarLivro(criarLivroDto);
  }

  @Delete('/:_isbn_10')
  async deletarLivro(
    @Param('_isbn_10', ValidacaoParametrosPipe) _isbn_10: string): Promise<void> {
    this.service.deletarLivro(_isbn_10);
  }
}
