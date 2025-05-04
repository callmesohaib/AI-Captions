const express = require("express");
const userRouter = express.Router();
const { login, register } = require("../controllers/userController");

userRouter.post("/user/login", login);
userRouter.post("/user/register", register);

module.exports = userRouter;
