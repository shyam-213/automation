const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb+srv://chetan:chetan88@selkey.uvauy.mongodb.net/?retryWrites=true&w=majority&appName=selkey")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});