import Reveal from "./Reveal";
import { STATS } from "@/lib/site";

const MARQUEE = [
  "Airport pickups",
  "Wedding convoys",
  "Northern tours",
  "Corporate monthly",
  "Self drive",
  "Intercity travel",
  "Free city delivery",
  "24/7 dispatch",
];

export default function TrustStrip() {
  return (
    <section className="pt-p8 md:pt-p10" aria-label="At a glance">
      <div className="shell">
        <Reveal>
          <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-p2">
            {STATS.map((s) => (
              <li
                key={s.label}
                className="float-card float-hover rounded-card px-p2 py-p2"
              >
                <p className="display-m text-ink">{s.value}</p>
                <p className="label-ui mt-1 text-grey-500">{s.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Full-bleed marquee — breaks the grid so the page breathes */}
      <div className="relative mt-p6 overflow-hidden border-y border-grey-200 py-p2 md:mt-p8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent"
        />
        <div className="marquee-track flex w-max items-center gap-p3">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="flex shrink-0 items-center gap-p3">
              <span className="display-s text-[1.5rem] text-grey-500 md:text-[2rem]">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-circle bg-brand" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
