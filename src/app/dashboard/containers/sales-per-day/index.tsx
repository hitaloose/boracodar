import "./styles.css";

import { Card } from "../../components/card";
import { ChartBar } from "../../components/chart-bar";

export const SalesPerDay = () => {
  return (
    <Card>
      <div className="mb-[32px]">
        <h1 className="text-[24px] text-[#ffffff]">Vendas por dia da semana</h1>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="up mb-[8px] text-[14px] text-[#ffffff]">
              Dia com mais vendas
            </span>
            <strong className="text-[24px] text-[#ffffff]">quarta-feira</strong>
          </div>

          <div className="flex flex-col">
            <span className="down mb-[8px] text-[14px] text-[#ffffff]">
              Dia com menos vendas
            </span>
            <strong className="text-[24px] text-[#ffffff]">domingo</strong>
          </div>
        </div>

        <div className="h-[200px] w-[50%]">
          <div className="chart-container h-[100%] py-[2px] flex justify-between items-end">
            <ChartBar value={20} label="dom" />
            <ChartBar value={70} label="seg" />
            <ChartBar value={55} label="ter" />
            <ChartBar value={100} label="qua" />
            <ChartBar value={80} label="qui" />
            <ChartBar value={75} label="sex" />
            <ChartBar value={50} label="sab" />
          </div>
        </div>
      </div>
    </Card>
  );
};
