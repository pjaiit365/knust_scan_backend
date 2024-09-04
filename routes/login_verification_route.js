const route = require("express").Router();
const loginVerificationController = require("../controller/login_verification_controller");

route.post("/loginVerification", loginVerificationController.login);
module.exports = route;
