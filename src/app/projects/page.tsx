import { PageLayout } from "@/components/page-layout";
import { DATA } from "@/data/portfolio";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <PageLayout title="projects">
      <div className="flex flex-col gap-12">
        {DATA.projects.map((project) => (
          <article key={project.title}>
            {project.image && (
              <div className="mb-4 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={340}
                  className="w-full object-cover opacity-80"
                />
              </div>
            )}
            <h2 className="text-sm font-medium">{project.title}</h2>
            <p className="mt-1 text-xs text-muted">{project.dates}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <p className="mt-3 text-xs text-muted">
              {project.technologies.join(", ")}
            </p>
            <div className="mt-3 flex gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-wide underline"
                >
                  {link.type}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
