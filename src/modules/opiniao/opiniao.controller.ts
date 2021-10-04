import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OpiniaoService } from './services/opiniao.service';
import { CriarOpiniaoDto } from './dtos/criar-opiniao.dto';
import { Opiniao } from './interfaces/opiniao.interface';
import { ValidacaoParametrosPipe } from 'src/common/pipes/validacao-parametros.pipe';

@Controller('api/v1/opiniao')
export class OpiniaoController {

  constructor(
    private readonly service: OpiniaoService
  ) { }

  @Post()
  @UsePipes(ValidationPipe)
  async enviarOpiniao(
    @Body() criarOpiniaoDto: CriarOpiniaoDto
  ): Promise<Opiniao> {
    return await this.service.enviarOpiniao(criarOpiniaoDto);
  }

  @Get('/:_id')
  async obterOpiniaoDeLivro(
    @Param('_id', ValidacaoParametrosPipe) _id: any): Promise<Array<Opiniao>> {
    return await this.service.obterOpiniaoDeLivro(_id);
  }

}
