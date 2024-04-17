import {File, ListFilter} from "lucide-react";
import Link from "next/link";

import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Progress} from "@/components/ui/progress";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import NextMatch from "@/components/cards/next-match";
import AvailablePlayers from "@/components/cards/available-players";

export default function page() {
  return (
    <main className="grid flex-1 items-start gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>Create a Team</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Create teams so that other players can join.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href={"/dashboard/teams"}>Create New Team</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>My Teams</CardDescription>
              <CardTitle className="text-4xl">{3}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">you belong to 3 different teams</div>
            </CardContent>
            <CardFooter>
              <Progress aria-label="25% increase" value={25} />
            </CardFooter>
          </Card>
          {/* <Card x-chunk="dashboard-05-chunk-2">
            <CardHeader className="pb-2">
              <CardDescription>This Month</CardDescription>
              <CardTitle className="text-4xl">$5,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">+10% from last month</div>
            </CardContent>
            <CardFooter>
              <Progress aria-label="12% increase" value={12} />
            </CardFooter>
          </Card> */}
        </div>

        {/* Players Avaible to play */}
        <Tabs defaultValue="today">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="today">Today</TabsTrigger>
              {/* <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger> */}
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="h-7 gap-1 text-sm" size="sm" variant="outline">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>Fulfilled</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="h-7 gap-1 text-sm" size="sm" variant="outline">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Export</span>
              </Button>
            </div>
          </div>
          <TabsContent value="today">
            <AvailablePlayers />
          </TabsContent>
        </Tabs>
      </div>

      {/* Next Match Card for view my next match info */}
      <NextMatch />
    </main>
  );
}
