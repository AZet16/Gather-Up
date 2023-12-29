const express = require("express");
const {
  createSociety,
  loginUser,
} = require("../controllers/societiesControllers");
const router = express.Router();

router.route("/create").post(createSociety);
router.route("/join").post(loginUser);

//router.route("/invite").post(loginUser);
//router.route("/decline").post(loginUser);

//router.route("/leave").post(loginUser);
//router.route("/remove").post(loginUser);

module.exports = router;
