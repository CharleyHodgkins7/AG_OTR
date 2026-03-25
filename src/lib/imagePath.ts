const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prepends basePath to local image paths.
 * basePath is empty on Vercel (production) and can be set via env for other hosts.
 */
export function img(src: string): string {
  if (src.startsWith("http")) return src;
  return `${basePath}${src}`;
}
