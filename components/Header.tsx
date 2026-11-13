import Link from 'next/link';
import { links } from '@/data/links';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm font-semibold text-foreground">
          <span className="text-accent">~/</span>fz.benhammou
        </Link>

        <nav className="flex items-center gap-5">
          <Link
            href="/#work"
            className="font-mono text-xs text-muted transition-colors hover:text-foreground"
          >
            work
          </Link>
          <Link
            href="/about"
            className="font-mono text-xs text-muted transition-colors hover:text-foreground"
          >
            about
          </Link>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden font-mono text-xs text-muted transition-colors hover:text-foreground sm:inline"
          >
            github
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden font-mono text-xs text-muted transition-colors hover:text-foreground sm:inline"
          >
            linkedin
          </a>
          <a
            href={links.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-accent/40 px-3 py-1.5 font-mono text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-background"
          >
            cv ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
