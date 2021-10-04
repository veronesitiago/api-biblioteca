import * as mongoose from "mongoose";

export const LivrosSchema = new mongoose.Schema({
  isbn_10: { type: String, unique: true },
  nome: String,
  autor: String,
  quantidadePaginas: Number,
  edicao: Number,
  editora: String,

},{
  timestamps: true,
  collection: 'livros'
});
