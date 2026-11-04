import fs from 'node:fs';
import path from 'node:path';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { experience } from '@/data/experience';
import { links } from '@/data/links';
import { profile } from '@/data/profile';
import { work } from '@/data/work';

const CONTENT_DIR = path.join(process.cwd(), 'content/work');
const exists = (slug: string) => fs.existsSync(path.join(CONTENT_DIR, `${slug}.mdx`));

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border pb-14 pt-8">
        <p className="font-mono text-sm text-accent">{profile.role}</p>
        <h1 className="mt-3 font-mono text-4xl font-bold tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">{profile.tagline}</p>
        <p className="mt-2 font-mono text-xs text-muted">
          {profile.location} · {profile.openToWork}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={links.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent px-4 py-2 font-mono text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Download CV
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            github
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            linkedin
          </a>
          <a
            href={`mailto:${links.email}`}
            className="rounded-md border border-border px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            email
          </a>
        </div>
      </section>

      {/* Experience, mentioned not elaborated */}
      <section className="border-b border-border py-10">
        <h2 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
          <span className="text-accent">$ </span>experience
        </h2>
        <ul className="space-y-2">
          {experience.map((e) => (
            <li key={e.company} className="flex flex-wrap items-baseline gap-x-3 text-sm">
              <span className="font-mono text-muted">{e.period}</span>
              <span className="font-medium text-foreground">{e.role}</span>
              <span className="text-muted">@ {e.company}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section id="work" className="scroll-mt-20 pt-12">
        <div className="mb-5">
          <h2 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
            <span className="text-accent">$ </span>projects
          </h2>
          <p className="mt-1 text-sm text-muted">
            Projects I built myself, with a written case study for each one.
          </p>
        </div>
        <div className="space-y-4">
          {work.map((entry) => (
            <CaseStudyCard key={entry.slug} entry={entry} exists={exists(entry.slug)} />
          ))}
        </div>
      </section>
    </>
  );
}
