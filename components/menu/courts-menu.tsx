import React from "react";
import Link from "next/link";

import {Button} from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {Card, CardTitle, CardDescription, CardFooter} from "@/components/ui/card";
import {getCourtsOwnersDetails} from "@/app/dashboard/map/queries";

export default async function CourtsMenu() {
  const courts = await getCourtsOwnersDetails();

  return (
    <div className="w-full flex justify-end md:hidden">
      <Sheet>
        <Button asChild>
          <SheetTrigger>See Courts</SheetTrigger>
        </Button>

        <SheetContent className="w-full h-full" side={"top"}>
          <SheetHeader>
            <SheetTitle>Courts</SheetTitle>
          </SheetHeader>
          <div className="pt-5 space-y-3">
            {courts.map((court) => (
              <Card key={court.id} className="p-4 space-y-2">
                <CardTitle>{court.placeName}</CardTitle>
                <CardDescription className="grid">{court.description}</CardDescription>
                <CardFooter className="flex justify-end p-0 gap-2">
                  <Button asChild variant={"outline"}>
                    <Link href={`/dashboard/place/${court.id}`}>See place</Link>
                  </Button>
                  <SheetClose asChild>
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
                  </SheetClose>
                </CardFooter>
              </Card>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
