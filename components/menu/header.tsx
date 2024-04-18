"use client";
import Image from "next/image";
import Link from "next/link";
import {Home, Package2, PanelLeft, Search, Users2, Map} from "lucide-react";
import {usePathname} from "next/navigation";
import clsx from "clsx";

import {Button} from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Input} from "@/components/ui/input";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";

export default function Header() {
  const routes = [
    {
      icon: <Home className="h-5 w-5" />,
      href: "/dashboard",
      name: "Home",
    },
    {
      icon: <Map className="h-5 w-5" />,
      href: "/dashboard/map",
      name: "Map",
    },
    {
      icon: <Users2 className="h-5 w-5" />,
      href: "/dashboard/teams",
      name: "Teams",
    },
  ];

  const pathname = usePathname();

  const splitPathname = pathname.split("/");

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="sm:hidden" size="icon" variant="outline">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-xs" side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              className="group  flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
              href="#"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {routes.map((itemLink, index) => (
              <Link
                key={`link-mobile-${index}`}
                className={clsx(
                  "flex items-center gap-4 py-1 px-2.5 text-foreground hover:text-foreground",
                  {
                    "text-muted-foreground": pathname !== itemLink.href,
                    "bg-accent": pathname === itemLink.href,
                  },
                )}
                href={itemLink.href}
              >
                {itemLink.icon}
                {itemLink.name}
                <span className="sr-only">{itemLink.name}</span>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          {splitPathname.map((path, index) => {
            return path === "" ? (
              ""
            ) : (
              <>
                <BreadcrumbItem key={`breadcrum-${index}`}>
                  {splitPathname.length === index + 1 ? (
                    <BreadcrumbPage>
                      <BreadcrumbLink asChild>
                        <Link href={path === "dashboard" ? `/${path}` : `${path}`}>
                          {path.replace(/^\w/, (c) => c.toUpperCase())}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={path === "dashboard" ? `/${path}` : `${path}`}>
                        {path.replace(/^\w/, (c) => c.toUpperCase())}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {splitPathname.length !== index + 1 && <BreadcrumbSeparator />}
              </>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          placeholder="Search..."
          type="search"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="overflow-hidden rounded-full" size="icon" variant="outline">
            <Image
              alt="Avatar"
              className="overflow-hidden rounded-full"
              height={36}
              src="/placeholder-user.jpg"
              width={36}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
