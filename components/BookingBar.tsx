"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, site, waLink, type RentalMode } from "@/lib/site";
import { ArrowUpRight, Whatsapp } from "./icons";

const today = () => new Date().toISOString().slice(0, 10);

const fieldBase =
  "w-full appearance-none bg-transparent label-ui text-ink outline-none placeholder:text-grey-500";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="group flex min-w-0 flex-1 cursor-pointer flex-col gap-1.5 rounded-control px-4 py-3 transition-colors duration-300 hover:bg-grey-100">
      <span className="label-eyebrow text-grey-500 transition-colors group-hover:text-brand">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function BookingBar() {
  const [mode, setMode] = useState<RentalMode>("with-driver");
  const [city, setCity] = useState<string>(site.cities[0]);
  const [category, setCategory] = useState<string>("Sedan");
  const [pickup, setPickup] = useState<string>(today());
  const [days, setDays] = useState<string>("3");

  const message = useMemo(() => {
    const modeLabel = mode === "with-driver" ? "With Driver" : "Self Drive";
    return [
      `Assalam o Alaikum ${site.name} Rent A Car,`,
      "",
      "I'd like a quote for the following:",
      `• Rental type: ${modeLabel}`,
      `• City: ${city}`,
      `• Car type: ${category}`,
      `• Pickup date: ${pickup}`,
      `• Duration: ${days} day(s)`,
      "",
      "Please share the full rate breakdown. Thank you.",
    ].join("\n");
  }, [mode, city, category, pickup, days]);

  return (
    <div className="float-card overflow-hidden p-p1 shadow-lift-lg">
      {/* Mode toggle */}
      <div className="flex items-center gap-1 rounded-pill bg-grey-100 p-1 sm:w-max">
        {(
          [
            ["with-driver", "With Driver"],
            ["self-drive", "Self Drive"],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setMode(value)}
            aria-pressed={mode === value}
            className={`label-ui flex-1 rounded-pill px-6 py-2.5 whitespace-nowrap transition-all duration-400 ease-out-soft sm:flex-none ${
              mode === value
                ? "bg-ink text-paper shadow-lift-sm"
                : "text-grey-600 hover:text-ink"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Fields */}
      <div className="mt-p1 flex flex-col gap-1 lg:flex-row lg:items-stretch lg:gap-0">
        <Field label="Pick-up city">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={fieldBase}
          >
            {site.cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </Field>

        <div className="hidden w-px shrink-0 self-stretch bg-grey-200 lg:block" />

        <Field label="Car type">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={fieldBase}
          >
            {CATEGORIES.filter((c) => c !== "All").map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </Field>

        <div className="hidden w-px shrink-0 self-stretch bg-grey-200 lg:block" />

        <Field label="Pick-up date">
          <input
            type="date"
            value={pickup}
            min={today()}
            onChange={(e) => setPickup(e.target.value)}
            className={fieldBase}
          />
        </Field>

        <div className="hidden w-px shrink-0 self-stretch bg-grey-200 lg:block" />

        <Field label="Duration">
          <select
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className={fieldBase}
          >
            {["1", "2", "3", "5", "7", "15", "30"].map((d) => (
              <option key={d} value={d}>
                {d} {d === "1" ? "day" : "days"}
              </option>
            ))}
          </select>
        </Field>

        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="label-ui group mt-1 flex items-center justify-center gap-2 rounded-pill bg-brand px-7 py-4 text-paper shadow-lift-brand transition-all duration-400 ease-out-soft hover:-translate-y-0.5 hover:bg-brand-hover lg:mt-0 lg:ml-2 lg:shrink-0"
        >
          <Whatsapp className="h-4 w-4" />
          Get quote
          <ArrowUpRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <p className="label-ui px-4 pt-2 pb-1 text-grey-500">
        Opens WhatsApp with your details filled in. Written quote back in ~15 minutes.
      </p>
    </div>
  );
}
