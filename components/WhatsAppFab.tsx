"use client";

import { useEffect, useState } from "react";
import { site, waLink } from "@/lib/site";
import { Whatsapp } from "./icons";

/** Floating WhatsApp button — appears once the hero is scrolled past. */
export default function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink(
        `Assalam o Alaikum ${site.name} Rent A Car — I'd like to book a car.`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className={`group fixed right-4 bottom-4 z-40 flex items-center gap-2.5 rounded-pill bg-brand py-4 pr-6 pl-5 text-paper shadow-lift-brand transition-all duration-500 ease-out-soft hover:-translate-y-1 hover:bg-brand-hover md:right-6 md:bottom-6 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <Whatsapp className="h-5 w-5" />
      <span className="label-ui hidden sm:inline">Book on WhatsApp</span>
    </a>
  );
}
