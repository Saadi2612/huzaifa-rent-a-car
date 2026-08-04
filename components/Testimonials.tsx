import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/site";
import { Star } from "./icons";

export default function Testimonials() {
  return (
    <section className="py-p8 md:py-p12" aria-label="Customer reviews">
      <div className="shell">
        <Reveal>
          <p className="label-eyebrow text-brand">Reviews</p>
          <h2 className="display-l mt-p1 max-w-[13ch] text-ink">
            What people say after
          </h2>
        </Reveal>
      </div>

      {/* Horizontal rail — full-bleed so cards run off the edge */}
      <div className="no-bar mt-p4 flex snap-x snap-mandatory gap-p2 overflow-x-auto px-5 pt-2 pb-p3 md:px-10 xl:px-16">
        {TESTIMONIALS.map((t, i) => (
          <Reveal
            as="article"
            key={t.name}
            delay={i * 80}
            className="w-[85vw] shrink-0 snap-start sm:w-[420px]"
          >
            <figure className="float-card float-hover flex h-full flex-col p-p3">
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="subheading mt-p2 text-[1.125rem] text-ink md:text-[1.25rem]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-p3">
                <span className="flex h-11 w-11 items-center justify-center rounded-circle bg-grey-100 text-ink">
                  <span className="display-s text-[1.125rem]">{t.name[0]}</span>
                </span>
                <span>
                  <span className="label-ui block text-ink">{t.name}</span>
                  <span className="label-ui block text-grey-500">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
        <div aria-hidden className="w-4 shrink-0" />
      </div>

      <div className="shell">
        <p className="mono-small text-grey-500">
          Scroll sideways for more →
        </p>
      </div>
    </section>
  );
}
