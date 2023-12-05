import Link from "next/link";
import type { PropsWithChildren } from "react";

export default function AboutLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <h1>About</h1>

      <ul>
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {children}

    </div>
  );
}
