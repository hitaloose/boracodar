import { Titillium_Web } from "@next/font/google";

type Props = {
  children: React.ReactNode;
};

const font = Titillium_Web({ subsets: ["latin"], weight: ["700", "400"] });

export default function Layout({ children }: Props) {
  return (
    <div
      className={`${font.className} h-[100%] w-[100%] bg-[#1E1E1E] flex justify-center items-center`}
    >
      {children}
    </div>
  );
}
