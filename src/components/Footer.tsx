import { profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-4xl border-t border-border px-6 py-8 sm:px-8">
      <p className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
