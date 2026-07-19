"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useContent } from "@/lib/locale";

export function Stack() {
  const { stack, ui } = useContent();

  return (
    <section
      id="stack"
      className="mx-auto max-w-4xl scroll-mt-20 border-t border-border px-6 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading eyebrow={ui.sections.stack.eyebrow} title={ui.sections.stack.title} />

      <div className="grid gap-8 sm:grid-cols-2">
        {stack.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border px-3 py-1.5 text-sm text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
