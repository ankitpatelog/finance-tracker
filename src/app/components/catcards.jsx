"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function CatCardss() {
  const [totals, setTotals] = useState({
    Food: 0,
    Bills: 0,
    Transportation: 0,
    Shopping: 0,
    Investment: 0,
  });

  useEffect(() => {
    const fetchCategoryTotals = async () => {
      try {
        const res = await axios.get("/api/gettransactions");
        const data = res.data?.data || res.data || [];

        // Initialize totals
        const categoryTotals = {
          Food: 0,
          Bills: 0,
          Transportation: 0,
          Shopping: 0,
          Investment: 0,
        };

        // Sum by category
        data.forEach((tx) => {
          const category = tx.category;
          if (categoryTotals.hasOwnProperty(category)) {
            categoryTotals[category] += Number(tx.amount || 0);
          }
        });

        setTotals(categoryTotals);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchCategoryTotals();
  }, []);

  return (
    <div className="-ml-7 pt-5 px-8 transition-all duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* 🍔 Food */}
        <Card className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-slate-600">Food</h2>
            <div className="bg-green-100 text-green-600 rounded-full p-2">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-semibold text-[#16A34A] mt-3">
            ₹{totals.Food.toLocaleString()}
          </p>
          <p className="text-xs text-slate-400 mt-1">Category</p>
        </Card>

        {/* 🧾 Bills */}
        <Card className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-slate-600">Bills</h2>
            <div className="bg-blue-100 text-blue-600 rounded-full p-2">
              <ArrowDownRight className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-semibold text-[#3B82F6] mt-3">
            ₹{totals.Bills.toLocaleString()}
          </p>
          <p className="text-xs text-slate-400 mt-1">Category</p>
        </Card>

        {/* 🚗 Transportation */}
        <Card className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-slate-600">
              Transportation
            </h2>
            <div className="bg-orange-100 text-orange-600 rounded-full p-2">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-semibold text-[#F97316] mt-3">
            ₹{totals.Transportation.toLocaleString()}
          </p>
          <p className="text-xs text-slate-400 mt-1">Category</p>
        </Card>

        {/* 🛍️ Shopping */}
        <Card className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-slate-600">Shopping</h2>
            <div className="bg-purple-100 text-purple-600 rounded-full p-2">
              <ArrowDownRight className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-semibold text-[#8B5CF6] mt-3">
            ₹{totals.Shopping.toLocaleString()}
          </p>
          <p className="text-xs text-slate-400 mt-1">Category</p>
        </Card>

        {/* 💰 Investment */}
        <Card className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-slate-600">Investment</h2>
            <div className="bg-emerald-100 text-emerald-600 rounded-full p-2">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-semibold text-[#22C55E] mt-3">
            ₹{totals.Investment.toLocaleString()}
          </p>
          <p className="text-xs text-slate-400 mt-1">Category</p>
        </Card>
      </div>
    </div>
  );
}
