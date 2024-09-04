const mongoose = require("mongoose");
const dbConfig = require("../config/db");
const userModel = require("./user_model");

const { Schema } = mongoose;

const certSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: userModel.modelName,
  },
  name: {
    type: String,
    required: true,
    unique: false,
  },
  level: {
    type: String,
    required: true,
    unique: false,
  },
  graduatingClass: {
    type: String,
    required: true,
    unique: false,
  },
  course: {
    type: String,
    required: true,
    unique: false,
  },
  refNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  graduationDay: {
    type: String,
    required: true,
    unique: false,
  },
});

certSchema.methods.comparePassword = async function(){

}

const certModel = dbConfig.model("certificate", certSchema);

module.exports = certModel;

/*
user scans qr code
qr code give user a string of text (cert_id)
nav to login verification screen 
with cert_id obtain user_id
with user_id compare user entered username and password with db user collection email and password
if it matches then proceed to show cert
if credentials is valid but doesn't correspond to that particular user don't 
*/
