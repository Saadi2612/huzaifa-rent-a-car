import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Fleet from "@/components/Fleet";
import Services from "@/components/Services";
import Why from "@/components/Why";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { FLEET, site } from "@/lib/site";
import { photoManifest } from "@/lib/photos";

export default function Home() {
  // Resolved on the server so the client fleet grid knows which photos are real.
  const manifest = photoManifest(FLEET.map((c) => c.image));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: site.fullName,
    description:
      "Car rental in Pakistan with verified drivers or self drive. Airport transfers, weddings, corporate contracts and northern tours.",
    telephone: site.phoneHref,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressCountry: "PK",
    },
    areaServed: site.cities.map((c) => ({ "@type": "City", name: c })),
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "PKR 4,500 – 45,000 per day",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "600",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Fleet manifest={manifest} />
        <Services />
        <Why />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
