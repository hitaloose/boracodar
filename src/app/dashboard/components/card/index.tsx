type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Props) => {
  return <div className="px-[48px] py-[29px] bg-[#363447] rounded-2xl shadow-dashboard-card">{children}</div>;
};
