import "../styles/global.css";

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: {
    default: "Hitalo Loose",
    template: "%s | Hitalo Loose",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: Props) {
  return (
    <html lang="pt-br">
      <head />
      <body className="bg-[#1e1e1e]">
        <div className="h-screen flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
