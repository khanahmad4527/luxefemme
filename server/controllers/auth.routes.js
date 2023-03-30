const express = require("express");
const adminRouter = express.Router();
const AdminUserModel = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//registration

adminRouter.post("/registration", async (req, res) => {
  const { username, email, password, age, role, address } = req.body;
  const valid = await AdminUserModel.findOne({ email });
  if (valid) {
    res
      .status(400)
      .send({ error: "user Already exists with this email id please" });
  }
  try {
    bcrypt.hash(password, 12, (err, hash) => {
      const user = new AdminUserModel({
        username,
        email,
        password: hash,
        age,
        role,
        address,
      });

      user.save().then((ress) => {
        res.status(200).send({ message: "registartion completed" });
      });
    });
  } catch (er) {
    res.status(400).send({ error: er.message });
  }
});

//login

adminRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;

  const valid = await AdminUserModel.findOne({ email });
  if (!valid) {
    res.status(400).send({
      error: "user doesn't exist with this email id, please do registration",
    });
  }

  try {
    bcrypt.compare(password, valid.password, (err, decoded) => {
      if (decoded) {
        let token = jwt.sign(
          { userId: valid._id, role: valid.role },
          process.env.JWT_SECRET
        );
        res.status(200).send({ message: "Logged In", token });
      } else {
        res.status(400).send({ message: "wrong credentials" });
      }
    });
  } catch (er) {
    res.status(400).send({ error: er.message });
  }
});

module.exports = adminRouter;
