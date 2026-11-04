import type { Metadata } from 'next';
import Link from 'next/link';
import { experience } from '@/data/experience';
import { links } from '@/data/links';
import { profile } from '@/data/profile';
import { stack } from '@/data/stack';

export const metadata: Metadata = {
  title: 'About',
  description: profile.about
};

export default function About() {
  return (
    <>
      <Link
        href="/"
        className="font-mono text-xs text-muted transition-colors hover:text-accent"
      >
        ← home
      </Link>

      <header className="mt-6 border-b border-border pb-8">
        <p className="font-mono text-sm text-accent">{profile.role}</p>
        <h1 className="mt-3 font-mono text-3xl font-bold tracking-tight text-foreground">
          about
        </h1>
      </header>

      <section className="border-b border-border py-10">
        <p className="max-w-xl leading-relaxed text-muted">{profile.about}</p>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          I like solving problems: finding the real cause, fixing it, and
          measuring the result. Then I write down what changed and why.
        </p>
        <p className="mt-4 font-mono text-xs text-muted">
          {profile.location} · {profile.openToWork}
        </p>
      </section>

      <section className="border-b border-border py-10">
        <h2 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
          <span className="text-accent">$ </span>experience
        </h2>
        <ul className="space-y-4">
          {experience.map((e) => (
            <li key={e.company}>
              <div className="flex flex-wrap items-baseline gap-x-3 text-sm">
                <span className="font-mono text-muted">{e.period}</span>
                <span className="font-medium text-foreground">{e.role}</span>
                <span className="text-muted">@ {e.company}</span>
              </div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {e.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-b border-border py-10">
        <h2 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
          <span className="text-accent">$ </span>stack
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {stack.map((g) => (
            <div key={g.title}>
              <h3 className="font-mono text-xs text-muted">{g.title}</h3>
              <ul className="mt-2 space-y-1">
                {g.items.map((i) => (
                  <li key={i} className="text-sm text-foreground">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <h2 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
          <span className="text-accent">$ </span>contact
        </h2>
        <p className="text-sm text-muted">
          The fastest way to reach me is email:{' '}
          <a href={`mailto:${links.email}`} className="text-accent hover:underline">
            {links.email}
          </a>
          . My work is on{' '}
          <a href={links.github} className="text-accent hover:underline">
            GitHub
          </a>{' '}
          and{' '}
          <a href={links.linkedin} className="text-accent hover:underline">
            LinkedIn
          </a>
          .
        </p>
      </section>
    </>
  );
}
