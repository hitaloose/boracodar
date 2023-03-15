import "./styles.css";

import Image from "next/image";

import weather from "./assets/weather.svg";
import pin from "./assets/pin.svg";

export default function Page() {
  return (
    <div className="flex gap-[32px] px-[138px] py-[144px] rounded-[15px] bg-[#8E87FA]">
      <div>
        <div className="relative w-[480px] h-[480px] bg-[#6D67D0] rounded-[10px]">
          <Image
            src={weather}
            alt="weather"
            className="absolute top-[-56px] left-[-56px]"
          />
          <div className="absolute top-[32px] right-[32px] flex gap-[4px]">
            <Image src={pin} alt="pin" />
            <span className="text-[#C2BFF4] text-[14px] font-[700] leading-[17px]">
              Rio do sul, SC
            </span>
          </div>

          <div className="flex flex-col h-[100%] justify-between items-center">
            <div className="flex flex-col items-center gap-[4px] mt-[112px]">
              <div>
                <strong className="text-[#FFFFFF] text-[88px] font-[700] leading-[106px]">
                  18
                </strong>
                <span className="text-[#DAD8F7] text-[24px] font-[700] leading-[29px]">
                  ºC
                </span>
              </div>

              <div>
                <span className="text-[#FFFFFF] text-[20px] font-[700] leading-[24px]">
                  22º
                </span>
                <span className="text-[#C2BFF4] text-[20px] font-[700] leading-[24px]">
                  16º
                </span>
              </div>
            </div>

            <div>
              <div>17 km</div>

              <div>31 %</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[24px]">
        <div className="flex gap-[24px]">
          <div className="bg-[#6D67D0]  rounded-[10px] w-[277px] h-[244px]">
            qualidade do ar
          </div>
          <div className="bg-[#6D67D0]  rounded-[10px] w-[277px] h-[244px]">
            horario do sol
          </div>
        </div>

        <div>
          <div className="p-[40px] bg-[#6D67D0]  rounded-[10px] h-[212px]">
            previsão semanal
          </div>
        </div>
      </div>
    </div>
  );
}
