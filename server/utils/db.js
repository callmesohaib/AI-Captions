const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
const connectdB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectdB;
