const mongoose = require("mongoose");
const adminUserSchema = mongoose.Schema(
  {
 
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
    
    role: {
      type: String,
      enum: ["admin", "user", "superadmin"],
    }
  },
  {
    versionKey: false,
  }
);

const AdminUserModel = mongoose.model("user", adminUserSchema);

module.exports = AdminUserModel;
