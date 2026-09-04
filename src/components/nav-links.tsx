"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DATA } from "@/data/portfolio";

const links = ["about", "projects", "experience", "education", "skills", "blog", "contact"];

export function NavLinks({ variant = "home" }: { variant?: "home" | "footer" }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Main navigation" className={`navigation navigation--${variant}`}>
      {variant === "footer" && <Link href="/">home</Link>}
      {links.map((label) => <Link key={label} href={`/${label}`} aria-current={pathname === `/${label}` ? "page" : undefined}>{label}</Link>)}
      <a href={DATA.resumeUrl} target="_blank" rel="noopener noreferrer">resume <span aria-hidden="true">↗</span></a>
    </nav>
  );
}
