import "./styles.css";

import { Card } from "../../components/card";
import { Pie } from "../../components/pie";
import { useMemo } from "react";

export const MonthGoal = () => {
  const value = useMemo(() => 90, []);

  return (
    <Card>
      <div className="w-[350px] h-[100%] flex flex-col items-center justify-between gap-[16px]">
        <div className="mb-[32px]">
          <h1 className="text-[24px] text-[#ffffff]">Meta mensal</h1>
        </div>

        <div className="flex flex-col items-center mb-[32px]">
          <Pie value={value} color="#A66DE9" />
        </div>

        <div className="w-[100%] flex justify-between">
          <span className="dot-secondary text-[14px] text-[#ffffff]">
            Esperado R$ 70K
          </span>
          <span className="dot-primary text-[14px] text-[#ffffff]">
            Alcançado R$ 63K
          </span>
        </div>
      </div>
    </Card>
  );
};
