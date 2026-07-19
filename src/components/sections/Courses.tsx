"use client";

import { BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useContent } from "@/lib/locale";

export function Courses() {
  const { courses, ui } = useContent();

  return (
    <section
      id="cursos"
      className="mx-auto max-w-4xl scroll-mt-20 border-t border-border px-6 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading eyebrow={ui.sections.courses.eyebrow} title={ui.sections.courses.title} />

      <p className="mb-6 font-mono text-xs text-muted">{courses.institution}</p>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted">
            {ui.sections.courses.completed}
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
            {ui.sections.courses.inProgress}
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
