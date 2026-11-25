import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { content } from "@/data/content";
import type { Locale } from "@/data/types";

const locales: Locale[] = ["pt", "en"];

function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: content[locale].pageTitle,
    robots: { index: false, follow: false },
  };
}

const printCss = `
  @page { size: A4; margin: 11mm 14mm; }
  html, body { background: #fff !important; color: #000 !important; }
`;

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-3">
      <h2 className="mb-1.5 border-b border-black pb-0.5 text-[10.5pt] font-bold uppercase tracking-wide">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default async function CvPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const c = content[locale];
  const { profile, ui } = c;
  const h = ui.cv;

  return (
    <div
      className="bg-white text-[9.5pt] leading-[1.28] text-black"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <style>{printCss}</style>

      <header>
        <h1 className="text-[20pt] font-bold leading-tight">{profile.name}</h1>
        <p className="mt-1 text-[11pt] font-semibold">{profile.title}</p>
        <p className="mt-1">
          {profile.email} | {profile.phone} | {profile.location} |{" "}
          {profile.linkedinLabel} | {profile.pcd}
        </p>
      </header>

      <Section title={h.summary}>
        <p>{c.summary}</p>
      </Section>

      <Section title={h.experience}>
        {c.experience.map((job) => (
          <div key={`${job.company}-${job.period}`} className="mb-1.5 break-inside-avoid">
            <h3 className="font-bold">
              {job.role} | {job.company}
            </h3>
            <p>
              {job.period}
              {job.location ? ` | ${job.location}` : ""}
            </p>
            {job.bullets && (
              <ul className="mt-1 list-disc pl-5">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </Section>

      <Section title={h.education}>
        {c.education.map((item) => (
          <p key={item.degree} className="mb-1">
            <strong>{item.degree}</strong> | {item.institution} | {item.period}
          </p>
        ))}
      </Section>

      <Section title={h.courses}>
        <p className="font-bold">{c.courses.institution}</p>
        <p className="mt-1 font-semibold">{h.completed}</p>
        <ul className="list-disc pl-5">
          {c.courses.completed.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </Section>

      <Section title={h.skills}>
        {c.stack.map((group) => (
          <p key={group.category} className="mb-0.5">
            <strong>{group.category}:</strong> {group.items.join(", ")}
          </p>
        ))}
      </Section>

      <Section title={h.international}>
        <p>
          {c.internationalExperience.period} | {c.internationalExperience.location}
        </p>
        <p>{c.internationalExperience.description}</p>
        <p>{c.internationalExperience.volunteer}</p>
      </Section>

      <Section title={h.languages}>
        {c.languages.map((language) => (
          <p key={language.name}>
            <strong>{language.name}:</strong> {language.level}
          </p>
        ))}
      </Section>
    </div>
  );
}
