const express=require("express");
const connect = require("./config/database.js");
const app=express();
const adminRouter=require("./controllers/auth.routes.js");
const adminUserRoutes=require("./controllers/admin.users.tables.routes.js");
const adminProductRouter=require("./controllers/admin.products.routes.js");
require("dotenv").config();
app.use(express.json())
app.get("/",(req,res)=>{
    res.status(200).send({message:"home"})
})

app.use("/auth",adminRouter);
app.use("/adminproduct",adminProductRouter);
app.use("/adminuser",adminUserRoutes);

app.listen(process.env.port,connect)