import { ChartAreaInteractive } from "../components/charts/ChartAreaInteractive";
import SummaryCards from "../components/dashcards"

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


      <div>
        <SummaryCards />
      </div>



      {/* Charts Grid */}
      <div className=" mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-1">
        <ChartAreaInteractive />
      </div>
    </div>
  );
}
