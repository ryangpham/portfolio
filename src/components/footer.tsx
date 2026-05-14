import { DATA } from "@/data/portfolio";
import { GitHubIcon } from "@/components/social-icons";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-center gap-8 px-6 py-6 text-xs tracking-wide text-muted">
      <a
        href={DATA.social.github.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={DATA.social.github.label}
        className="transition-colors hover:text-foreground"
      >
        <GitHubIcon />
      </a>
      <a href={DATA.social.linkedin.url} target="_blank" rel="noopener noreferrer">
        linkedin
      </a>
      <a href={DATA.social.email.url}>
        email
      </a>
    </footer>
  );
}
