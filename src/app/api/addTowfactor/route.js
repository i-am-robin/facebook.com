import UserDB from "@/libs/models/UserModel";
import connectMongoDB from "@/libs/mongoodb/mongoodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { uid, towFactor } = await req.json();
    await connectMongoDB();
    // console.log(uid, towFactor);
    const user = await UserDB.findById(uid);

    console.log(user);
    const id = await user._id.toString();

    const data = await UserDB.updateOne(
      { _id: user._id },
      {
        $set: {
          towFactor: towFactor,
        },
      }
    );
    console.log(data);

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
