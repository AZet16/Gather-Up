const asyncHandler = require("express-async-handler");
//const User = require("../models/user_model");
const Society = require("../models/society_model");

const jwt = require("jsonwebtoken");
const generateToken = require("../utils/genTokens");

//pass new user info for registration form
const createSociety = asyncHandler(async (req, res) => {
  const { owner_id, access, name, description } = req.body;

  const dublicated = await Society.findOne({ name });

  if (dublicated) {
    res.json({
      status: `error`,
      mssg: `society's name already exists in the database`,
    });
    console.log("such name already exists");
  } else {
    const society = await Society.create({
      owner_id: req.body.email,
      access: req.body.access,
      name: req.body.name,
      description: req.body.password,
    });

    if (society) {
      res.json({
        status: `ok`,
        mssg: `information reached the server`,
        _id: society._id,
        owner: society.owner_id,
        //token: generateToken(user._id),
      });
      console.log("society created");
    } else {
      console.log("other issue when creating society");
      res.json({ status: `error`, mssg: `issue creating society` });
    }
  }
});

//find society
const findSociety = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const society = await Society.findOne({ name });

  if (society) {
    res.json({
      status: `ok`,
      mssg: `found society`,
      _id: society._id,
      owner_id: society.email,
    });
    console.log("successfully logged in the society");
  } else {
    res.json({
      status: `error`,
      mssg: `no such society fount`,
      society: false,
    });
    console.log("no society with such name exists");
  }
});

module.exports = { createSociety, findSociety };
