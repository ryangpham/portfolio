import { Logo } from "@/components/logo";
import { Timestamp } from "@/components/timestamp";
import { Footer } from "@/components/footer";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="interior-page">
      <header className="site-header"><Logo /><Timestamp /></header>
      <main id="main-content" className={`page-content page-content--${title}`}>
        <h1>{title}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
}
