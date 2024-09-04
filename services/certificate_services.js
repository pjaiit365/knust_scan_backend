const certModel = require("../model/certificate_model");

class CertificateService {
  static async createCert(
    user_id,
    name,
    level,
    graduatingClass,
    graduationDay,
    course,
    refNumber
  ) {
    try {
      const cert = new certModel({
        user_id,
        name,
        level,
        graduatingClass,
        graduationDay,
        course,
        refNumber,
      });
      return await cert.save();
    } catch (error) {
      throw error;
    }
  }


    static async readCert(refNumber) {
    try {
      return await certModel.find({ refNumber });
    } catch (error) {
      throw error;
    }
  }

  //Post used to get data from database
  // static async readCert(refNumber) {
  //   try {
  //     return await certModel.find({ refNumber });
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

module.exports = CertificateService;
