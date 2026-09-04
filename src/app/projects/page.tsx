import { PageLayout } from "@/components/page-layout";
import { DATA } from "@/data/portfolio";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <PageLayout title="projects">
      <div className="project-grid">
        {DATA.projects.map((project, index) => (
          <article key={project.title}>
            <Image src={project.image} alt={`${project.title} preview`} width={600} height={364} sizes="(max-width: 600px) calc(100vw - 48px), 338px" className="project-image" priority={index < 2} />
            <h2>{project.title}</h2>
            <p className="project-date">{project.dates}</p>
            <details>
              <summary>project details</summary>
              <p>{project.description}</p>
              <p>{project.technologies.join(", ")}</p>
            </details>
            <div className="project-links">
              {project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} ${link.type}`}>{link.type} ↗</a>)}
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
