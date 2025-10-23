"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import axios from "axios";

export default function SummaryCards() {
  const [totalinc, settotalinc] = useState(0);
  const [totalexp, settotalexp] = useState(0);
  const [highestIncome, setHighestIncome] = useState(0);
  const [highestExpense, setHighestExpense] = useState(0);
  const [highestIncomeDate, setHighestIncomeDate] = useState("—");
  const [highestExpenseDate, setHighestExpenseDate] = useState("—");
  const [error, setError] = useState(null);

  // ✅ Fetch and calculate all values
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get("/api/gettransactions");
        const data = res.data?.data || res.data || [];

        // 💰 Filter transactions
        const incomeTx = data.filter((tx) => tx.type === "income");
        const expenseTx = data.filter((tx) => tx.type === "expense");

        // 🧮 Total Income & Expense
        const totalIncome = incomeTx.reduce(
          (sum, tx) => sum + Number(tx.amount || 0),
          0
        );
        const totalExpense = expenseTx.reduce(
          (sum, tx) => sum + Number(tx.amount || 0),
          0
        );

        // 🔝 Highest Income
        const highestInc =
          incomeTx.length > 0
            ? incomeTx.reduce((max, tx) =>
                Number(tx.amount) > Number(max.amount) ? tx : max
              )
            : { amount: 0, date: "—" };

        // 🔻 Highest Expense
        const highestExp =
          expenseTx.length > 0
            ? expenseTx.reduce((max, tx) =>
                Number(tx.amount) > Number(max.amount) ? tx : max
              )
            : { amount: 0, date: "—" };

        // 💾 Store in state
        settotalinc(totalIncome);
        settotalexp(totalExpense);
        setHighestIncome(highestInc.amount);
        setHighestExpense(highestExp.amount);
        setHighestIncomeDate(
          highestInc.date ? new Date(highestInc.date).toISOString().split("T")[0] : "—"
        );
        setHighestExpenseDate(
          highestExp.date ? new Date(highestExp.date).toISOString().split("T")[0] : "—"
        );
      } catch (err) {
        console.error("Error fetching transactions:", err);
        setError(err.message || "Failed to fetch transactions");
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
    <div className="-ml-7 pt-5 px-8 transition-all duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* 💰 Total Income */}
        <Card className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-slate-600">Total Income</h2>
            <div className="bg-green-100 text-green-600 rounded-full p-2">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-semibold text-[#16A34A] mt-3">
            ₹{totalinc.toLocaleString()}
          </p>
          <p className="text-xs text-slate-400 mt-1">Till today</p>
        </Card>

        {/* 💸 Total Expense */}
        <Card className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-slate-600">
              Total Expense
            </h2>
            <div className="bg-red-100 text-red-600 rounded-full p-2">
              <ArrowDownRight className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-semibold text-[#DC2626] mt-3">
            ₹{totalexp.toLocaleString()}
          </p>
          <p className="text-xs text-slate-400 mt-1">Till today</p>
        </Card>

        {/* 📈 Highest Income */}
        <Card className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-slate-600">
              Highest Income
            </h2>
            <div className="bg-emerald-100 text-emerald-600 rounded-full p-2">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-semibold text-[#22C55E] mt-3">
            ₹{highestIncome.toLocaleString()}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            on {highestIncomeDate}
          </p>
        </Card>

        {/* 📉 Highest Expense */}
        <Card className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-slate-600">
              Highest Expense
            </h2>
            <div className="bg-orange-100 text-orange-600 rounded-full p-2">
              <ArrowDownRight className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-semibold text-[#F97316] mt-3">
            ₹{highestExpense.toLocaleString()}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            on {highestExpenseDate}
          </p>
        </Card>
      </div>
    </div>
    </div>
  );
}
