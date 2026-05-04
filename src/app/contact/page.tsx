import { PageLayout } from "@/components/page-layout";
import { DATA } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <PageLayout title="contact">
      <div className="flex flex-col gap-4">
        {Object.values(DATA.social).map((social) => (
          <a
            key={social.url}
            href={social.url}
            target={social.url.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              social.url.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className="text-sm tracking-wide"
          >
            {social.label.toLowerCase()}
          </a>
        ))}
      </div>
    </PageLayout>
  );
}
