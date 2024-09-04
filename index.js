const app = require("./app");
const dbConfig = require("./config/db");
const userModel = require("./model/user_model");
const certModel = require("./model/certificate_model");

const port = 3000;

app.get("/", (req, res) => {
  res.send("True that right");
});

app.listen(port, () => {
  console.log(`Server Listening on port http://localhost:${port}`);
});
