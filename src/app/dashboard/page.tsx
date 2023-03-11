import { ClosedSales } from "./containers/closed-sales";
import { GereralNPS } from "./containers/general-nps";
import { MonthGoal } from "./containers/month-goal";
import { SalesPerDay } from "./containers/sales-per-day";

export default function Page() {
  return (
    <div className="grid gap-[59px]">
      <div id="chart-container" className="mb-10 flex gap-[32px]">
        <GereralNPS />
        <ClosedSales />
        <MonthGoal />
      </div>

      <div id="sales-container">
        <SalesPerDay />
      </div>
    </div >
  );
}
