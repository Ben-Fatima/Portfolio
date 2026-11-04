import type { WorkEntry } from './types';

// Homepage order: personal projects only. The best write-up leads.
export const work: WorkEntry[] = [
  {
    slug: 'stock-tracker',
    title: 'Stock Tracker',
    summary:
      'Event-sourced inventory: immutable movements, stock levels derived from the event log, REST API + CLI.',
    stack: ['PHP 8.3', 'SQLite', 'REST']
  },
  {
    slug: 'file-importer',
    title: 'FileImporter',
    summary:
      'Chunked CSV importer that streams million-row files: memory stayed flat at 2 MB where the naive version needed 157.',
    stack: ['PHP 8', 'SQLite', 'Streaming']
  },
  {
    slug: 'feedback-api',
    title: 'Feedback API',
    summary:
      'Zero-dependency Node.js HTTP API: input hardening and a fixed-window rate limiter, verified with a real request flood.',
    stack: ['Node.js', 'HTTP', 'Security']
  },
  {
    slug: 'fikrify',
    title: 'Fikrify',
    summary: 'A shipped product, idea to deployed on its own domain.',
    stack: ['Laravel', 'Livewire', 'Vercel']
  },
  {
    slug: 'resume-tool',
    title: 'Resume Tool',
    summary:
      'A data-driven resume app: typed data files render the CV, dual-locale, headless PDF generation.',
    stack: ['Next.js', 'TypeScript', 'Tailwind']
  }
];
