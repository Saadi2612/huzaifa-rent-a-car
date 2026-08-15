"use client";

import { useMemo, useState } from "react";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { CATEGORIES, FLEET, site, waLink, type RentalMode } from "@/lib/site";
import { ArrowUpRight, Bag, Fuel, Gear, Seat, Whatsapp } from "./icons";

const money = (n: number) => `Rs ${n.toLocaleString("en-PK")}`;

export default function Fleet({
  manifest,
}: {
  manifest: Record<string, boolean>;
}) {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [mode, setMode] = useState<RentalMode>("with-driver");

  const cars = useMemo(() => {
    const byCat = cat === "All" ? FLEET : FLEET.filter((c) => c.category === cat);
    return mode === "self-drive"
      ? [...byCat].sort((a, b) => Number(!a.rate.selfDrive) - Number(!b.rate.selfDrive))
      : byCat;
  }, [cat, mode]);

  return (
    <section id="fleet" className="scroll-mt-28 py-p8 md:py-p12">
      <div className="shell">
        {/* Header */}
        <div className="flex flex-col justify-between gap-p3 lg:flex-row lg:items-end">
          <Reveal>
            <p className="label-eyebrow text-brand">The fleet</p>
            <h2 className="display-l mt-p1 max-w-[9ch] text-ink">Pick your car</h2>
          </Reveal>
          <Reveal delay={80} className="max-w-[46ch]">
            <p className="body-default text-grey-600">
              Every car is serviced every 5,000 km and photographed before handover.
              Rates below are per day, excluding fuel. Longer bookings get a better
              rate — ask us.
            </p>
          </Reveal>
        </div>

        {/* Controls */}
        <Reveal delay={120}>
          <div className="mt-p4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="no-bar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  aria-pressed={cat === c}
                  className={`label-ui shrink-0 rounded-pill border px-5 py-3 transition-all duration-400 ease-out-soft ${
                    cat === c
                      ? "border-transparent bg-ink text-paper shadow-lift"
                      : "border-grey-200 bg-paper text-grey-600 hover:-translate-y-0.5 hover:border-ink hover:text-ink"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex w-max items-center gap-1 rounded-pill bg-grey-100 p-1">
              {(
                [
                  ["with-driver", "With driver"],
                  ["self-drive", "Self drive"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setMode(value)}
                  aria-pressed={mode === value}
                  className={`label-ui rounded-pill px-5 py-2.5 whitespace-nowrap transition-all duration-400 ease-out-soft ${
                    mode === value
                      ? "bg-paper text-ink shadow-lift-sm"
                      : "text-grey-600 hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Grid */}
        <ul className="mt-p4 grid gap-p2 sm:grid-cols-2 xl:grid-cols-3">
          {cars.map((car, i) => {
            const rate =
              mode === "with-driver" ? car.rate.withDriver : car.rate.selfDrive;
            const unavailable = rate === null;

            return (
              <Reveal
                as="li"
                key={car.id}
                delay={(i % 3) * 90}
                className="h-full"
              >
                <article
                  className={`float-card float-hover group flex h-full flex-col overflow-hidden ${
                    unavailable ? "opacity-70" : ""
                  }`}
                >
                  {/* Photo */}
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-grey-200">
                    <Photo
                      src={car.image}
                      exists={Boolean(manifest[car.image])}
                      alt={`${car.name} available for rent from ${site.name} Rent A Car`}
                      sizes="(max-width: 640px) 92vw, (max-width: 1280px) 46vw, 30vw"
                      className="transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
                    />
                    <span className="label-ui absolute top-4 left-4 rounded-pill bg-paper/85 px-3 py-1.5 text-ink shadow-lift-sm backdrop-blur">
                      {car.category}
                    </span>
                    {car.featured && !unavailable && (
                      <span className="label-ui absolute top-4 right-4 rounded-pill bg-brand px-3 py-1.5 text-paper shadow-lift-brand">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-p2">
                    <h3 className="display-s text-[1.625rem] text-ink">{car.name}</h3>
                    <p className="label-ui mt-0.5 text-grey-500">
                      {car.year} · {car.color}
                    </p>

                    <ul className="mt-p1 flex flex-wrap gap-x-p2 gap-y-2 text-grey-600">
                      <li className="label-ui flex items-center gap-1.5">
                        <Seat className="h-4 w-4 text-grey-500" />
                        {car.seats} seats
                      </li>
                      <li className="label-ui flex items-center gap-1.5">
                        <Bag className="h-4 w-4 text-grey-500" />
                        {car.luggage} bags
                      </li>
                      <li className="label-ui flex items-center gap-1.5">
                        <Gear className="h-4 w-4 text-grey-500" />
                        {car.transmission}
                      </li>
                      <li className="label-ui flex items-center gap-1.5">
                        <Fuel className="h-4 w-4 text-grey-500" />
                        {car.fuel}
                      </li>
                    </ul>

                    <div className="mt-p2 flex flex-wrap gap-1.5">
                      {car.tags.map((t) => (
                        <span
                          key={t}
                          className="label-ui rounded-chip bg-brand-tint px-2.5 py-1 text-brand"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-end justify-between gap-3 pt-p3">
                      <div>
                        <p className="label-eyebrow text-grey-500">
                          {mode === "with-driver" ? "With driver" : "Self drive"}
                        </p>
                        {unavailable ? (
                          <p className="body-default mt-1 max-w-[16ch] text-grey-500">
                            With driver only
                          </p>
                        ) : (
                          <p className="display-s mt-1 text-[1.75rem] text-ink">
                            {money(rate!)}
                            <span className="label-ui text-grey-500"> /day</span>
                          </p>
                        )}
                      </div>

                      <a
                        href={waLink(
                          `Assalam o Alaikum ${site.name} Rent A Car,\n\nI'd like to book the ${car.name} (${mode === "with-driver" ? "with driver" : "self drive"}).\n\nPlease confirm availability and the total rate.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Book the ${car.name} on WhatsApp`}
                        className="label-ui flex shrink-0 items-center gap-1.5 rounded-pill bg-ink px-5 py-3 text-paper transition-all duration-400 ease-out-soft hover:bg-brand hover:shadow-lift-brand"
                      >
                        <Whatsapp className="h-4 w-4" />
                        Book
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>

        {/* Footnote CTA */}
        <Reveal delay={100}>
          <div className="float-card mt-p4 flex flex-col items-start justify-between gap-p2 rounded-large bg-grey-100 p-p3 shadow-none sm:flex-row sm:items-center">
            <div>
              <h3 className="display-s text-[1.75rem] text-ink">
                Not seeing what you need?
              </h3>
              <p className="body-default mt-1 max-w-[52ch] text-grey-600">
                We source cars outside the listed fleet — V8, Coaster, Hiace and more.
                Tell us the car and the dates.
              </p>
            </div>
            <a
              href={waLink(
                `Assalam o Alaikum ${site.name} Rent A Car — I'm looking for a car that isn't listed on your site. Can you help?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="label-ui group flex shrink-0 items-center gap-2 rounded-pill bg-brand px-6 py-4 text-paper shadow-lift-brand transition-all duration-400 ease-out-soft hover:-translate-y-0.5 hover:bg-brand-hover"
            >
              Request a car
              <ArrowUpRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
