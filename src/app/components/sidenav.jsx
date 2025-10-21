"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import {
  LayoutDashboard,
  Wallet,
  LineChart,
  Target,
  FileText,
  FolderCog,
  MessageSquare,
  PlusCircle,
  Edit3,
  Trash2,
  List,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function Sidenav() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const [showTransactions, setShowTransactions] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const menuItem = (name, icon, onClick = () => {}) => (
    <motion.div
      whileHover={{ x: 2 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        setActive(name);
        onClick();
      }}
      className={`flex items-center gap-3 cursor-pointer rounded-xl 
        transition-all duration-200 p-3 group select-none relative
        ${
          active === name
            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
            : "text-slate-600 hover:bg-slate-100"
        }`}
    >
      <div className={`${active === name ? "text-white" : "text-blue-500"}`}>
        {icon}
      </div>
      {!collapsed && (
        <span
          className={`font-medium text-[15px] ${
            active === name ? "text-white" : ""
          }`}
        >
          {name}
        </span>
      )}
      {active === name && !collapsed && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute right-3 w-1.5 h-1.5 rounded-full bg-white"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </motion.div>
  );

  return (
    <>
      <motion.aside
        animate={{ width: collapsed ? "80px" : "280px" }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed left-0 top-18 h-screen flex flex-col
        bg-white border-r border-slate-200 shadow-sm z-50"
      >
        {/* Profile Section with Collapse Button */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 
              text-white flex items-center justify-center font-semibold text-lg shadow-md"
            >
              U
            </motion.div>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col"
              >
                <p className="font-semibold text-slate-800 text-sm">John Doe</p>
                <p className="text-xs text-slate-500">john@example.com</p>
              </motion.div>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors ml-auto"
          >
            {collapsed ? (
              <ChevronRight className="text-slate-600" size={20} />
            ) : (
              <ChevronLeft className="text-slate-600" size={20} />
            )}
          </motion.button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col gap-1.5">
            {/* Main Menu */}
            <div className="mb-4">
              {!collapsed && (
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">
                  Main Menu
                </p>
              )}
             <Link href="/dashboard" >
              {menuItem("Dashboard", <LayoutDashboard size={20} />)}
             </Link>
            </div>

            {/* Transactions Section */}
            <div className="mb-4">
              {!collapsed && (
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">
                  Transactions
                </p>
              )}
              <div
                onClick={() =>
                  !collapsed && setShowTransactions(!showTransactions)
                }
                className={`flex items-center justify-between gap-3 cursor-pointer rounded-xl 
                p-3 transition-all duration-200 ${
                  showTransactions ? "bg-slate-50" : "hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Wallet className="text-blue-500" size={20} />
                  {!collapsed && (
                    <span className="text-slate-600 font-medium text-[15px]">
                      Manage
                    </span>
                  )}
                </div>
                {!collapsed && (
                  <motion.div
                    animate={{ rotate: showTransactions ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="text-slate-400" size={18} />
                  </motion.div>
                )}
              </div>

              <AnimatePresence>
                {showTransactions && !collapsed && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-9 mt-1.5 flex flex-col gap-1"
                  >
                   <Link href="/dashboard/addtransaction" >
                    {menuItem("Add Transaction", <PlusCircle size={18} />)}
                   </Link>
                   
                    {menuItem("Update", <Edit3 size={18} />)}
                   
                    {menuItem("Delete", <Trash2 size={18} />)}
                   
                    {menuItem("View All", <List size={18} />)}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Analytics Section (Collapsible like Transactions) */}
            <div className="mb-4">
              {!collapsed && (
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">
                  Analytics
                </p>
              )}
              <div
                onClick={() => !collapsed && setShowAnalytics(!showAnalytics)}
                className={`flex items-center justify-between gap-3 cursor-pointer rounded-xl 
                p-3 transition-all duration-200 ${
                  showAnalytics ? "bg-slate-50" : "hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <LineChart className="text-blue-500" size={20} />
                  {!collapsed && (
                    <span className="text-slate-600 font-medium text-[15px]">
                      Insights
                    </span>
                  )}
                </div>
                {!collapsed && (
                  <motion.div
                    animate={{ rotate: showAnalytics ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="text-slate-400" size={18} />
                  </motion.div>
                )}
              </div>

              <AnimatePresence>
                {showAnalytics && !collapsed && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-9 mt-1.5 flex flex-col gap-1"
                  >
                    {menuItem("Spending Graphs", <LineChart size={18} />)}
                    {menuItem("Category Overview", <FileText size={18} />)}
                    {menuItem("Goals & Budgets", <Target size={18} />)}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Settings */}
            <div>
              {!collapsed && (
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">
                  Settings
                </p>
              )}
              {menuItem("Categories", <FolderCog size={20} />)}
              {menuItem("Profile", <User size={20} />)}
              {menuItem("Support", <MessageSquare size={20} />)}
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
