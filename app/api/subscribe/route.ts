import { NextRequest, NextResponse } from "next/server";
import { addSubscriber } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email." },
        { status: 400 }
      );
    }

    const result = await addSubscriber(email);

    return NextResponse.json(result, {
      status: result.success ? 200 : 409,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
