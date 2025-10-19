import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "@/library/auth";
import Transaction from "@/models/transactionModel";
import connectToDatabase from "@/library/mongoDb";

export async function DELETE(req, { params }) {
  try {
    await connectToDatabase();
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const { id } = params; // this comes from [id] in the URL
    // Delete only if transaction belongs to logged-in user

    const deleted = await Transaction.findOneAndDelete({
      _id: id, // this id is transaction mongoDb _id
      userId: session.user.id, // this id is form User collection
    });

    if (!deleted) {
      return NextResponse.json(
        { message: "Transaction not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Transaction deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
