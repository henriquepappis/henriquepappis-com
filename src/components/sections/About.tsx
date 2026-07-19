"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useContent } from "@/lib/locale";

export function About() {
  const { summary, ui } = useContent();

  return (
    <section
      id="sobre"
      className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading eyebrow={ui.sections.about.eyebrow} title={ui.sections.about.title} />
      <p className="max-w-2xl text-justify text-base leading-relaxed text-muted sm:text-lg">
        {summary}
      </p>
    </section>
  );
}
