import Reveal from "./Reveal";
import { STEPS, site, waLink } from "@/lib/site";
import { ArrowRight } from "./icons";

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-28 bg-brand-tint py-p8 md:py-p12">
      <div className="shell">
        <div className="flex flex-col justify-between gap-p3 lg:flex-row lg:items-end">
          <Reveal>
            <p className="label-eyebrow text-brand">How it works</p>
            <h2 className="display-l mt-p1 max-w-[17ch] text-ink">
              Four steps, no runaround
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={waLink(
                `Assalam o Alaikum ${site.name} Rent A Car — I'd like to start a booking.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="label-ui group flex w-max items-center gap-2 rounded-pill bg-ink px-7 py-4 text-paper shadow-lift transition-all duration-400 ease-out-soft hover:-translate-y-0.5 hover:shadow-lift-hover"
            >
              Start a booking
              <ArrowRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <ol className="mt-p5 grid gap-p2 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90} className="h-full">
              <div className="float-card float-hover flex h-full flex-col p-p3">
                <div className="flex items-center justify-between">
                  <span className="mono-small rounded-chip bg-grey-100 px-2 py-1 text-grey-500">
                    Step {s.n}
                  </span>
                  <span className="h-2 w-2 rounded-circle bg-brand" />
                </div>
                <h3 className="display-s mt-p3 text-[1.625rem] text-ink">
                  {s.title}
                </h3>
                <p className="body-default mt-2 text-grey-600">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <p className="label-ui mt-p3 text-grey-600">
            Self-drive adds one step: CNIC and licence verification, done once. After
            that your repeat bookings are instant.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
