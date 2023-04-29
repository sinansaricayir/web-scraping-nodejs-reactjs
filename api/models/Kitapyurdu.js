const mongoose = require("mongoose");

const KitapyurduSchema = mongoose.Schema(
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

const Kitapyurdu = mongoose.model("kitapyurdu", KitapyurduSchema);

module.exports = Kitapyurdu;
