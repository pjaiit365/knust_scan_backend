const route = require("express").Router();
const userController = require("../controller/user_controller");

route.post("/registration", userController.register);
route.post("/login", userController.login);

module.exports = route;
