const route = require("express").Router();
const certController = require("../controller/certificate_controller");

route.post("/addCertData", certController.createCert);
route.get("/readCertData", certController.readCert);


//Post used to get data from database
// route.post("/readCertData", certController.readCert);

module.exports = route;
