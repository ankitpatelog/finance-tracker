import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "@/library/auth";
import Transaction from "@/models/transaction";
import connectToDatabase from "@/library/mongoDb";

export async function GET() {
  try {
    // Connect to MongoDB
    await connectToDatabase();

    //  Get logged-in user session
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    //  Get userId from session
    const userId = session.user.id;

    //  Fetch transactions for this user
    const data = await Transaction.find({ userId });

    if (!data || data.length === 0) {
      return NextResponse.json(
        { message: "No transactions found" },
        { status: 404 }
      );
    }

    //  Return the transactions
    console.log(data);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
