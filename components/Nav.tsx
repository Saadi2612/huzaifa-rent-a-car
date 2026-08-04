"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, site, waLink } from "@/lib/site";
import { Close, Menu, Whatsapp } from "./icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-5">
      <div className="shell">
        {/* Floating pill */}
        <nav
          aria-label="Primary"
          className={`flex items-center justify-between gap-p2 rounded-nav border px-2 py-2 pl-5 transition-all duration-500 ease-out-soft ${
            scrolled
              ? "border-grey-200 bg-paper/80 shadow-lift backdrop-blur-xl"
              : "border-transparent bg-paper/55 shadow-lift-sm backdrop-blur-lg"
          }`}
        >
          <a
            href="#top"
            className="group flex shrink-0 items-baseline gap-2"
            aria-label={`${site.fullName} — home`}
          >
            <span className="display-s text-[1.375rem] leading-none md:text-[1.5rem]">
              {site.name}
            </span>
            <span className="hidden h-[6px] w-[6px] shrink-0 translate-y-[-3px] rounded-circle bg-brand sm:block" />
            <span className="label-eyebrow hidden text-grey-500 sm:block">
              {site.tagline}
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="label-ui block rounded-pill px-4 py-2.5 text-grey-600 transition-colors duration-300 hover:bg-grey-100 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phoneHref}`}
              className="label-ui hidden rounded-pill border border-grey-200 bg-paper px-5 py-3 text-ink transition-all duration-300 hover:border-ink md:block"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={waLink(
                `Assalam o Alaikum ${site.name} Rent A Car — I'd like to enquire about a booking.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="label-ui flex items-center gap-2 rounded-pill bg-brand px-5 py-3 text-paper shadow-lift-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-hover"
            >
              <Whatsapp className="h-4 w-4" />
              <span className="hidden sm:inline">Book Now</span>
              <span className="sm:hidden">Book</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-circle border border-grey-200 bg-paper text-ink transition-colors duration-300 hover:bg-grey-100 lg:hidden"
            >
              {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile sheet — floats below the pill */}
        <div
          className={`origin-top overflow-hidden transition-all duration-500 ease-out-soft lg:hidden ${
            open ? "mt-3 max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="float-card p-p2">
            <ul className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <li key={l.href} className="border-b border-grey-200 last:border-0">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="display-s block py-4 text-[1.75rem] text-ink transition-colors duration-300 hover:text-brand"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`tel:${site.phoneHref}`}
              className="label-ui mt-p2 block rounded-pill bg-ink px-5 py-4 text-center text-paper"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
