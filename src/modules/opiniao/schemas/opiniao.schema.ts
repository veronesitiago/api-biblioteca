import * as mongoose from "mongoose";

export const OpiniaoSchema = new mongoose.Schema({
  texto_avaliacao: String,
  livro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Livro"
  }

}, {
  timestamps: true,
  collection: 'opiniao'
});
