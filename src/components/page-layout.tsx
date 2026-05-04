import Link from "next/link";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/"
        className="text-xs tracking-wide text-muted transition-colors hover:text-foreground"
      >
        ← back
      </Link>
      <h1 className="mt-8 text-lg font-medium tracking-wide">{title}</h1>
      <div className="mt-8">{children}</div>
    </main>
  );
}
