import type { MetadataRoute } from 'next';
import fs from 'node:fs';
import path from 'node:path';

const BASE = 'https://www.fatimazahra.dev';
const CONTENT_DIR = path.join(process.cwd(), 'content/work');

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => ({
      url: `${BASE}/work/${f.replace(/\.mdx$/, '')}`,
      lastModified: fs.statSync(path.join(CONTENT_DIR, f)).mtime
    }));

  return [
    { url: BASE, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/about`, changeFrequency: 'monthly', priority: 0.6 },
    ...caseStudies.map((c) => ({ ...c, changeFrequency: 'yearly' as const, priority: 0.8 }))
  ];
}
