const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prepends the basePath to local image paths so they resolve correctly
 * on both localhost and GitHub Pages (/AG_OTR/...).
 */
export function img(src: string): string {
  if (src.startsWith("http")) return src;
  return `${basePath}${src}`;
}
