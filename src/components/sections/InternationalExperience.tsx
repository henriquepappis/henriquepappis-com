import { Globe2, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { internationalExperience } from "@/data/resume";

export function InternationalExperience() {
  return (
    <section
      id="vivencia-internacional"
      className="mx-auto max-w-4xl scroll-mt-20 border-t border-border px-6 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading eyebrow="05 · Vivência internacional" title="Intercâmbio e voluntariado" />

      <div className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-medium text-foreground">{internationalExperience.location}</p>
          <p className="whitespace-nowrap font-mono text-xs text-muted">
            {internationalExperience.period}
          </p>
        </div>

        <div className="flex gap-3">
          <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
          <p className="text-sm leading-relaxed text-muted">
            {internationalExperience.description}
          </p>
        </div>

        <div className="flex gap-3">
          <HeartHandshake className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
          <p className="text-sm leading-relaxed text-muted">
            {internationalExperience.volunteer}
          </p>
        </div>
      </div>
    </section>
  );
}
