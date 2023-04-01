const bcrypt = require("bcrypt");
require("dotenv").config();
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    let userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(409).json({
        message:
          "The email address you are trying to register is already in use. Please choose a different email address.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = UserModel({
      firstname,
      lastname,
      email,
      hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "Registration successful." });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      const { _id: id, firstname, lastname, email, hashedPassword } = userExist;
      const isCorrect = await bcrypt.compare(password, hashedPassword);
      if (!isCorrect) {
        return res.status(401).json({ message: "Incorrect password." });
      } else {
        jwt.sign(
          { id, firstname, lastname, email },
          process.env.JWT_SECRET,
          {
            expiresIn: "3d",
          },
          (err, token) => {
            if (err) {
              return res.status(500).json({ message: err });
            }
            res.status(200).json({ message: "Login successful.", token });
          }
        );
      }
    } else {
      return res.status(401).json({ message: "Incorrect email." });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

module.exports = { login, signup };