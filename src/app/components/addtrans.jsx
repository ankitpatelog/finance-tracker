"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import {
  DollarSign,
  Calendar,
  Tag,
  FileText,
  TrendingUp,
  TrendingDown,
  X,
  Check,
} from "lucide-react";

export default function TransactionForm() {
  const [formData, setFormData] = useState({
    type: "expense",
    amount: "",
    category: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = {
    income: ["Salary", "Freelance", "Investment", "Gift", "Other"],
    expense: [
      "Food",
      "Transportation",
      "Shopping",
      "Bills",
      "Entertainment",
      "Healthcare",
      "Other",
    ],
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = "Amount must be greater than 0";
    }

    if (!formData.category || formData.category.length < 2) {
      newErrors.category = "Category must be at least 2 characters";
    }

    if (formData.description && formData.description.length > 200) {
      newErrors.description = "Description cannot exceed 200 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  //form submitting handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await toast.promise(
        axios.post("/api/addtransactions", formData), // Pass the promise here
        {
          loading: "Saving...",
          success: "Saved successfully!",
          error: "Error saving transaction!",
        }
      );
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit transaction!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto pt-33 ml-87 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-3 bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="text-white" size={16} />
              </div>
              <div>
                <p className="font-semibold text-green-800 text-sm">
                  Transaction Added!
                </p>
                <p className="text-xs text-green-600">
                  Your transaction has been recorded successfully.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          whileHover={{ boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gradient-to-r from-[#64B5F6] to-[#42A5F5] p-4 text-white">
            <motion.h2
              className="text-xl font-bold mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Add Transaction
            </motion.h2>
            <p className="text-blue-50 text-xs">
              Track your income and expenses effortlessly
            </p>
          </div>

          <div className="p-4 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Transaction Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      type: "income",
                      category: "",
                    }))
                  }
                  className={`p-2.5 rounded-lg border-2 transition-all duration-200 flex items-center justify-center gap-2 ${
                    formData.type === "income"
                      ? "border-[#42A5F5] bg-[#E3F2FD] shadow-md"
                      : "border-slate-200 hover:border-[#64B5F6]"
                  }`}
                >
                  <TrendingUp
                    className={
                      formData.type === "income"
                        ? "text-[#42A5F5]"
                        : "text-slate-400"
                    }
                    size={18}
                  />
                  <span
                    className={`font-semibold text-sm ${
                      formData.type === "income"
                        ? "text-[#42A5F5]"
                        : "text-slate-600"
                    }`}
                  >
                    Income
                  </span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      type: "expense",
                      category: "",
                    }))
                  }
                  className={`p-2.5 rounded-lg border-2 transition-all duration-200 flex items-center justify-center gap-2 ${
                    formData.type === "expense"
                      ? "border-[#42A5F5] bg-[#E3F2FD] shadow-md"
                      : "border-slate-200 hover:border-[#64B5F6]"
                  }`}
                >
                  <TrendingDown
                    className={
                      formData.type === "expense"
                        ? "text-[#42A5F5]"
                        : "text-slate-400"
                    }
                    size={18}
                  />
                  <span
                    className={`font-semibold text-sm ${
                      formData.type === "expense"
                        ? "text-[#42A5F5]"
                        : "text-slate-600"
                    }`}
                  >
                    Expense
                  </span>
                </motion.button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Amount <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                  size={16}
                />
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  step="0.01"
                  placeholder="0.00"
                  className={`w-full pl-10 pr-3 py-2 border-2 rounded-lg focus:outline-none transition-all duration-200 text-slate-700 text-sm ${
                    errors.amount
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-200 focus:border-[#42A5F5] focus:ring-2 focus:ring-[#E3F2FD]"
                  }`}
                />
              </div>
              {errors.amount && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1 flex items-center gap-1"
                >
                  <X size={12} /> {errors.amount}
                </motion.p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Category <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Tag
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                  size={16}
                />
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border-2 rounded-lg focus:outline-none transition-all duration-200 text-slate-700 appearance-none bg-white text-sm ${
                    errors.category
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-200 focus:border-[#42A5F5] focus:ring-2 focus:ring-[#E3F2FD]"
                  }`}
                >
                  <option value="">Select a category</option>
                  {categories[formData.type].map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              {errors.category && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1 flex items-center gap-1"
                >
                  <X size={12} /> {errors.category}
                </motion.p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                  size={16}
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#42A5F5] focus:ring-2 focus:ring-[#E3F2FD] transition-all duration-200 text-slate-700 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Description{" "}
                <span className="text-slate-400 text-xs">(Optional)</span>
              </label>
              <div className="relative">
                <FileText
                  className="absolute left-3 top-3 text-slate-400"
                  size={16}
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Add any additional notes..."
                  rows="3"
                  maxLength="200"
                  className={`w-full pl-10 pr-3 py-2 border-2 rounded-lg focus:outline-none transition-all duration-200 text-slate-700 resize-none text-sm ${
                    errors.description
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-200 focus:border-[#42A5F5] focus:ring-2 focus:ring-[#E3F2FD]"
                  }`}
                />
              </div>
              <div className="flex justify-between items-center mt-1">
                {errors.description && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs flex items-center gap-1"
                  >
                    <X size={12} /> {errors.description}
                  </motion.p>
                )}
                <span className="text-xs text-slate-400 ml-auto">
                  {formData.description.length}/200
                </span>
              </div>
            </div>

            <motion.button
              type="button"
              onClick={handleSubmit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#64B5F6] to-[#42A5F5] text-white font-semibold py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-sm"
            >
              Add Transaction
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02, backgroundColor: "#E3F2FD" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setFormData({
                  type: "expense",
                  amount: "",
                  category: "",
                  description: "",
                  date: new Date().toISOString().split("T")[0],
                });
                setErrors({});
              }}
              className="w-full border-2 border-[#64B5F6] text-[#42A5F5] font-semibold py-2.5 rounded-lg transition-all duration-200 text-sm"
            >
              Cancel
            </motion.button>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-600 text-xs mt-3"
        >
          All transactions are securely stored and encrypted
        </motion.p>
      </motion.div>
    </div>
  );
}
