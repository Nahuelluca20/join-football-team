import Link from "next/link";

import SessionButton from "@/components/buttons/session-button";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-5 p-24">
      <h1 className="text-2xl md:text-3xl font-bold">Proyecto: Falta uno</h1>
      <div className="flex gap-3 items-center">
        <Button asChild>
          <Link href={"/dashboard"}>Go to App</Link>
        </Button>
        <SessionButton />
      </div>
    </main>
  );
}
