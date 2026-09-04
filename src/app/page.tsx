import { Logo } from "@/components/logo";
import { Timestamp } from "@/components/timestamp";
import { NavLinks } from "@/components/nav-links";
import { SocialIcons } from "@/components/social-icons";

export default function Home() {
  return (
    <div className="home-page">
      <header className="site-header"><Logo /><Timestamp /></header>
      <main id="main-content" className="home-menu">
        <h1 className="sr-only">Ryan Pham — Software Engineer</h1>
        <NavLinks />
        <SocialIcons />
      </main>
      <footer className="home-footer">software engineer · atlanta, ga</footer>
    </div>
  );
}
