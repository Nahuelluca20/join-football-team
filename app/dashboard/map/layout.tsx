import React from "react";
import Link from "next/link";

import {Card, CardDescription, CardFooter, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";

import {getCourtsOwnersDetails} from "./queries";

export default async function layout({children}: {children: React.ReactNode}) {
  const courts = await getCourtsOwnersDetails();

  console.log(courts);

  return (
    <Card className="flex gap-4 h-full min-h-[700px] p-4">
      <aside className="flex gap-2">
        <div className="min-w-[100px] max-w-[350px]">
          {courts.length > 0 &&
            courts.map((court) => (
              <Card key={court.id} className="p-4 space-y-2">
                <CardTitle>{court.placeName}</CardTitle>
                <CardDescription>{court.description}</CardDescription>
                <CardFooter className="flex justify-end p-0 gap-2">
                  <Button asChild variant={"outline"}>
                    <Link href={`/dashboard/place/${court.id}`}>See place</Link>
                  </Button>
                  <Button>See in map</Button>
                </CardFooter>
              </Card>
            ))}
        </div>
        <Separator orientation="vertical" />
      </aside>
      <div>{children}</div>
    </Card>
  );
}
