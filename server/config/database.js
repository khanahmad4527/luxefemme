const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.mongodbURL);
    console.log("connected");
  } catch (er) {
    console.log(er);
  }
};

module.exports = connect;
