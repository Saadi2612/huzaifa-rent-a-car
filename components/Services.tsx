import Reveal from "./Reveal";
import { SERVICES, site, waLink } from "@/lib/site";
import { ArrowUpRight, Check } from "./icons";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-28 bg-ink py-p8 text-paper md:py-p12"
    >
      <div className="shell">
        <div className="flex flex-col justify-between gap-p3 lg:flex-row lg:items-end">
          <Reveal>
            <p className="label-eyebrow text-brand">What we do</p>
            <h2 className="display-l mt-p1 max-w-[11ch]">Six ways people use us</h2>
          </Reveal>
          <Reveal delay={80} className="max-w-[46ch]">
            <p className="body-default text-grey-500">
              Same fleet, different jobs. Each one has its own rules on timing,
              deposits and what is included — so nothing is left to assumption on
              the day.
            </p>
          </Reveal>
        </div>

        <ul className="mt-p5 grid gap-p2 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.id} delay={(i % 3) * 90} className="h-full">
              <a
                href={waLink(
                  `Assalam o Alaikum ${site.name} Rent A Car — I'm interested in your ${s.title} service. Can you share details and rates?`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-large border border-white/12 bg-white/[0.04] p-p3 transition-all duration-500 ease-out-soft hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="display-s max-w-[12ch] text-[1.875rem]">
                    {s.title}
                  </h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-circle border border-white/15 text-paper transition-all duration-500 ease-out-soft group-hover:border-brand group-hover:bg-brand">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <p className="body-default mt-p2 text-grey-500">{s.blurb}</p>

                <ul className="mt-p2 flex flex-col gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="label-ui flex items-start gap-2 text-paper/80">
                      <Check className="mt-px h-4 w-4 shrink-0 text-brand" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-p3">
                  <div className="flex items-baseline gap-2 border-t border-white/10 pt-p2">
                    <span className="label-eyebrow text-grey-500">From</span>
                    <span className="display-s text-[1.5rem] text-brand">
                      Rs {s.from.toLocaleString("en-PK")}
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
