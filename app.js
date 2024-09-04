const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user_route");
const certRoute = require("./routes/certificate_route");
const LoginVerificationRoute = require("./routes/login_verification_route");

const app = express();

app.use(bodyParser.json());
app.use("/", userRoute);
app.use("/", certRoute);
app.use("/", LoginVerificationRoute);

module.exports = app;
