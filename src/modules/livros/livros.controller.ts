import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriarLivroDto } from './dtos/criar-livro.dto';
import { Livro } from './interface/livro.interface';
import { LivrosService } from './services/livros.service';

@Controller('api/v1/livros')
export class LivrosController {

  constructor(
    private readonly service: LivrosService
  ) {}

  @Get()
  async obterTodosLivros(): Promise<Array<Livro>> {
    return await this.service.obterTodosLivros();
  };

  @Post()
  @UsePipes(ValidationPipe)
  async criarAtualizarLivro(
    @Body() criarLivroDto: CriarLivroDto,
  ): Promise<Livro> {
    return await this.service.criarAtualizarLivro(criarLivroDto);
  }
}