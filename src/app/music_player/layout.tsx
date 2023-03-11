import { Roboto } from "@next/font/google";

type Props = {
  children: React.ReactNode;
};

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Layout({ children }: Props) {
  return (
    <div
      className={`${roboto.className} bg-[#0F0D1] py-[66px] px-[190px] rounded-2xl`}
    >
      {children}
    </div>
  );
}
