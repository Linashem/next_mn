import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Navigation navLinks={navItems} />
        </nav>
      </header>
    </>
  );
};

export default Header;
