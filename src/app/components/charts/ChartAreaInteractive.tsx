"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

// ✅ Define a TypeScript type for transactions
type Transaction = {
  type: "income" | "expense" | string;
  amount: number;
  date: string | Date;
};

export function ChartAreaInteractive() {
  // ✅ Strongly type your chart states
  const [chartData, setChartData] = React.useState<{ date: string; income: number }[]>([]);
  const [chartDataa, setChartDataa] = React.useState<{ date: string; expense: number }[]>([]);

  // ✅ Fetch Income Transactions
  React.useEffect(() => {
    const fetchIncomeData = async () => {
      try {
        const res = await axios.get("/api/gettransactions");
        const transactions: Transaction[] = res.data?.data || res.data || [];

        const formatted = transactions
          .filter((tx) => tx.type === "income")
          .map((tx) => ({
            date: new Date(tx.date).toISOString().split("T")[0],
            income: tx.amount,
          }));

        setChartData(formatted);
      } catch (error) {
        console.error("Error fetching income transactions:", error);
        setChartData([]);
      }
    };

    fetchIncomeData();
  }, []);

  // ✅ Fetch Expense Transactions
  React.useEffect(() => {
    const fetchExpenseData = async () => {
      try {
        const res = await axios.get("/api/gettransactions");
        const transactions: Transaction[] = res.data?.data || res.data || [];

        const formatted = transactions
          .filter((tx) => tx.type === "expense")
          .map((tx) => ({
            date: new Date(tx.date).toISOString().split("T")[0],
            expense: tx.amount,
          }));

        setChartDataa(formatted);
      } catch (error) {
        console.error("Error fetching expense transactions:", error);
        setChartDataa([]);
      }
    };

    fetchExpenseData();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {/* ✅ Income Chart */}
      <Card className="border-none shadow-md rounded-2xl bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-semibold text-[#42A5F5]">
            Income Chart
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="income"
                  stroke="#4CAF50"
                  fill="url(#colorIncome)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* ✅ Expense Chart */}
      <Card className="border-none shadow-md rounded-2xl bg-white mt-6">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-semibold text-[#42A5F5]">
            Expense Chart
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartDataa}>
                <defs>
                  <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="expense"
                  stroke="#EF4444"
                  fill="url(#colorExpense)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
