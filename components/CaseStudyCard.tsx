import Link from 'next/link';
import type { WorkEntry } from '@/data/types';

export function CaseStudyCard({ entry, exists }: { entry: WorkEntry; exists: boolean }) {
  const inner = (
    <>
      <div className="flex items-center gap-3">
        {!exists && (
          <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted">
            in writing
          </span>
        )}
      </div>
      <h3 className="mt-2 font-mono text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
        {entry.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{entry.summary}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {entry.stack.map((t) => (
          <li
            key={t}
            className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted"
          >
            {t}
          </li>
        ))}
      </ul>
    </>
  );

  const cls =
    'group block rounded-xl border border-border bg-surface/50 p-5 transition-colors' +
    (exists ? ' hover:border-accent/50 hover:bg-surface' : ' opacity-50');

  return exists ? (
    <Link href={`/work/${entry.slug}`} className={cls}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
