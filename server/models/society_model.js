const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const societySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    owner_id: { type: String, required: true, unique: true },
    description: { type: String },
    members_ids: { type: Array },
    access_type: { type: String },
    challenges: { type: Array },
  },
  { collection: "societiesDB" }
);

const Society = mongoose.model("UserData", societySchema);
module.exports = Society;
