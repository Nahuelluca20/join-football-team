import Link from "next/link";

import SessionButton from "@/components/buttons/session-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/dashboard"}>Dashboard</Link>
      <SessionButton />
    </main>
  );
}
