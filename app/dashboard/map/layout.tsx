import React from "react";

import {Card, CardDescription, CardFooter, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <Card className="flex gap-4 h-full min-h-[700px] p-4">
      <aside className="flex gap-2">
        <div className="min-w-[100px] max-w-[350px]">
          <Card className="p-4 space-y-2">
            <CardTitle>Los Alamos FC</CardTitle>
            <CardDescription>
              Tenemos canchas de 5 y de 8 diponibles 7 dias de la semana
            </CardDescription>
            <CardFooter className="flex justify-end p-0 gap-2">
              <Button variant={"outline"}>See place</Button>
              <Button>See in map</Button>
            </CardFooter>
          </Card>
        </div>
        <Separator orientation="vertical" />
      </aside>
      <div>{children}</div>
    </Card>
  );
}
