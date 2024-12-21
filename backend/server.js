const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

mongoose.connect("mongodb+srv://shyam:Shyam123@selkey-automation.efwbl.mongodb.net/").then(() => 
  console.log("Connected to MongoDB successfully")
).catch((error) => {
  console.log(error);
});

const app = express();
app.use(express.json())
app.use(cors())

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: [
//       "Content-Type",
//       "Authorization",
//       "cache-control",
//       "expires",
//       "pragma",
//     ],
//     credentials: true,
//   })
// );

// app.use(cookieParser());
// app.use(express.json());

const userModel=require('./Models/Users')

app.post('/createuser', (req, res) => { 
  userModel.create(req.body)
    .then(users =>res.json(users))
  .catch(err=>res.json(err))
})

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
