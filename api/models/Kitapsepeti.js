const mongoose = require("mongoose");

const KitapsepetiSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    publisher: { type: String, required: true },
    image: { type: String, required: true },
    writers: { type: [String], required: true },
    prices: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

const Kitapsepeti = mongoose.model("kitapsepeti", KitapsepetiSchema);

module.exports = Kitapsepeti;
