import links from '../../affiliate/links.json';

export function getAffiliate(slug: string): string | null {
  return (links as Record<string, string>)[slug] ?? null;
}
