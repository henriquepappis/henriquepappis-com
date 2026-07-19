import { Mail, MessageCircle } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/resume";

export function Contact() {
  return (
    <section
      id="contato"
      className="mx-auto max-w-4xl scroll-mt-20 border-t border-border px-6 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading eyebrow="09 · Contato" title="Vamos conversar" />

      <ul className="space-y-4">
        <li>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 text-base text-foreground transition-colors hover:text-accent"
          >
            <Mail className="h-4 w-4 text-accent" strokeWidth={1.75} />
            {profile.email}
          </a>
        </li>
        <li>
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-base text-foreground transition-colors hover:text-accent"
          >
            <MessageCircle className="h-4 w-4 text-accent" strokeWidth={1.75} />
            {profile.phone}
          </a>
        </li>
        <li>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-base text-foreground transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4 text-accent" />
            {profile.linkedinLabel}
          </a>
        </li>
      </ul>
    </section>
  );
}
