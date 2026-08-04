import Image from "next/image";

/**
 * Renders a real photo when one exists at `src`, otherwise a styled placeholder
 * slot that shows the exact path to drop the file at. Pass `exists` from
 * `photoExists()` / `photoManifest()` (server-side).
 */
export default function Photo({
  src,
  alt,
  exists,
  sizes,
  priority = false,
  label,
  className = "",
}: {
  src: string;
  alt: string;
  exists: boolean;
  sizes: string;
  priority?: boolean;
  label?: string;
  className?: string;
}) {
  if (exists) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className="photo-slot absolute inset-0 grid place-items-center"
    >
      {/* Faint car silhouette so empty slots still read as "a car goes here" */}
      <svg
        viewBox="0 0 200 80"
        aria-hidden
        className="absolute w-[72%] text-ink/[0.07]"
        fill="currentColor"
      >
        <path d="M14 56c-5 0-8-3-8-8v-8c0-5 4-8 9-9l22-4 16-12c4-3 9-5 14-5h38c6 0 11 2 15 6l13 11 24 5c6 1 10 5 10 11v5c0 5-3 8-8 8h-12a17 17 0 0 0-34 0H60a17 17 0 0 0-34 0H14Zm52-40-11 9h35V16H66Zm34 0v9h39l-9-7c-2-1-4-2-7-2h-23Z" />
        <circle cx="43" cy="58" r="11" />
        <circle cx="143" cy="58" r="11" />
      </svg>
      <span className="mono-small relative rounded-chip bg-paper/70 px-2 py-1 text-grey-500 backdrop-blur-sm">
        {label ?? src}
      </span>
    </div>
  );
}
