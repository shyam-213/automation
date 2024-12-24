const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");


mongoose.connect("mongodb://0.0.0.0:27017/selkey").then(() =>
  console.log("Connected to MongoDB successfully")
).catch((error) => {
  console.log(error);
});

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "cache-control",
      "expires",
      "pragma"],
    credentials: true,
  })
)


app.use(cookieParser());
app.use(express.json());
app.use("/api", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
