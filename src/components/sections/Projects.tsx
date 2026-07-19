import { SectionHeading } from "@/components/SectionHeading";
import { personalProjects } from "@/data/resume";

export function Projects() {
  return (
    <section
      id="projetos"
      className="mx-auto max-w-4xl scroll-mt-20 border-t border-border px-6 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading eyebrow="06 · Projetos" title="Projetos pessoais" />

      <div className="grid gap-8 sm:grid-cols-3">
        {personalProjects.map((project) => (
          <div key={project.name} className="flex flex-col gap-2">
            <h3 className="font-semibold text-foreground">{project.name}</h3>
            <p className="text-sm font-medium text-muted">{project.tagline}</p>
            <p className="text-sm leading-relaxed text-muted">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-border px-2 py-0.5 text-xs text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
