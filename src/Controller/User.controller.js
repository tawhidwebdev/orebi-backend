const { asyncHandler } = require("../utils/asyncHandler");
const { usermodel } = require("../Model/User.model");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");
const { EmailChecker } = require("../utils/EmailChecker");
const { PasswordChecker } = require("../utils/PasswordChecker");
const { bcryptPassword, generateAccessToken } = require("../Helper/helper.js");
const { sendMail } = require("../utils/sendMail.js");

/**
 * todo: CreateUser controller implement
 * @param {{req.body}} req
 * @param {{ }} res
 */

const options = {
  httpOnly: true,
  secure: true,
};

const CreateUser = asyncHandler(async (req, res) => {
  // Send information into
  try {
    const {
      FirstName,
      LastName,
      Email_Adress,
      Telephone,
      Address1,
      Address2,
      City,
      Post_Code,
      Distict,
      Password,
    } = req?.body;
    if (!FirstName) {
      return res
        .status(404)
        .json(new ApiError(false, null, 400, `First name is required!`));
    }
    if (!LastName) {
      return res
        .status(404)
        .json(new ApiError(false, null, 400, `Last name is required!`));
    }
    if (!Email_Adress) {
      return res
        .status(404)
        .json(new ApiError(false, null, 400, `Email address is requierd`));
    }
    if (!EmailChecker(Email_Adress)) {
      return res
        .status(404)
        .json(new ApiError(false, null, 400, `Invalid email address`));
    }
    if (!Telephone) {
      return res
        .status(404)
        .json(new ApiError(false, null, 400, `Telephone number is required`));
    }
    if (!Address1) {
      return res
        .status(404)
        .json(new ApiError(false, null, 400, `Address1 is required`));
    }
    if (!Address2) {
      return res
        .status(404)
        .json(new ApiError(false, null, 400, `Address2 is required`));
    }
    if (!City) {
      return res
        .status(404)
        .json(new ApiError(false, null, 400, `City is required`));
    }
    if (!Post_Code) {
      return res
        .status(404)
        .json(new ApiError(false, null, 400, `Post code is required`));
    }
    if (!Distict) {
      return res
        .status(404)
        .json(new ApiError(false, null, 400, `Distict is required`));
    }
    if (!Password) {
      return res
        .status(404)
        .json(new ApiError(false, null, 400, `Password is required`));
    }
    if (!PasswordChecker(Password)) {
      return res
        .status(404)
        .json(
          new ApiError(
            false,
            null,
            400,
            `Minimum eight and maximum twenty characters, at least one upper-case letter, one lower-case letter, one number, and one special character`
          )
        );
    }
    // Check if user alrady exist or not
    const ExistUser = await usermodel.find({
      $or: [{ FirstName: FirstName }, { Email_Adress: Email_Adress }],
    });
    if (ExistUser?.length) {
      return res
        .status(404)
        .json(
          new ApiError(
            false,
            null,
            400,
            `${ExistUser[0]?.FirstName} Already Exist`
          )
        );
    }
    // Now make a password encrypt
    const hashPassword = await bcryptPassword(Password);

    // Create a new users in database
    const Users = await usermodel({
      FirstName,
      LastName,
      Email_Adress,
      Telephone,
      Address1,
      Address2,
      City,
      Post_Code,
      Distict,
      Password: hashPassword,
    }).save();

    // Generate access token
    let accessToken = await generateAccessToken(Email_Adress, Telephone);

    // Send a user email
    const otp = await MakeOtp();
    const emailInfo = await sendMail(Email_Adress);
    console.log(emailInfo);

    if (Users || accessToken || emailInfo) {
      // Now set the token in database
      const setToken = await usermodel.findOneAndUpdate(
        { _id: Users._id },
        { $set: { token: accessToken } },
        { new: true }
      );

      // Now set the OTP
      await usermodel.findByIdAndUpdate(
        {
          _id: Users._id,
        },
        {
          $set: { OTP: otp },
        },
        {
          new: true,
        }
      );
      const recentCreateUser = await usermodel
        .find({ $or: [{ FirstName }, { Email_Adress }] })
        .select("-Password, -_id");
      return res
        .status(200)
        .cookie("token", accessToken, options)
        .json(
          new ApiResponse(
            true,
            recentCreateUser,
            200,
            null,
            `Registration successfull`
          )
        );
    }
  } catch (error) {
    return res
      .status(404)
      .json(
        new ApiError(
          false,
          null,
          400,
          `Registration controller error ${error} !!`
        )
      );
  }
});

// Login controller
const loginController = async (req, res) => {
  try {
    console.log("Hello");
  } catch (error) {
    return res
      .status(404)
      .json(
        new ApiError(
          false,
          null,
          400,
          `Login controller error ${error} !!`
        )
      );
  }
};

module.exports = { CreateUser };
