import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { education } from "@/data/resume";

export function Education() {
  return (
    <section
      id="formacao"
      className="mx-auto max-w-4xl scroll-mt-20 border-t border-border px-6 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading eyebrow="03 · Formação" title="Formação acadêmica" />

      <ul className="space-y-6">
        {education.map((item) => (
          <li key={item.degree} className="flex gap-3">
            <GraduationCap
              className="mt-0.5 h-5 w-5 shrink-0 text-accent"
              strokeWidth={1.5}
            />
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 flex-1">
              <div>
                <p className="font-medium text-foreground">{item.degree}</p>
                <p className="text-sm text-muted">{item.institution}</p>
              </div>
              <p className="whitespace-nowrap font-mono text-xs text-muted">
                {item.period}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
