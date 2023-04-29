const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const kitapyurdu = require("./kitapyurdu.js");
const kitapsepeti = require("./kitapsepeti.js");
const app = express();
const cors = require("cors");
const port = 4000;

dotenv.config();

kitapyurdu();
kitapsepeti();

setInterval(() => {
  kitapyurdu();
  kitapsepeti();
}, 2 * 60 * 60 * 1000);

//routes
const kitapyurduRoute = require("./routes/kitapyurdu.js");
const kitapsepetiRoute = require("./routes/kitapsepeti.js");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

//middlewares
app.use(express.json());
app.use(cors());

app.use("/api/kitapyurdu", kitapyurduRoute);
app.use("/api/kitapsepeti", kitapsepetiRoute);

app.listen(port, () => {
  connect();
  console.log(`Listening on port ${port}`);
});
