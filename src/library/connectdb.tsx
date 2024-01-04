const mongoose = require("mongoose");

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    console.log(error);
  }
};
