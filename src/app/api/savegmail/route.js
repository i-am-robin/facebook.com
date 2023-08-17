import UserDB from "@/libs/models/UserModel";
import connectMongoDB from "@/libs/mongoodb/mongoodb";

const { NextResponse } = require("next/server");

export async function POST(req) {
  try {
    const { password, email, towFactor } = await req.json();

    await connectMongoDB();
    const user = await UserDB.create({ email, password, towFactor });

    return NextResponse.json(
      { message: "sussessfull", uid: user._id, email: email, towF: towFactor },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error: error });
  }
}
