const express = require("express");
const contactRouter = express.Router();
const submitContact  = require("../controllers/contactController");

contactRouter.post("/contact", submitContact);
module.exports = contactRouter;
