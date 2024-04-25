import React from "react";

import {CardContent, CardTitle, Card, CardHeader} from "../ui/card";
import {ScrollArea} from "../ui/scroll-area";
import {Separator} from "../ui/separator";

const tags = Array.from({length: 50}).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export default function MyTeams() {
  return (
    <Card className="w-full md:max-w-[300px]">
      <CardHeader>
        <CardTitle>My teams</CardTitle>
      </CardHeader>

      <CardContent>Team pauperrimo</CardContent>
      <ScrollArea>
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.map((tag) => (
            <>
              <div key={tag} className="text-sm">
                {tag}
              </div>
              <Separator className="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}
