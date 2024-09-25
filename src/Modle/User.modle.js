const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = newSchema(
  {
    FirstName: {
      type: String,
      require: [true, "First Name Missing!"],
      trim: true,
      max: [20, "Max Value 20 Character"],
      min: [3, "Min Value 3 Character"],
    },
    LastName: {
      type: String,
      trim: true,
      max: [10, "Max Value 10 Character"],
    },
    Email_Adress: {
      type: String,
      require: [true, "Email Missing!"],
      unique: true,
    },
    Telephone: {
      type: Number,
      require: [true, "Telephone Number Missing!"],
      unique: true,
      max: [11, "Max Value 11 Character"],
      min: [9, "Min Value 9 Character"],
    },
    Address1: {
      type: String,
      require: [true, "Address1 Missing!"],
      trim: true,
    },
    Address2: {
      type: String,
      require: [true, "Address2 Missing!"],
      trim: true,
    },
    City: {
      type: String,
      require: [true, "City Missing!"],
      trim: true,
    },
    Post_Code: {
      type: Number,
      require: [true, "Post Code Missing!"],
      max: [4, "Max Value 4 Character"],
      min: [4, "Min Value 4 Character"],
    },
    Division: {
      type: String,
      require: [true, "Division Missing!"],
      trim: true,
    },
    Distict: {
      type: String,
      require: [true, "Distict Missing!"],
      trim: true,
    },
    Password: {
      type: String,
      require: [true, "Password Missing!"],
      trim: true,
    },
    OTP: {
      type: Number,
    },
    Policy: {
      type: Boolean,
    },
    Access_Tooken: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "user", "merchant"],
      default:"user"
    },
    refershToken: {
      type: String
    },
    avatar: {
      type: String
    }
  },
  { timestamps: true }
);

const usermodel = mongoose.model('uiser', UserSchema)
module.exports = {usermodel}
