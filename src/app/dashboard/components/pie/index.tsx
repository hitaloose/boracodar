import "./styles.css"

import { useMemo } from "react";

type Props = {
  value: number;
  color: string;
};

export const Pie = ({ value, color }: Props) => {
  const degValue = useMemo(() => ((360 / 100) * value).toFixed(0), [value]);

  return (
    <div id="pie-container">
      <div
        className="pie"
        style={{
          background: `conic-gradient(${color} ${degValue}deg, rgba(217, 217, 217, 0.1) 0deg)`
        }}
      >
        <div className="absolute flex flex-col items-center">
          <strong className="text-[34px] text-[#ffffff]">{value}%</strong>
          <span className="text-[16px] text-[#ffffff]">alcançada</span>
        </div>
      </div>
    </div>
  );
};
