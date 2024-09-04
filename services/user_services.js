const userModel = require("../model/user_model");
const jwtWebToken = require("jsonwebtoken");

class UserService {
  static async registerUser(email, password, studentNum) {
    try {
      const createUser = new userModel({ email, password, studentNum });
      return await createUser.save();
    } catch (err) {
      throw err;
    }
  }

  static async checkUser(studentNum) {
    try {
      return await userModel.findOne({studentNum});
    } catch (error) {
      throw error;
    }
  }

  static async generateToken(tokenData, secretKey, jwtExpire) {
    return jwtWebToken.sign(tokenData, secretKey, { expiresIn: jwtExpire });
  }
}

module.exports = UserService;
