import { SectionHeading } from "@/components/SectionHeading";
import { languages } from "@/data/resume";

export function Languages() {
  return (
    <section
      id="idiomas"
      className="mx-auto max-w-4xl scroll-mt-20 border-t border-border px-6 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading eyebrow="08 · Idiomas" title="Idiomas" />

      <dl className="grid gap-6 sm:grid-cols-3">
        {languages.map((lang) => (
          <div key={lang.name}>
            <dt className="font-medium text-foreground">{lang.name}</dt>
            <dd className="mt-1 text-sm text-muted">{lang.level}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
