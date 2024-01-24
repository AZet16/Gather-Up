const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const societySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    owner_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userDB",
      required: true,
    },
    description: { type: String },
    members_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userDB",
      },
    ],
    access_type: {
      type: String,
      required: true,
    },
  },
  { collection: "societiesDB" }
);

const Society = mongoose.model("Society", societySchema);
module.exports = Society;
