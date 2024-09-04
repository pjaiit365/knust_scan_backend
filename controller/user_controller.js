const userService = require("../services/user_services");
const userSchema = require("../");
const userModel = require("../model/user_model");

exports.register = async (req, res, next) => {
  try {
    const { email, password, studentNum } = req.body;
    const successRes = await userService.registerUser(
      email,
      password,
      studentNum
    );

    res.json({ status: true, message: `hmm` });
  } catch (error) {
    throw error;
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password, studentNum } = req.body;

    const user = await userService.checkUser(studentNum);

    if (!user) {
      throw new Error("User does not exist");
    }

    const isPasswordMatch = user.comparePassword(password);
    console.log(isPasswordMatch);

    if (isPasswordMatch === false) {
      throw new Error("Password invalid");
    }

    let tokenData = { _id: user._id, email: user.email };

    const token = await userService.generateToken(tokenData, "secretKey", "1h");

    res.status(200).json({ status: true, code: 200, token: token });
  } catch (error) {
    throw error;
  }
};
