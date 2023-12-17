const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "userDB" }
);

//encrypt the passwordd before saving the informaiton

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    //move on if the password was not modified
    next();
  }

  //create unique salt asyncronously : higher value= more secure password
  const salt = await bcrypt.genSalt(10);
  //encrypt existing password uusign salt
  this.password = await bcrypt.hash(this.password, salt);
});

//decrypt password for login
userSchema.methods.matchPasswords = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};

const User = mongoose.model("UserData", userSchema);
module.exports = User;
