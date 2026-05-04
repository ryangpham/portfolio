import { PageLayout } from "@/components/page-layout";
import { DATA } from "@/data/portfolio";

export default function EducationPage() {
  return (
    <PageLayout title="education">
      <div className="flex flex-col gap-8">
        {DATA.education.map((edu) => (
          <article key={edu.school}>
            <a
              href={edu.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium"
            >
              {edu.school.toLowerCase()}
            </a>
            <p className="mt-1 text-xs text-muted">
              {edu.degree.toLowerCase()}
            </p>
            <p className="mt-1 text-xs text-muted">
              {edu.start} – {edu.end}
            </p>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
