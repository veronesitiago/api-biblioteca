import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class ValidacaoParametrosPipe implements PipeTransform {

  transform(value: any, metdata: ArgumentMetadata) {

    if (!value) {
      throw new BadRequestException(
        `O valor do parâmetro ${metdata.data} deve ser informado!`);
    }

    return value;
  }
}
