import Image from "next/image";
import { Card } from "../../components/card";

import ClassificationIcon from "../../assets/classification-icon.png";

export const GereralNPS = () => {
  return (
    <Card>
      <div className="w-[300px] h-[100%] flex flex-col items-center justify-between gap-[16px]">
        <div>
          <h1 className="text-[24px] text-[#ffffff]">NPS geral</h1>
        </div>

        <div id="classification" className="flex flex-col items-center">
          <Image
            width={54}
            height={54}
            src={ClassificationIcon}
            alt="classification icon"
            className="mb-[16px]"
          />
          <strong className="text-[24px] text-[#81FBB8]">Excelente!</strong>
        </div>

        <div>
          <span className="text-[14px] text-[#ffffff]">NPS Score 75</span>
        </div>
      </div>
    </Card>
  );
};
