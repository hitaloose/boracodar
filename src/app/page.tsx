import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/music_player">Music player</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/currency_converter">Currency Converter</Link>
    </main>
  );
}
