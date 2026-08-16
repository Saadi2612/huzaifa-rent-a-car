import Photo from "./Photo";
import Reveal from "./Reveal";
import { WHY, site } from "@/lib/site";
import { photoExists } from "@/lib/photos";
import { Clock, Shield } from "./icons";

const IMG = "/cars/why-us.jpg";

export default function Why() {
  return (
    <section id="why" className="scroll-mt-28 py-p8 md:py-p12">
      <div className="shell">
        <div className="grid gap-p5 lg:grid-cols-12 lg:gap-p3">
          {/* Sticky left rail */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="label-eyebrow text-brand">Why us</p>
                <h2 className="display-l mt-p1 max-w-[12ch] text-ink">
                  Boring in the ways that matter
                </h2>
                <p className="body-default mt-p2 max-w-[42ch] text-grey-600">
                  Renting a car in Pakistan usually means a number off Facebook, a
                  vague rate and a car you have not seen. We built {site.name} to be
                  the opposite of that — predictable, documented and dull. That is
                  the point.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="float-card relative mt-p3 aspect-[5/4] overflow-hidden rounded-large">
                  <Photo
                    src={IMG}
                    exists={photoExists(IMG)}
                    alt={`${site.name} Rent A Car service yard`}
                    sizes="(max-width: 1024px) 92vw, 40vw"
                  />
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-p2 flex flex-wrap gap-2">
                  <span className="label-ui flex items-center gap-2 rounded-pill border border-grey-200 bg-paper px-4 py-2.5 text-grey-600 shadow-lift-sm">
                    <Shield className="h-4 w-4 text-brand" />
                    Fully insured fleet
                  </span>
                  <span className="label-ui flex items-center gap-2 rounded-pill border border-grey-200 bg-paper px-4 py-2.5 text-grey-600 shadow-lift-sm">
                    <Clock className="h-4 w-4 text-brand" />
                    On-time or you do not pay waiting
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Reasons */}
          <ul className="flex flex-col gap-p2 lg:col-span-7">
            {WHY.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 80}>
                <article className="float-card float-hover flex gap-p2 p-p3">
                  <span className="display-s shrink-0 text-[1.5rem] text-brand-tint-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display-s text-[1.625rem] text-ink">{w.title}</h3>
                    <p className="body-default mt-2 max-w-[56ch] text-grey-600">
                      {w.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
