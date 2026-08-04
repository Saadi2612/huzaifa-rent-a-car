import Reveal from "./Reveal";
import { FAQS, site, waLink } from "@/lib/site";
import { Plus, Whatsapp } from "./icons";

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="scroll-mt-28 py-p8 md:py-p12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="shell">
        <div className="grid gap-p5 lg:grid-cols-12 lg:gap-p3">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="label-eyebrow text-brand">FAQ</p>
                <h2 className="display-l mt-p1 max-w-[10ch] text-ink">
                  Asked and answered
                </h2>
                <p className="body-default mt-p2 max-w-[36ch] text-grey-600">
                  The things people ask before they book. If yours is not here, ask
                  us directly — we answer within minutes.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <a
                  href={waLink(
                    `Assalam o Alaikum ${site.name} Rent A Car — I have a question before booking.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-ui mt-p3 flex w-max items-center gap-2 rounded-pill border border-grey-200 bg-paper px-6 py-4 text-ink shadow-lift-sm transition-all duration-400 ease-out-soft hover:-translate-y-0.5 hover:border-ink"
                >
                  <Whatsapp className="h-4 w-4 text-brand" />
                  Ask a question
                </a>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ul className="flex flex-col gap-3">
              {FAQS.map((f, i) => (
                <Reveal as="li" key={f.q} delay={Math.min(i, 4) * 60}>
                  <details className="group float-card overflow-hidden open:shadow-lift-lg">
                    <summary className="label-ui flex cursor-pointer list-none items-center justify-between gap-p2 p-p3 text-ink transition-colors duration-300 hover:text-brand [&::-webkit-details-marker]:hidden">
                      <span className="display-s text-[1.25rem] md:text-[1.5rem]">
                        {f.q}
                      </span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-circle border border-grey-200 text-ink transition-all duration-500 ease-out-soft group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-paper">
                        <Plus className="h-4 w-4" />
                      </span>
                    </summary>
                    <p className="body-default px-p3 pb-p3 max-w-[70ch] text-grey-600">
                      {f.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
