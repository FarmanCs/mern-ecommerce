import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/app/models/User";

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const session = await getServerSession(authOptions);

  const email = session?.user?.email;
  // if ("name" && data) {
  //   await User.updateOne({ email }, { name: data.name });
  // }
  await User.updateOne({ email }, data);

  return Response.json(true);
}

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  // mongoose.connect(process.env.MONGO_URL);
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  // const email = session?.user?.email;
  return Response.json(await User.findOne({ email }));
}
