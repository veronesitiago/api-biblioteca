import { IsString } from 'class-validator';

export class AuthLoginDto {
  @IsString()
  readonly login: string;

  @IsString()
  readonly password: string;
}
