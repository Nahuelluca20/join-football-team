"use client";

import {Home, Users2, Map} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";

import {Tooltip, TooltipTrigger, TooltipContent} from "../ui/tooltip";

export default function RoutesLinks() {
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

  return (
    <>
      {routes.map((itemLink, index) => (
        <Tooltip key={`link-${index}`}>
          <TooltipTrigger asChild>
            <Link
              className={clsx(
                "flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8",
                {
                  "text-muted-foreground": pathname !== itemLink.href,
                  "bg-accent": pathname === itemLink.href,
                },
              )}
              href={itemLink.href}
            >
              {itemLink.icon}
              <span className="sr-only">{itemLink.name}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{itemLink.name}</TooltipContent>
        </Tooltip>
      ))}
    </>
  );
}
