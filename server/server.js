require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const contactRouter = require("./routers/contactRouter");
const { config } = require("dotenv");
const connectdB = require("./utils/db");
const uploadRouter = require("./routers/uploadRouter");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", userRouter);
app.use("/", contactRouter);
app.use("/", uploadRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});
const port = 5000;
connectdB()
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error While adding database");
  });
