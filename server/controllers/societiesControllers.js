const asyncHandler = require("express-async-handler");
const User = require("../models/user_model");
const Society = require("../models/society_model");

const jwt = require("jsonwebtoken");
const generateToken = require("../utils/genTokens");

//create society
const createSociety = asyncHandler(async (req, res) => {
  const { name, owner_id, description, access_type } = req.body;

  const dublicated = await Society.findOne({ name });
  const def_access = "private_opt";

  if (dublicated) {
    //check if society already exists
    res.json({
      status: `error`,
      mssg: `society's name already exists in the database`,
    });
    console.log("such name already exists");
  } else {
    //create a society
    const society = await Society.create({
      name,
      owner_id,
      description,
      access_type: access_type || def_access,
    });

    if (society) {
      //once society is successfully created

      res.json({
        status: `ok`,
        mssg: `information reached the server`,
        _id: society._id,
        owner: society.owner_id,
        access_type: society.access_type,
        //token: generateToken(user._id),
      });
      console.log("society created");

      //add this society to the list of societies for the user

      await User.findByIdAndUpdate(society.owner_id, {
        $push: {
          societies: society._id,
        },
      });

      console.log("added to user's societies list");
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
      owner_id: society.owner_id,
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
