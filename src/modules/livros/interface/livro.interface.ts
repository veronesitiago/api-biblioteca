import { Document } from "mongoose";

export interface Livro  extends Document{
  readonly isbn_10: string;
  nome: string;
  autor: string;
  quantidadePaginas: number;
  edicao: number;
  editora: string;
}
