const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const dotenv = require('dotenv');
const session = require('express-session')
const MongoStore=require('connect-mongo')

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());



const userModel = require("./Models/Users");

mongoose
  .connect(process.env.connection)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((error) => {
    console.log(error);
  });

//   app.use(cors({
//   origin: process.env.FRONTEND_URI,
//     credentials: true,
// }))

//   app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   store: MongoStore.create({
//     mongoUrl:process.env.connection
//   }),
//     cookie: {maxAge:24*60*60*1000}
// }))

app.post("/SignUp", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    console.log(firstName + lastName + email + password);
    const exitEmail = await userModel.findOne({ email });
    console.log(exitEmail);
    if (exitEmail) {
      return res.status(400).json({ error: "Email exist" });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new userModel({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/Login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find user by email
    const user = await userModel.findOne({ email });
    if (user)
    {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch)
      {
        res.json("Success");
      }
      else
      {
        res.status(400).json("password not match");
        }
    }
    else
    {
      res.status(401).json("No record found")
      }
  }
  catch (error) {
    res.status(500).json({ error: error.message }); // Corrected status code
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});


// app.get('/user', (req, res) => {
//   if (req.session.user) {
//     res.json({ user: req.session.user })
//   }
//   else {
//     res.status(401).json("Not login");
//   }
// });