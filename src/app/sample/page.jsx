"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const chartData = [
  { month: "Jan", income: 5000, expense: 3200, savings: 1800, investment: 1200 },
  { month: "Feb", income: 6200, expense: 4000, savings: 2200, investment: 1400 },
  { month: "Mar", income: 7000, expense: 4800, savings: 2700, investment: 1800 },
  { month: "Apr", income: 6500, expense: 4200, savings: 2300, investment: 1600 },
  { month: "May", income: 7200, expense: 5000, savings: 2500, investment: 2000 },
  { month: "Jun", income: 7800, expense: 5100, savings: 2700, investment: 2200 },
];

export default function ChartLineMultiple() {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Financial Trends</CardTitle>
        <CardDescription>Income, Expenses, Savings & Investments</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#16A34A" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="expense" stroke="#DC2626" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="savings" stroke="#3B82F6" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="investment" stroke="#9333EA" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>

      <CardFooter>
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          Trending up by 8.6% this quarter <TrendingUp className="w-4 h-4 text-green-500" />
        </p>
      </CardFooter>
    </Card>
  );
}
