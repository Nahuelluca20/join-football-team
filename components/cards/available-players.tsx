import React from "react";

import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import {TableHeader, TableRow, TableHead, TableBody, TableCell, Table} from "@/components/ui/table";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {getPlayerAvailable} from "@/app/dashboard/queries";

export default async function AvailablePlayers() {
  const players = await getPlayerAvailable();

  console.log(players);

  return (
    <Card x-chunk="dashboard-05-chunk-3">
      <CardHeader className="px-7">
        <CardTitle>Players Availables</CardTitle>
        <CardDescription>Recent login players.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Player</TableHead>
              <TableHead className="hidden sm:table-cell">Position</TableHead>
              <TableHead className="sm:table-cell">Status</TableHead>
              <TableHead className="md:table-cell">Live In</TableHead>
              <TableHead className="hidden md:table-cell text-right">Image</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player, index) => (
              <>
                <TableRow key={`player-${index}`}>
                  <TableCell>
                    <div className="font-medium">{player.userName}</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      {player.email}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{player.position}</TableCell>
                  <TableCell className="sm:table-cell">
                    <Badge className="text-xs" variant={player.available ? "outline" : "default"}>
                      {player.available ? "disponible" : "ocupado"}
                    </Badge>
                  </TableCell>
                  <TableCell className="md:table-cell">{player.liveIn}</TableCell>
                  <TableCell className="md:flex justify-end hidden ">
                    <Avatar>
                      <AvatarImage alt="@shadcn" src={player.image} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
