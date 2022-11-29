const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
//app.use("/images", express.static(path.join(__dirname, "images")));

const PORT = 5050;

app.use(cors());

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://Mykola:11october@cluster0.fk1ls.mongodb.net/?retryWrites=true&w=majority",
      console.log("Database started")
    );
  } catch (err) {
    console.log(err);
  }
}

app.listen(PORT, start);
