const express = require("express");
const cors = require("cors");
const connect = require("./config/database.js");
const adminRouter = require("./controllers/auth.routes.js");
const adminUserRoutes = require("./controllers/admin.users.tables.routes.js");
const adminProductRouter = require("./controllers/admin.products.routes.js");
const { userRoute } = require("./routes/user.route");
const { userAuthRoute } = require("./routes/user.auth.route");
const { validator } = require("./middlewares/validator");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", adminRouter);

app.use("/adminproduct", adminProductRouter);

app.use("/adminuser", adminUserRoutes);

app.use("/user/auth", userAuthRoute);

app.use(validator);

app.use("/", userRoute);

app.listen(process.env.port, connect);
