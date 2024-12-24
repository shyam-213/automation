const express = require("express");

const {
    signUpUser,
    signinUser,
    logoutUser
} = require("../../Controllers/auth-controller");
const router = express.Router();

router.post("/Signup", signUpUser);
router.post("/Signin", signinUser);
router.post("/logout", logoutUser);


module.exports = router;