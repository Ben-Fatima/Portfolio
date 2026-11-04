import { links } from '@/data/links';
import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs text-muted">
            {profile.name} · {profile.role}
          </p>
          <a
            href={`mailto:${links.email}`}
            className="mt-1 block font-mono text-sm text-accent hover:underline"
          >
            {links.email}
          </a>
        </div>
        <div className="flex items-center gap-5 font-mono text-xs text-muted">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            github
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            linkedin
          </a>
          <span className="text-border">|</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
