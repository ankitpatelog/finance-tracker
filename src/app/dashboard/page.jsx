import { ChartAreaInteractive } from "../components/charts/ChartAreaInteractive";

export default function DashboardPage() {
    return (
        <div
          className="min-h-screen ml-72 pt-24 p-8 text-[#334155]"
          style={{
              background: "#FFFFFF",
            }}
          >
            {/* Page Header */}
      <h1 className="text-3xl font-semibold mb-8 text-[#42A5F5] border-b-2 border-[#42A5F5] inline-block pb-2">
        Analytics Overview
      </h1>

      {/* Charts Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ChartAreaInteractive />
      </div>
    </div>
  );
}







//  import { ChartAreaInteractive } from "../components/charts/ChartAreaInteractive";

// export default function DashboardPage() {
//   return (
//     <div className="min-h-screen ml-72 pt-24 p-8 bg-white text-[#334155]">
//       {/* 🧭 Header */}
//       <h1 className="text-3xl font-semibold mb-8 text-[#42A5F5] border-b-2 border-[#42A5F5] inline-block pb-2">
//         Dashboard Overview
//       </h1>

//       {/* 💳 Summary Cards */}
//       <div className="grid gap-6 md:grid-cols-3 mb-8">
//         <div className="bg-[#E3F2FD] p-6 rounded-xl shadow-md">
//           <h2 className="text-slate-700 font-semibold">Total Income</h2>
//           <p className="text-2xl font-bold text-green-500 mt-2">₹25,000</p>
//         </div>
//         <div className="bg-[#FFEBEE] p-6 rounded-xl shadow-md">
//           <h2 className="text-slate-700 font-semibold">Total Expense</h2>
//           <p className="text-2xl font-bold text-red-500 mt-2">₹12,400</p>
//         </div>
//         <div className="bg-[#E8F5E9] p-6 rounded-xl shadow-md">
//           <h2 className="text-slate-700 font-semibold">Net Balance</h2>
//           <p className="text-2xl font-bold text-blue-500 mt-2">₹12,600</p>
//         </div>
//       </div>

//       {/* 📊 Charts Section */}
//       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//         <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-200">
//           <ChartAreaInteractivee />
//         </div>
//       </div>
//     </div>
//   );
// }

