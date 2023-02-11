import mongoose from "mongoose";

const dbURL = "mongodb://0.0.0.0:27017/usersdb";

mongoose.connect(
  dbURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Connection error." + err);
    } else {
      console.log("Connection successful!");
    }
  }
);
