"use client";

import { headerNavLinks } from "@/constant/index";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col md:flex-center md:flex-row w-full gap-5">
      {headerNavLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li key={link.route} className={cn(isActive && "font-bold")}>
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
