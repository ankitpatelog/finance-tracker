"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

export default function ChartLineMultiple() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1️⃣ Fetch API data
        const res = await fetch("/api/gettransactions");
        const result = await res.json();

        // 2️⃣ Handle both array and object responses
        const transactions = Array.isArray(result)
          ? result
          : result.data || [];

        // 3️⃣ Validate response
        if (!Array.isArray(transactions)) {
          console.error("Invalid data format from API:", result);
          return;
        }

        // 4️⃣ Filter only expenses
        const expenses = transactions.filter(
          (item) => item.type === "expense"
        );

        // 5️⃣ Define chart categories
        const categories = [
          "Food",
          "Transportation",
          "Shopping",
          "Investment",
          "Other",
        ];

        // 6️⃣ Group totals by month
        const monthlyTotals = new Map();

        expenses.forEach((tx) => {
          const month = dayjs(tx.date).format("MMM"); // e.g. "Oct"
          const category = tx.category?.toLowerCase();

          // Initialize month record if missing
          if (!monthlyTotals.has(month)) {
            monthlyTotals.set(month, { month });
            categories.forEach(
              (c) => (monthlyTotals.get(month)[c.toLowerCase()] = 0)
            );
          }

          // Add amount to correct category
          const currentMonth = monthlyTotals.get(month);
          if (categories.map((c) => c.toLowerCase()).includes(category)) {
            currentMonth[category] += tx.amount;
          } else {
            currentMonth.other += tx.amount;
          }
        });

        // 7️⃣ Convert Map → Array for chart
        setChartData(Array.from(monthlyTotals.values()));
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ml-80 mt-16 p-6"> {/* Adjust for sidebar & navbar */}
      <h1 className="text-3xl font-semibold mb-8 text-[#42A5F5] border-b-2 border-[#42A5F5] inline-block pb-2">
        Analytics Overview
      </h1>

      <Card className="p-4">
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="food"
                  stroke="#EF4444"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="transportation"
                  stroke="#F59E0B"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="shopping"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="investment"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="other"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
