const userModel = require("../model/user_model");
const certModel = require("../model/certificate_model");

class LoginVerificationService {
  static async checkUser(email, studentNum) {
    return await userModel.findOne({ email, studentNum });
  }

  static async findCert(user_id){
    return await certModel.findOne({user_id});
  }

  // static asyn readCertData()
}

module.exports = LoginVerificationService;
