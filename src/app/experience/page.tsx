import { PageLayout } from "@/components/page-layout";
import { DATA } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <PageLayout title="experience">
      {DATA.work.map((job) => (
        <article className="record" key={job.company}>
          <div className="record-date">{job.start.toLowerCase()}<br />— {job.end.toLowerCase()}</div>
          <div>
            <h2><a href={job.href} target="_blank" rel="noopener noreferrer">{job.company.toLowerCase()} ↗</a></h2>
            <p>{job.title.toLowerCase()}<br /><span className="text-muted">{job.location.toLowerCase()}</span></p>
            {job.description && <p className="text-muted">{job.description}</p>}
          </div>
        </article>
      ))}
    </PageLayout>
  );
}
