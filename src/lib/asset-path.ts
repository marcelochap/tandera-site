/** Prepend basePath so public assets resolve correctly on GitHub Pages. */
export function ap(path: string): string {
  return (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + path;
}
