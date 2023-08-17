import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  towFactor: {
    type: String,
  },
});

const UserDB = mongoose.models.User || mongoose.model("User", userSchema);

export default UserDB;
