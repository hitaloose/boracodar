import "./styles.css";

type Props = {
  label: string;
  value: number;
};

export const ChartBar = ({ value, label }: Props) => {
  return (
    <div className="h-[100%] flex flex-col justify-end items-center">
      <div style={{ height: `${value}%` }} className={`bar`}></div>
      <span className="label text-[14px] text-[#ffffff]">{label}</span>
    </div>
  );
};
