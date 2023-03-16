import Link from "next/link";

export default function Page() {
  return (
    <main className="flex gap-3 text-white">
      <Link href="/music_player">Music player</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/currency_converter">Currency Converter</Link>
      <Link href="/climate">Climate</Link>
      <Link href="/login">Login</Link>
    </main>
  );
}
