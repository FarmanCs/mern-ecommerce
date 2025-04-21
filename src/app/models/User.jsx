import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  try {
    const hashpassword = await bcrypt.hash(this.password, 10);
    this.password = hashpassword;
    next();
  } catch (error) {
    next(error);
  }
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
