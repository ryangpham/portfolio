import { Logo } from "@/components/logo";
import { Timestamp } from "@/components/timestamp";
import { NavLinks } from "@/components/nav-links";
import { SocialIcons } from "@/components/social-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center">
        <Logo />
        <Timestamp />
      </div>
      <div className="flex flex-col items-start">
        <NavLinks />
        <SocialIcons />
      </div>
    </main>
  );
}
