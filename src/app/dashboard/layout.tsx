import { Inter } from "@next/font/google";

type Props = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: Props) {
  return (
    <div className={`${inter.className} bg-[#292738] py-[110px] px-[120px] rounded-2xl`}>
      {children}
    </div>
  );
}
