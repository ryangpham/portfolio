import { PageLayout } from "@/components/page-layout";
import { DATA } from "@/data/portfolio";

export default function EducationPage() {
  return (
    <PageLayout title="education">
      {DATA.education.map((edu) => (
        <article className="record" key={edu.school}>
          <div className="record-date">{edu.start} — {edu.end}</div>
          <div>
            <h2><a href={edu.href} target="_blank" rel="noopener noreferrer">{edu.school.toLowerCase()} ↗</a></h2>
            <p>{edu.degree.toLowerCase()}</p>
            <p className="text-muted">gpa: {edu.gpa}</p>
            <h3 className="mt-6 font-bold">relevant coursework</h3>
            <ul className="mt-2 space-y-1 text-muted">{edu.courses.map(course => <li key={course}>{course.toLowerCase()}</li>)}</ul>
          </div>
        </article>
      ))}
    </PageLayout>
  );
}
