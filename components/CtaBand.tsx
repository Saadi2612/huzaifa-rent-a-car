import Reveal from "./Reveal";
import { site, waLink } from "@/lib/site";
import { ArrowUpRight, Phone, Whatsapp } from "./icons";

export default function CtaBand() {
  return (
    <section className="pb-p8 md:pb-p12" aria-label="Book now">
      <div className="shell">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-large bg-brand px-p3 py-p6 text-paper shadow-lift-lg md:px-p6 md:py-p10"
            style={{ borderRadius: "var(--radius-large)" }}
          >
            {/* Depth wash */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(700px 340px at 88% 10%, rgba(255,255,255,.22), transparent 60%), radial-gradient(500px 300px at 5% 95%, rgba(0,0,0,.22), transparent 60%)",
              }}
            />

            <div className="relative flex flex-col items-start justify-between gap-p4 lg:flex-row lg:items-end">
              <div>
                <p className="label-eyebrow text-paper/70">Ready when you are</p>
                <h2 className="display-l mt-p2 max-w-[14ch]">
                  Book a car in under two minutes
                </h2>
                <p className="body-default mt-p2 max-w-[48ch] text-paper/80">
                  Send us the dates on WhatsApp and get a written quote back — car,
                  rate, fuel policy, driver allowance, all of it. {site.hours}.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={waLink(
                    `Assalam o Alaikum ${site.name} Rent A Car — I'd like to book a car. Here are my dates:`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-ui group flex items-center justify-center gap-2 rounded-pill bg-paper px-7 py-4 text-ink shadow-lift transition-all duration-400 ease-out-soft hover:-translate-y-0.5 hover:shadow-lift-hover"
                >
                  <Whatsapp className="h-4 w-4 text-brand" />
                  WhatsApp us
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="label-ui flex items-center justify-center gap-2 rounded-pill border border-paper/35 px-7 py-4 text-paper transition-all duration-400 ease-out-soft hover:-translate-y-0.5 hover:border-paper hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
