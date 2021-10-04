import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { Livro } from "../../livros/interface/livro.interface";

export class CriarOpiniaoDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(500)
  readonly texto_avaliacao: string;

  @IsNotEmpty()
  readonly livro: Livro;
}
