import { Lato } from "@next/font/google";

type Props = {
  children: React.ReactNode;
};

const lato = Lato({ weight: ["700"], subsets: ["latin"] });

export default function Layout({ children }: Props) {
  return <div className={`${lato.className}`}>{children}</div>;
}
