import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
  name: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  streetAdress: { type: String },
  postalCode: { type: String },
  city: { type: String },
  phone: { type: String },
  country: { type: String },
});

// userSchema.pre("save", async function (next) {});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
