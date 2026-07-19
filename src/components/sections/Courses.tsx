import { BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { courses } from "@/data/resume";

export function Courses() {
  return (
    <section
      id="cursos"
      className="mx-auto max-w-4xl scroll-mt-20 border-t border-border px-6 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading eyebrow="04 · Cursos" title="Cursos complementares" />

      <p className="mb-6 font-mono text-xs text-muted">{courses.institution}</p>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted">
            Concluídos
          </h3>
          <ul className="space-y-2.5">
            {courses.completed.map((course) => (
              <li key={course} className="flex gap-2 text-sm leading-relaxed text-foreground">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                {course}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted">
            Em andamento
          </h3>
          <ul className="space-y-2.5">
            {courses.inProgress.map((course) => (
              <li key={course} className="flex gap-2 text-sm leading-relaxed text-muted">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-muted" strokeWidth={1.5} />
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
