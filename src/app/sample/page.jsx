"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function ShowTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Food",
    "Bills",
    "Transportation",
    "Shopping",
    "Investment",
    "Other",
  ];

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get("/api/gettransactions");
        setTransactions(res.data.data || []);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  const filteredTx =
    selectedCategory === "All"
      ? transactions
      : transactions.filter(
          (tx) => tx.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="ml-64 mt-16 min-h-screen p-8 bg-white text-slate-700 transition-all">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-[#42A5F5]">
          Transactions Overview
        </h1>
      </div>

      {/* Category Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-10 border-b pb-4">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-5 py-2 text-sm transition-all ${
              selectedCategory === cat
                ? "bg-[#64B5F6] text-white hover:bg-[#42A5F5]"
                : "border-[#64B5F6] text-[#42A5F5] hover:bg-[#E3F2FD]"
            }`}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Transactions Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-60">
          <Loader2 className="animate-spin text-[#42A5F5]" size={40} />
        </div>
      ) : filteredTx.length === 0 ? (
        <p className="text-center text-slate-600 text-lg">
          No transactions found.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTx.map((tx) => (
            <Card
              key={tx._id}
              className="shadow-sm border border-gray-200 hover:shadow-md transition-all bg-white rounded-2xl"
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold capitalize text-slate-800">
                    {tx.category}
                  </h2>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      tx.type === "income"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {tx.type}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  {new Date(tx.date).toLocaleDateString()}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-2xl font-bold text-[#42A5F5] mb-3">
                  ₹{tx.amount.toLocaleString("en-IN")}
                </p>
                {tx.description && (
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {tx.description}
                  </p>
                )}

                {/* Buttons */}
                <div className="flex justify-end gap-2 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#64B5F6] text-[#42A5F5] hover:bg-[#E3F2FD]"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
