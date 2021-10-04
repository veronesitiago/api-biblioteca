import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CriarLivroDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  readonly isbn_10: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  readonly nome: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(200)
  readonly autor: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly quantidadePaginas: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly edicao: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  readonly editora: string;
}
