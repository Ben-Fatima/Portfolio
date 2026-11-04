import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { CaseStudyMeta } from '@/data/types';

const CONTENT_DIR = path.join(process.cwd(), 'content/work');

interface CaseStudyModule {
  default: React.ComponentType;
  metadata?: CaseStudyMeta;
}

function load(slug: string): Promise<CaseStudyModule> {
  return import(`@/content/work/${slug}.mdx`);
}

export function generateStaticParams() {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => ({ slug: f.replace(/\.mdx$/, '') }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mod = await load(slug);
  return { title: mod.metadata?.title ?? slug, description: mod.metadata?.summary };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!fs.existsSync(path.join(CONTENT_DIR, `${slug}.mdx`))) {
    notFound();
  }
  const { default: Post, metadata } = await load(slug);

  return (
    <>
      <Link
        href="/#work"
        className="font-mono text-xs text-muted transition-colors hover:text-accent"
      >
        ← work
      </Link>

      <header className="mt-6 border-b border-border pb-8">
        <h1 className="mt-2 font-mono text-3xl font-bold tracking-tight text-foreground">
          {metadata?.title ?? slug}
        </h1>
        {metadata?.summary && (
          <p className="mt-3 max-w-xl leading-relaxed text-muted">{metadata.summary}</p>
        )}
        {metadata?.stack && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {metadata.stack.map((t) => (
              <li
                key={t}
                className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        )}
      </header>

      <article className="prose prose-invert mt-10">
        <Post />
      </article>
    </>
  );
}
