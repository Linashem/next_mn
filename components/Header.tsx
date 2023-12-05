import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
