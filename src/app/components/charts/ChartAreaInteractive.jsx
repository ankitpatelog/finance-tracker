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

export function ChartAreaInteractive() {
  const [chartData, setChartData] = React.useState([]);
  const [chartDataa, setChartDataa] = React.useState([]);

  // ✅ Fetch Income Transactions
  React.useEffect(() => {
    const fetchIncomeData = async () => {
      try {
        const res = await axios.get("/api/gettransactions");
        const transactions = res.data?.data || res.data || [];

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
        const transactions = res.data?.data || res.data || [];

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













































// "use client";

// import * as React from "react";
// import {
//   Area,
//   AreaChart,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import axios from "axios";
// import { ChartAreaInteractive } from "../components/charts/ChartAreaInteractive";

// export default function DashboardPage() {
//   const [incomeData, setIncomeData] = React.useState([]);
//   const [expenseData, setExpenseData] = React.useState([]);
//   const [summary, setSummary] = React.useState({
//     totalIncome: 0,
//     totalExpense: 0,
//     highestIncome: 0,
//     highestExpense: 0,
//     highestIncomeDate: "",
//     highestExpenseDate: "",
//   });

//   React.useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("/api/gettransactions");
//         const transactions = res.data?.data || res.data || [];

//         const incomeTx = transactions
//           .filter((tx) => tx.type === "income")
//           .map((tx) => ({
//             date: new Date(tx.date).toISOString().split("T")[0],
//             amount: tx.amount,
//           }));

//         const expenseTx = transactions
//           .filter((tx) => tx.type === "expense")
//           .map((tx) => ({
//             date: new Date(tx.date).toISOString().split("T")[0],
//             amount: tx.amount,
//           }));

//         // 💰 Calculate Summary
//         const totalIncome = incomeTx.reduce((sum, tx) => sum + tx.amount, 0);
//         const totalExpense = expenseTx.reduce((sum, tx) => sum + tx.amount, 0);

//         const highestIncomeTx =
//           incomeTx.length > 0
//             ? incomeTx.reduce((max, tx) => (tx.amount > max.amount ? tx : max))
//             : { amount: 0, date: "" };

//         const highestExpenseTx =
//           expenseTx.length > 0
//             ? expenseTx.reduce((max, tx) => (tx.amount > max.amount ? tx : max))
//             : { amount: 0, date: "" };

//         setIncomeData(
//           incomeTx.map((tx) => ({ date: tx.date, income: tx.amount }))
//         );
//         setExpenseData(
//           expenseTx.map((tx) => ({ date: tx.date, expense: tx.amount }))
//         );

//         setSummary({
//           totalIncome,
//           totalExpense,
//           highestIncome: highestIncomeTx.amount,
//           highestExpense: highestExpenseTx.amount,
//           highestIncomeDate: highestIncomeTx.date,
//           highestExpenseDate: highestExpenseTx.date,
//         });
//       } catch (error) {
//         console.error("Error fetching transactions:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div
//       className="min-h-screen ml-72 pt-24 p-8 text-[#334155]"
//       style={{ backgroundColor: "#FFFFFF" }}
//     >
//       {/* 🔹 Dashboard Header */}
//       <div className="bg-white shadow-md rounded-xl p-6 mb-8 border border-slate-200">
//         <h1 className="text-3xl font-semibold text-[#42A5F5]">
//           Dashboard Overview
//         </h1>
//         <p className="text-slate-500 mt-2 text-sm">
//           Track your income, expenses, and performance insights.
//         </p>
//       </div>

//       {/* 🔹 Summary Cards Row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
//         <Card className="bg-white border border-slate-200 shadow-md rounded-2xl p-6">
//           <h2 className="text-slate-500 text-sm font-medium">Total Income</h2>
//           <p className="text-3xl font-semibold text-[#4CAF50] mt-2">
//             ₹{summary.totalIncome.toLocaleString()}
//           </p>
//           <p className="text-slate-400 text-xs mt-1">Till today</p>
//         </Card>

//         <Card className="bg-white border border-slate-200 shadow-md rounded-2xl p-6">
//           <h2 className="text-slate-500 text-sm font-medium">Total Expense</h2>
//           <p className="text-3xl font-semibold text-[#EF4444] mt-2">
//             ₹{summary.totalExpense.toLocaleString()}
//           </p>
//           <p className="text-slate-400 text-xs mt-1">Till today</p>
//         </Card>

//         <Card className="bg-white border border-slate-200 shadow-md rounded-2xl p-6">
//           <h2 className="text-slate-500 text-sm font-medium">Highest Income</h2>
//           <p className="text-3xl font-semibold text-[#22C55E] mt-2">
//             ₹{summary.highestIncome.toLocaleString()}
//           </p>
//           <p className="text-slate-400 text-xs mt-1">
//             on {summary.highestIncomeDate || "—"}
//           </p>
//         </Card>

//         <Card className="bg-white border border-slate-200 shadow-md rounded-2xl p-6">
//           <h2 className="text-slate-500 text-sm font-medium">Highest Expense</h2>
//           <p className="text-3xl font-semibold text-[#F97316] mt-2">
//             ₹{summary.highestExpense.toLocaleString()}
//           </p>
//           <p className="text-slate-400 text-xs mt-1">
//             on {summary.highestExpenseDate || "—"}
//           </p>
//         </Card>
//       </div>

//       {/* 🔹 Charts Row */}
//       <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
//         {/* ✅ Income Chart */}
//         <Card className="border-none shadow-md rounded-2xl bg-white">
//           <CardHeader>
//             <CardTitle className="text-xl font-semibold text-[#42A5F5]">
//               Income Chart
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-[300px]">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={incomeData}>
//                   <defs>
//                     <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
//                       <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="date" stroke="#94A3B8" />
//                   <YAxis stroke="#94A3B8" />
//                   <Tooltip />
//                   <Area
//                     type="monotone"
//                     dataKey="income"
//                     stroke="#4CAF50"
//                     fill="url(#colorIncome)"
//                     strokeWidth={2}
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>

//         {/* ✅ Expense Chart */}
//         <Card className="border-none shadow-md rounded-2xl bg-white">
//           <CardHeader>
//             <CardTitle className="text-xl font-semibold text-[#42A5F5]">
//               Expense Chart
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-[300px]">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={expenseData}>
//                   <defs>
//                     <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
//                       <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="date" stroke="#94A3B8" />
//                   <YAxis stroke="#94A3B8" />
//                   <Tooltip />
//                   <Area
//                     type="monotone"
//                     dataKey="expense"
//                     stroke="#EF4444"
//                     fill="url(#colorExpense)"
//                     strokeWidth={2}
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* 🔹 Extra Chart Section */}
//       <div className="mt-10 bg-white rounded-2xl shadow-md p-6 border border-slate-200">
//         <h2 className="text-2xl font-semibold text-[#42A5F5] mb-4">
//           Interactive Analytics
//         </h2>
//         <ChartAreaInteractive />
//       </div>
//     </div>
//   );
// }
