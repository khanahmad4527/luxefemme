const express=require("express");
const adminUserRoutes=express.Router();
const auth=require("../middlewares/auth.middleware.js");
const AdminUserModel=require("../models/user.model.js");

adminUserRoutes("/users",auth,async(req,res)=>{
    try{

    }
    catch(er){
        res.status(400).send({error:er.message})
    }

})

module.exports=adminUserRoutes;