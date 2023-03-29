const express = require("express");
const connect = require("./config/database.js");
const app = express();
const adminRouter = require("./controllers/auth.routes.js");
const adminUserRoutes = require("./controllers/admin.users.tables.routes.js");
const adminProductRouter = require("./controllers/admin.products.routes.js");
const { productsRoute } = require("./routes/products.route");
require("dotenv").config();

app.use(express.json());

app.use("/auth", adminRouter);
app.use("/adminproduct", adminProductRouter);
app.use("/adminuser", adminUserRoutes);
app.use("/", productsRoute);

app.listen(process.env.port, connect);
