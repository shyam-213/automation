const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const cors = require("cors");
const app = express();
app.use(express.json())
app.use(cors())


const userModel = require("./Models/Users");

mongoose.connect("mongodb://localhost:27017/selkey").then(() => 
  console.log("Connected to MongoDB successfully")
).catch((error) => {
  console.log(error);
});

app.post("/SignUp", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    console.log(firstName + lastName + email + password)
    const exitEmail = await userModel.findOne({ email });
    console.log(exitEmail);

    if (exitEmail)
    {
      return res.status(400).json({ error: "Email exist" });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new userModel({ firstName, lastName, email, password:hashPassword});
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  }
  catch (error)
  {
    res.status(500).json({ error: error.message });
  }
})


app.post("/Login", async (req, res) => { 

  try
  {
const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user)
  {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch)
    {
      res.json("success");
    }
    else
    {
      res.status(401).json("password not match");
      }
  }
  else
  {
    res.status(401).json("not found");
    }
  }
 catch (error)
  {
    res.status(5000).json({ error: error.message });
  }
})

app.listen(1234, () => {
  console.log(`Server is running on port 1234`);
});
