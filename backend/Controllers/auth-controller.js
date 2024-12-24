const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/Users');

//SignUp  user
const signUpUser = async (req, res) => {
    const { firstName, lastName, email, password , cnfPassword } = req.body;

    console.log(firstName, lastName, email, password, cnfPassword);

    try {
        const checkUser = await User.findOne({ email });
        if (checkUser)
            return res.json({
                success: false,
                message: "User Already exists with the same email! Please try again",
            });

        // if (password !== cnfPassword)
        // {
        //     return res.json({
        //         success: false,
        //         message: "Password and confirm password doesn't match! Please try again",
        //     });
        // }
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashPassword,
        });
        await newUser.save();
        res.status(200).json({
            success: true,
            message: "Registration successful",
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occured",
        });
    }
};

//login user
const signinUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const checkUser = await User.findOne({ email });
        if (!checkUser)
            return res.json({
                success: false,
                message: "User doesn't exists! Please register first",
            });

        const checkPasswordMatch = await bcrypt.compare(
            password,
            checkUser.password
        );
        if (!checkPasswordMatch)
            return res.json({
                success: false,
                message: "Incorrect password! Please try again",
            });

        const token = jwt.sign(
            {
                id: checkUser._id,
                email: checkUser.email,
                userName: checkUser.userName,
            },
            "CLIENT_SECRET_KEY",
            { expiresIn: "60m" }
        );

        res.cookie("token", token, { httpOnly: true, secure: false }).json({
            success: true,
            message: "Logged in successfully",
            user: {
                email: checkUser.email,
                id: checkUser._id,
                userName: checkUser.firstName + checkUser.lastName,
            },
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occured",
        });
    }
};

//Logout user
const logoutUser = (req, res) => {
    res.clearCookie("token").json({
      success: true,
      message: "Logged out successfully!",
    });
  };


module.exports = {
    signUpUser,
    signinUser,
    logoutUser
}