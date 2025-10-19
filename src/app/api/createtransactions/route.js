import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "@/library/auth";
import Transaction from "@/models/transaction";
import connectToDatabase from "@/library/mongoDb";

export async function POST(req) {
  try {
    // 1️⃣ Connect to MongoDB
    await connectToDatabase();

    // 2️⃣ Get the logged-in user session
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // 3️⃣ Get request body
    const { type, amount, category, description, date } = await req.json();

    // 4️⃣ Validate required fields
    if (!type || !amount || !category) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 5️⃣ Create transaction
    const transaction = await Transaction.create({
      userId: session.user.id, // link transaction to logged-in user
      type,
      amount,
      category,
      description: description || "",
      date: date || new Date(),
    });

    // 6️⃣ Return success
    return NextResponse.json({ success: true, transaction }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
