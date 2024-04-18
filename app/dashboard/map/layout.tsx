import React from "react";
import Link from "next/link";

import {Card, CardDescription, CardFooter, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";

import {getCourtsOwnersDetails} from "./queries";

export default async function layout({children}: {children: React.ReactNode}) {
  const courts = await getCourtsOwnersDetails();

  return (
    <Card className="flex flex-col md:flex-row gap-4 h-full min-h-[700px] p-4">
      <aside className="flex gap-2">
        <div className="min-w-[100px] max-w-[350px] space-y-3">
          {courts.length > 0 &&
            courts.map((court) => (
              <Card key={court.id} className="p-4 space-y-2">
                <CardTitle>{court.placeName}</CardTitle>
                <CardDescription className="grid">{court.description}</CardDescription>
                <CardFooter className="flex justify-end p-0 gap-2">
                  <Button asChild variant={"outline"}>
                    <Link href={`/dashboard/place/${court.id}`}>See place</Link>
                  </Button>
                  <Button asChild>
                    <Link
                      href={{
                        pathname: `map`,
                        query: {
                          longitude: court.longitude,
                          latitude: court.latitude,
                        },
                      }}
                    >
                      See in map
                    </Link>
                  </Button>
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
