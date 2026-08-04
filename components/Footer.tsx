import { NAV_LINKS, SERVICES, site, waLink } from "@/lib/site";
import { Clock, Pin, Phone, Whatsapp } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    // Extra bottom padding keeps the floating WhatsApp button off the fine print.
    <footer className="bg-ink pt-p8 pb-p7 text-paper">
      <div className="shell">
        {/* Wordmark */}
        <div className="border-b border-white/10 pb-p5">
          <h2 className="display-xl leading-[0.85] text-paper">
            {site.name}
            <span className="text-brand">.</span>
          </h2>
          <p className="subheading mt-p2 max-w-[38ch] text-grey-500">
            Rent a car with a driver, or drive it yourself. Across Pakistan, since
            2013.
          </p>
        </div>

        {/* Columns */}
        <div className="grid gap-p4 py-p5 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="label-eyebrow text-grey-500">Contact</p>
            <ul className="mt-p2 flex flex-col gap-3">
              <li>
                <a
                  href={waLink(
                    `Assalam o Alaikum ${site.name} Rent A Car — I'd like to book a car.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-ui flex items-center gap-2 text-paper transition-colors duration-300 hover:text-brand"
                >
                  <Whatsapp className="h-4 w-4 text-brand" />
                  WhatsApp booking
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="label-ui flex items-center gap-2 text-paper transition-colors duration-300 hover:text-brand"
                >
                  <Phone className="h-4 w-4 text-brand" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="label-ui flex items-start gap-2 text-grey-500">
                <Pin className="mt-px h-4 w-4 shrink-0 text-brand" />
                {site.address}
              </li>
              <li className="label-ui flex items-start gap-2 text-grey-500">
                <Clock className="mt-px h-4 w-4 shrink-0 text-brand" />
                {site.hours}
              </li>
            </ul>
          </div>

          <div>
            <p className="label-eyebrow text-grey-500">Explore</p>
            <ul className="mt-p2 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="label-ui text-paper transition-colors duration-300 hover:text-brand"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-eyebrow text-grey-500">Services</p>
            <ul className="mt-p2 flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="label-ui text-paper transition-colors duration-300 hover:text-brand"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-eyebrow text-grey-500">Cities</p>
            <ul className="mt-p2 flex flex-wrap gap-2">
              {site.cities.map((c) => (
                <li
                  key={c}
                  className="label-ui rounded-pill border border-white/15 px-3 py-2 text-grey-500"
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="body-default mt-p2 max-w-[30ch] text-grey-500">
              Intercity trips run anywhere in Pakistan, including AJK and
              Gilgit-Baltistan.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-p2 md:flex-row md:items-center md:justify-between">
          <p className="mono-small text-grey-500">
            © {year} {site.fullName}. All rights reserved.
          </p>
          <p className="mono-small text-grey-500">
            Rates exclude fuel · Quoted in PKR
          </p>
        </div>
      </div>
    </footer>
  );
}
