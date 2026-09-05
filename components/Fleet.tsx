"use client";

import { useMemo, useState } from "react";
import Photo from "./Photo";
import Reveal from "./Reveal";
import {
  CATEGORIES,
  FLEET,
  site,
  waLink,
  type Car,
  type RentalMode,
} from "@/lib/site";
import { ArrowUpRight, Bag, Fuel, Gear, Seat, Whatsapp } from "./icons";

const money = (n: number) => `Rs ${n.toLocaleString("en-PK")}`;

export default function Fleet({
  manifest,
}: {
  manifest: Record<string, boolean>;
}) {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  // Without-driver is the default: those are the rates we actually publish.
  const [mode, setMode] = useState<RentalMode>("self-drive");

  const cars = useMemo(
    () => (cat === "All" ? FLEET : FLEET.filter((c) => c.category === cat)),
    [cat],
  );

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
              Rates are per day and exclude fuel. In-city rates are fixed;
              out-of-city starts at the price shown and depends on the route.
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
                  ["self-drive", "Without driver"],
                  ["with-driver", "With driver"],
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
        <ul className="mt-p4 grid gap-p2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {cars.map((car, i) => (
            <Reveal as="li" key={car.id} delay={(i % 3) * 90} className="h-full">
              <CarCard
                car={car}
                mode={mode}
                photoExists={Boolean(manifest[car.image])}
              />
            </Reveal>
          ))}
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

/* -------------------------------------------------------------------------- */
/* Card                                                                        */
/* -------------------------------------------------------------------------- */

type Trip = "in-city" | "out-city";

/**
 * One car. Owns its own trip selection so the card can say exactly which rate
 * the customer is looking at, and carry that into the WhatsApp message —
 * otherwise the enquiry arrives with no way to tell which of the two prices
 * was on screen.
 */
function CarCard({
  car,
  mode,
  photoExists,
}: {
  car: Car;
  mode: RentalMode;
  photoExists: boolean;
}) {
  const [trip, setTrip] = useState<Trip>("in-city");

  // "from" cars are quoted the same either way — we never split them by driver
  // or by trip. "city" cars only have without-driver rates on the sheet, so
  // with a driver we send people to WhatsApp for a quote.
  const splitByTrip = car.rate.kind === "city";
  const askForRate = splitByTrip && mode === "with-driver";
  const outCity = splitByTrip && trip === "out-city";

  const driverLabel = mode === "with-driver" ? "With driver" : "Without driver";

  /** Exactly what the customer is being shown, in words. */
  const shownRate = askForRate
    ? "To be quoted"
    : car.rate.kind === "from"
      ? `from ${money(car.rate.startingFrom)} /day (starting price)`
      : outCity
        ? `from ${money(car.rate.outCity)} /day (starting price)`
        : `${money(car.rate.inCity)} /day (fixed)`;

  const message = [
    `Assalam o Alaikum ${site.name} Rent A Car,`,
    "",
    `I'd like to book the ${car.name}.`,
    "",
    // "from" cars are never advertised with a driver split, so the enquiry
    // does not claim one either.
    ...(splitByTrip
      ? [
          `• Rental type: ${driverLabel}`,
          `• Trip: ${outCity ? "Out of city" : "In city"}`,
        ]
      : []),
    `• Rate shown on your site: ${shownRate}`,
    "• Dates:",
    "",
    "Please confirm availability and the final rate.",
  ].join("\n");

  return (
    <article className="float-card float-hover group flex h-full flex-col overflow-hidden">
      {/* Photo */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-grey-200">
        <Photo
          src={car.image}
          exists={photoExists}
          alt={`${car.name} available for rent from ${site.name} Rent A Car`}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, (max-width: 1536px) 30vw, 23vw"
          className="transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
        />
        <span className="label-ui absolute top-4 left-4 rounded-pill bg-paper/85 px-3 py-1.5 text-ink shadow-lift-sm backdrop-blur">
          {car.category}
        </span>
        {car.featured && (
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

        <ul className="mt-p1 flex flex-wrap gap-x-3 gap-y-1.5 text-grey-600">
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

        <div className="mt-p2 mb-p2 flex flex-wrap gap-1.5">
          {car.tags.map((t) => (
            <span
              key={t}
              className="label-ui rounded-chip bg-brand-tint px-2.5 py-1 text-brand"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Rate + CTA, separated by a hairline. The trip switch drives the
            figure, the note under it and the WhatsApp message together, so the
            enquiry always names the rate that was on screen. */}
        <div className="mt-auto border-t border-grey-200 pt-p2">
          {splitByTrip ? (
            <div
              role="group"
              aria-label={`Trip type for the ${car.name}`}
              className="flex w-max items-center gap-1 rounded-pill bg-grey-100 p-1"
            >
              {(
                [
                  ["in-city", "In city"],
                  ["out-city", "Out of city"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setTrip(value)}
                  aria-pressed={trip === value}
                  className={`label-ui flex min-h-9 items-center rounded-pill px-3 py-1.5 whitespace-nowrap transition-all duration-400 ease-out-soft sm:min-h-0 ${
                    trip === value
                      ? "bg-paper text-ink shadow-lift-sm"
                      : "text-grey-500 hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          ) : (
            <p className="label-eyebrow text-grey-500">Starting from</p>
          )}

          <div className="mt-p1 flex flex-col items-stretch gap-3 sm:flex-row sm:items-end sm:justify-between">
            {/* "On request" is not a price, so it is not typeset as one —
                the display face is reserved for figures. */}
            <p
              className={
                askForRate
                  ? "min-w-0 text-[1.0625rem] leading-snug font-medium whitespace-nowrap text-ink"
                  : "display-s min-w-0 text-[1.625rem] text-ink"
              }
            >
              {askForRate ? (
                "On request"
              ) : (
                <>
                  {money(
                    car.rate.kind === "from"
                      ? car.rate.startingFrom
                      : outCity
                        ? car.rate.outCity
                        : car.rate.inCity,
                  )}
                  <span className="label-ui text-grey-500 normal-case"> /day</span>
                </>
              )}
            </p>

            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${askForRate ? "Get a quote for" : "Book"} the ${car.name} on WhatsApp`}
              className="label-ui flex min-h-11 w-full shrink-0 items-center justify-center gap-1.5 rounded-pill bg-ink px-4 py-2.5 text-paper transition-all duration-400 ease-out-soft hover:bg-brand hover:shadow-lift-brand sm:min-h-0 sm:w-auto"
            >
              <Whatsapp className="h-4 w-4" />
              {askForRate ? "Get a quote" : "Book"}
            </a>
          </div>

          <p className="label-ui mt-p1 text-grey-500">
            {askForRate
              ? "Send your dates — quoted in ~15 min"
              : car.rate.kind === "from"
                ? "Starting price, varies by route"
                : outCity
                  ? "Starting price, varies by route"
                  : "Fixed daily rate, without driver"}
          </p>
        </div>
      </div>
    </article>
  );
}
