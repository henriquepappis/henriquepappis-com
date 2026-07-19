import { Building2, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/resume";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="mx-auto max-w-4xl scroll-mt-20 border-t border-border px-6 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading eyebrow="02 · Trajetória" title="Experiência" />

      <ol className="relative border-l border-border pl-6 sm:pl-8">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-6 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full bg-accent sm:-left-8" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-semibold text-foreground">
                {job.role}
              </h3>
              <p className="font-mono text-xs text-muted">
                {job.period}
                {job.duration ? ` · ${job.duration}` : ""}
              </p>
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" strokeWidth={1.75} />
                {job.company}
              </span>
              {job.location ? (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
                  {job.location}
                </span>
              ) : null}
            </div>

            {job.bullets ? (
              <ul className="mt-3 space-y-1.5">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
