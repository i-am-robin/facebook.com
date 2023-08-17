import UserDB from "@/libs/models/UserModel";
import connectMongoDB from "@/libs/mongoodb/mongoodb";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectMongoDB();
  const users = await UserDB.find();
  return NextResponse.json({ users }, { status: 200 });
}
