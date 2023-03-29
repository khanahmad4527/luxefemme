const mongoose = require("mongoose");
const adminUserSchema = mongoose.Schema(
  {
    username: {
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: Number,
    role: {
      type: String,
      enum: ["admin", "user", "superadmin"],
    },
    address: {
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      pin: { type: Number, required: true },
    },
  },
  {
    versionKey: false,
  }
);

const AdminUserModel = mongoose.model("user", adminUserSchema);

module.exports = AdminUserModel;
