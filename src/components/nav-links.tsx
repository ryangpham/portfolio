import Link from "next/link";
import { DATA } from "@/data/portfolio";

const links = [
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "experience", href: "/experience" },
  { label: "education", href: "/education" },
  { label: "skills", href: "/skills" },
  {
    label: "resume",
    href: DATA.resumeUrl,
    external: true,
  },
];

export function NavLinks() {
  return (
    <nav className="mt-16 flex flex-col gap-1">
      {links.map((link) =>
        link.external ? (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-1 py-1 font-mono text-[13px] tracking-wide text-foreground transition-colors hover:bg-accent hover:text-white"
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={link.label}
            href={link.href}
            className="px-1 py-1 font-mono text-[13px] tracking-wide text-foreground transition-colors hover:bg-accent hover:text-white"
          >
            {link.label}
          </Link>
        )
      )}
    </nav>
  );
}
