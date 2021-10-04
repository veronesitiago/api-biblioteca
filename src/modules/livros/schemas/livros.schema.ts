import * as mongoose from "mongoose";

export const LivrosSchema = new mongoose.Schema({
  nome: String,
  autor: String,
  quantidadePaginas: Number,
  edicao: Number,
  editora: String,
  isbn_10: String,

},{
  timestamps: true,
  collection: 'livros'
});
