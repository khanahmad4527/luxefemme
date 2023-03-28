const express = require("express");
const adminUserRoutes = express.Router();
const auth = require("../middlewares/auth.middleware.js");
const AdminUserModel = require("../models/user.model.js");
const superadminVerify = require("../middlewares/superadmin.action.middleware.js");
//get request user
adminUserRoutes.get("/users", auth, async (req, res) => {
  let page = req.query.page;
  let limit = 5;
  let skip = (page - 1) * limit;
  try {
    let user = await AdminUserModel.find({ role: "user" })
      .skip(skip)
      .limit(limit);
    res.status(200).send(user);
  } catch (er) {
    res.status(400).send({ error: er.message });
  }
});

//get request admin
adminUserRoutes.get("/admin", auth, async (req, res) => {
  let page = req.query.page;
  let limit = 5;
  let skip = (page - 1) * limit;
  try {
    let user = await AdminUserModel.find({
      $or: [{ role: "admin" }, { role: "superadmin" }],
    })

      .skip(skip)
      .limit(limit);
    res.status(200).send(user);
  } catch (er) {
    res.status(400).send({ error: er.message });
  }
});

//delete request user
adminUserRoutes.delete("/user/:id", auth, async (req, res) => {
  let id = req.params.id;
  try {
    await AdminUserModel.findByIdAndDelete(id);
    res.status(200).send("user deleted");
  } catch (er) {
    res.status(400).send({ error: er.message });
  }
});

//add admin by super admin
adminUserRoutes.add("/add/admin", auth, superadminVerify, async (req, res) => {
  try {
    let admin = new AdminUserModel(req.body);
    await admin.save();
    res.status(200).send("admin added");
  } catch (er) {
    res.status(400).send({ error: er.message });
  }
});


//delete admin by super admin
adminUserRoutes.delete(
  "/delete/admin/:id",
  auth,
  superadminVerify,
  async (req, res) => {
    let id = req.params.id;
    try {
      await AdminUserModel.findByIdAndDelete(id);

      res.status(200).send("admin deleted");
    } catch (er) {
      res.status(400).send({ error: er.message });
    }
  }
);

module.exports = adminUserRoutes;