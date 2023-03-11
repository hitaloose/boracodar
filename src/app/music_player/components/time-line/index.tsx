type Props = {
  percent: number;
  currentTime: number;
  timeToEnd: number;
};

export const TimeLine = ({ currentTime, timeToEnd, percent }: Props) => {
  return (
    <div className="flex flex-col  gap-y-[10px]">
      <div className="relative">
        <div className="absolute h-[6px] w-[100%] bg-[#D9D9D9] rounded-[10px] opacity-30"></div>
        <div
          style={{ width: `${percent}%` }}
          className="absolute h-[6px] bg-[#D9D9D9] rounded-[10px] opacity-80"
        ></div>
      </div>

      <div className="flex justify-between">
        <span className="text-[#C4C4CC] text-[14px]">{currentTime}</span>
        <span className="text-[#C4C4CC] text-[14px]">{timeToEnd}</span>
      </div>
    </div>
  );
};
