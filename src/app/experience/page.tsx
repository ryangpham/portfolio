import { PageLayout } from "@/components/page-layout";
import { DATA } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <PageLayout title="experience">
      <div className="flex flex-col gap-12">
        {DATA.work.map((job) => (
          <article key={job.company}>
            <a
              href={job.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium"
            >
              {job.company.toLowerCase()}
            </a>
            <p className="mt-1 text-xs text-muted">
              {job.title.toLowerCase()} · {job.location.toLowerCase()}
            </p>
            <p className="mt-1 text-xs text-muted">
              {job.start.toLowerCase()} – {job.end.toLowerCase()}
            </p>
            {job.description && (
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {job.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
