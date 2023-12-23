const asyncHandler = require("express-async-handler");
const User = require("../models/user_model");

const jwt = require("jsonwebtoken");
const generateToken = require("../utils/genTokens");

//pass new user info for registration form
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const dublicated = await User.findOne({ email });

  if (dublicated) {
    res.json({ status: `error`, mssg: `email already exists in the database` });
    console.log("user already exists");
  } else {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    if (user) {
      res.json({
        status: `ok`,
        mssg: `information reached the server`,
        _id: user._id,
        email: user.email,
        token: generateToken(user._id),
      });
      console.log("user created");
    } else {
      console.log("other issue when creating user");
      res.json({ status: `error`, mssg: `issue creating user` });
    }
  }
});

//pass new user info for login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPasswords(password))) {
    res.json({
      status: `ok`,
      mssg: `authentication passed`,
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
    console.log("successfully logged in the user");
  } else {
    res.json({ status: `error`, mssg: `failed authentication`, user: false });
    console.log("wrong information provided when loggin in");
  }
});

module.exports = { registerUser, loginUser };
