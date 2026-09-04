import { PageLayout } from "@/components/page-layout";
import { DATA } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <PageLayout title="contact">
      <div className="contact-list">
        {Object.values(DATA.social).map((social) => (
          <a key={social.url} href={social.url} target={social.url.startsWith("mailto:") ? undefined : "_blank"} rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}>
            <span>{social.label.toLowerCase()}</span>{social.url.startsWith("mailto:") ? social.url.replace("mailto:", "") : "↗"}
          </a>
        ))}
      </div>
    </PageLayout>
  );
}
