import { Document } from "mongoose";
import { Livro } from '../../livros/interface/livro.interface';

export interface Opiniao extends Document {
  texto_avaliacao: string,
  livro: Livro
}
