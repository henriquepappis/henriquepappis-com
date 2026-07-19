import { Mail, MapPin } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { profile } from "@/data/resume";

export function Hero() {
  return (
    <section
      id="topo"
      className="mx-auto flex max-w-4xl flex-col gap-6 px-6 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24"
    >
      <p className="flex items-center gap-2 font-mono text-sm text-muted">
        <MapPin className="h-4 w-4" strokeWidth={1.75} />
        {profile.location}
      </p>

      <h1 className="flex flex-wrap items-baseline gap-3 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
        {profile.name}
        <span className="rounded border border-border px-1.5 py-0.5 align-middle text-xs font-normal tracking-normal text-muted">
          {profile.pcd}
        </span>
      </h1>

      <p className="text-lg leading-relaxed text-muted sm:text-xl">
        {profile.title}
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <Mail className="h-4 w-4" strokeWidth={1.75} />
          {profile.email}
        </a>
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <LinkedinIcon className="h-4 w-4" />
          {profile.linkedinLabel}
        </a>
      </div>
    </section>
  );
}
