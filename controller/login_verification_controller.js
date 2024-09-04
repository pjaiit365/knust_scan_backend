const loginVerificationService = require("../services/login_verification_service");

exports.login = async function (req, res, next) {
  try {
    const { email, password, studentNum, certUserID } = req.body;

    const user = await loginVerificationService.checkUser(email, studentNum);
    console.log(user);

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordMatch = await user.comparePassword(password);
    const userID = user.id;

    if (isPasswordMatch && userID === certUserID) {
      const certData = await loginVerificationService.findCert(certUserID);

      console.log(certData);

      res.status(200).json({
        status: res.statusCode,
        body: user,
      });
      console.log(userID);
    } else {
      res.status(404).json({
        status: res.statusCode,
        message: "Username / Password / Student Number are incorrect",
      });
      throw new Error("Password is incorrect");
    }
  } catch (error) {
    next(error);
  }
};
