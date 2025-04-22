import { User } from "@/app/models/User";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const pass = body.password;
  console.log(pass);
  if (pass.length < 2) {
    throw new Error("password is too short");
  }

  body.password = bcrypt.hashSync(pass, 10);

  const createdUser = await User.create(body);

  return Response.json(createdUser, { status: 201 });
}
