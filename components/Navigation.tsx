'use client'


import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface INavLink {
  href: string;
  label: string;
}

interface NavigationProps {
  navLinks: INavLink[];
}

const Navigation: React.FC<NavigationProps> = ({ navLinks }) => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? "active" : ""}
          > {link.label} </Link>
        );
      })}
    </>
  );
};

export default Navigation;
