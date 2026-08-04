import BookingBar from "./BookingBar";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { site, waLink } from "@/lib/site";
import { photoExists } from "@/lib/photos";
import { ArrowRight, Pin, Shield, Star } from "./icons";

const HERO_IMAGE = "/cars/hero.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40 lg:pt-44">
      {/* Ambient wash — keeps the page breathable without adding weight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[820px]"
        style={{
          background:
            "radial-gradient(1100px 520px at 78% 8%, rgba(44,88,255,.13), transparent 62%), radial-gradient(760px 420px at 8% 22%, rgba(44,88,255,.06), transparent 60%)",
        }}
      />

      <div className="shell">
        <div className="grid items-center gap-p5 lg:grid-cols-12 lg:gap-p3">
          {/* Copy */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-pill border border-grey-200 bg-paper/70 px-4 py-2 shadow-lift-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-circle bg-brand opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-circle bg-brand" />
                </span>
                <span className="label-ui text-grey-600">
                  Booking open · {site.hours}
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display-xl mt-p2 text-ink">
                Cars that
                <br />
                show up
                <br />
                <span className="text-brand">on time.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="subheading mt-p2 max-w-[46ch] text-grey-600">
                With-driver and self-drive rentals across Pakistan. Verified drivers,
                serviced cars, and a written quote before you pay a rupee.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-p3 flex flex-wrap items-center gap-3">
                <a
                  href="#fleet"
                  className="label-ui group flex items-center gap-2 rounded-pill bg-ink px-7 py-4 text-paper shadow-lift transition-all duration-400 ease-out-soft hover:-translate-y-0.5 hover:shadow-lift-hover"
                >
                  See the fleet
                  <ArrowRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-1" />
                </a>
                <a
                  href={waLink(
                    `Assalam o Alaikum ${site.name} Rent A Car — I need a car. Can you share availability and rates?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-ui rounded-pill border border-grey-200 bg-paper px-7 py-4 text-ink shadow-lift-sm transition-all duration-400 ease-out-soft hover:-translate-y-0.5 hover:border-ink"
                >
                  Talk to us on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-p4 flex flex-wrap items-center gap-x-p3 gap-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5 text-brand">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <span className="label-ui text-grey-600">
                    4.9 from 600+ reviews
                  </span>
                </div>
                <div className="flex items-center gap-2 text-grey-600">
                  <Shield className="h-4 w-4 text-brand" />
                  <span className="label-ui">Police-verified drivers</span>
                </div>
                <div className="flex items-center gap-2 text-grey-600">
                  <Pin className="h-4 w-4 text-brand" />
                  <span className="label-ui">Free city delivery</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Floating visual */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal delay={200}>
              <div className="relative mx-auto max-w-[620px] lg:mr-0 lg:ml-auto">
                <div className="bob">
                  <div className="float-card relative aspect-[4/3] overflow-hidden rounded-large shadow-lift-lg">
                    <Photo
                      src={HERO_IMAGE}
                      exists={photoExists(HERO_IMAGE)}
                      alt="A car from the Huzaifa Rent A Car fleet"
                      priority
                      sizes="(max-width: 1024px) 92vw, 620px"
                    />
                  </div>
                </div>

                {/* Floating stat chip — top left */}
                <div className="absolute -top-4 -left-2 rounded-card border border-grey-200 bg-paper/90 px-p2 py-3 shadow-lift backdrop-blur-md sm:-left-8">
                  <p className="display-s text-[1.75rem] text-ink">40+</p>
                  <p className="label-ui text-grey-500">cars in fleet</p>
                </div>

                {/* Floating price chip — bottom right */}
                <div className="absolute -right-2 -bottom-5 rounded-card border border-grey-200 bg-ink px-p2 py-3 shadow-lift-lg sm:-right-6">
                  <p className="label-eyebrow text-grey-500">Starting from</p>
                  <p className="display-s mt-1 text-[1.75rem] text-paper">
                    Rs 4,500<span className="label-ui text-grey-500"> /day</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Booking bar — floats over the fold line */}
        <Reveal delay={360}>
          <div className="mt-p6 lg:mt-p8">
            <BookingBar />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
