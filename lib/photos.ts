import "server-only";
import fs from "node:fs";
import path from "node:path";

/**
 * True when a real photo actually exists in /public at this path.
 *
 * This is what makes the "drop your photos in later" workflow safe: until a
 * file exists we render a styled placeholder slot, and the moment you save a
 * real image at the same path the component switches to <Image> on its own.
 * No code edit, no broken image icons, no 404s in between.
 *
 * Server-only — evaluated at render on the server (build time in production).
 */
export function photoExists(src: string): boolean {
  if (!src.startsWith("/")) return false;
  try {
    return fs.statSync(path.join(process.cwd(), "public", src)).isFile();
  } catch {
    return false;
  }
}

/** Map of `src -> exists`, for handing down to client components as a prop. */
export function photoManifest(sources: readonly string[]) {
  return Object.fromEntries(sources.map((s) => [s, photoExists(s)]));
}
