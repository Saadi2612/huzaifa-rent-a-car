/**
 * Single source of truth for everything the client will realistically want to
 * change. Swap these values and the whole site updates — no component edits.
 *
 * ⚠️ PLACEHOLDERS: phone, whatsapp, email, address and all prices are dummy
 * values. Replace before going live.
 */

export const site = {
  name: "Huzaifa",
  fullName: "Huzaifa — Rent A Car",
  tagline: "Rent A Car",

  /* ⚠️ PLACEHOLDER — international format, digits only, no + or spaces */
  whatsapp: "923000000000",
  /* ⚠️ PLACEHOLDER */
  phoneDisplay: "+92 300 000 0000",
  phoneHref: "+923000000000",
  /* ⚠️ PLACEHOLDER */
  email: "booking@huzaifarentacar.pk",
  /* ⚠️ PLACEHOLDER */
  address: "Main Boulevard, Gulberg III, Lahore, Pakistan",
  hours: "Open 24/7 — including Eid & public holidays",

  cities: ["Lahore", "Islamabad", "Rawalpindi", "Karachi", "Faisalabad", "Multan"],
} as const;

/** Builds a wa.me deep link with a prefilled message. */
export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Fleet", href: "#fleet" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "How It Works", href: "#how" },
  { label: "FAQ", href: "#faq" },
] as const;

/* -------------------------------------------------------------------------- */
/* Fleet                                                                       */
/* -------------------------------------------------------------------------- */

export type RentalMode = "with-driver" | "self-drive";

export type Car = {
  id: string;
  name: string;
  /** Model year — "–" when not known for this unit. */
  year: string;
  color: string;
  category: "Economy" | "Sedan" | "SUV" | "Executive";
  seats: number;
  luggage: number;
  transmission: "Automatic" | "Manual";
  fuel: string;
  /** Rates in PKR per day. ⚠️ PLACEHOLDER pricing. */
  rate: { withDriver: number; selfDrive: number | null };
  tags: string[];
  /** Drop a real photo at this path — see /public/cars/README.md */
  image: string;
  featured?: boolean;
};

export const FLEET: Car[] = [
  {
    id: "alto-white",
    name: "Suzuki Alto",
    year: "–",
    color: "White",
    category: "Economy",
    seats: 4,
    luggage: 2,
    transmission: "Automatic",
    fuel: "Petrol · AGS",
    rate: { withDriver: 6500, selfDrive: 4500 },
    tags: ["Best for city runs", "Lowest fuel cost"],
    image: "/cars/alto-white/main.jpeg",
  },
  {
    id: "wagon-r-white",
    name: "Suzuki Wagon R",
    year: "–",
    color: "White",
    category: "Economy",
    seats: 5,
    luggage: 2,
    transmission: "Automatic",
    fuel: "Petrol · AGS",
    rate: { withDriver: 7000, selfDrive: 5000 },
    tags: ["Daily commute", "Tall & roomy"],
    image: "/cars/wagon-r-white/main.jpeg",
  },
  {
    id: "corolla-white",
    name: "Toyota Corolla",
    year: "–",
    color: "White",
    category: "Sedan",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    fuel: "Petrol",
    rate: { withDriver: 10500, selfDrive: 8000 },
    tags: ["Most booked", "Airport favourite"],
    image: "/cars/corolla-white/main.jpeg",
    featured: true,
  },
  {
    id: "corolla-silver",
    name: "Toyota Corolla",
    year: "–",
    color: "Silver",
    category: "Sedan",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    fuel: "Petrol",
    rate: { withDriver: 10500, selfDrive: 8000 },
    tags: ["Airport favourite"],
    image: "/cars/corolla-silver/main.jpeg",
  },
  {
    id: "corolla-cross",
    name: "Toyota Corolla Cross",
    year: "–",
    color: "–",
    category: "SUV",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    fuel: "Petrol · Hybrid",
    rate: { withDriver: 17500, selfDrive: 13500 },
    tags: ["Crossover comfort"],
    image: "/cars/corolla-cross/main.jpeg",
  },
  {
    id: "hona-city-2024-white",
    name: "Honda City",
    year: "2024",
    color: "White",
    category: "Sedan",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    fuel: "Petrol · CVT",
    rate: { withDriver: 10500, selfDrive: 8000 },
    tags: ["Newer unit", "City runs"],
    image: "/cars/hona-city-2024-white/main.jpeg",
  },
  {
    id: "yaris-white",
    name: "Toyota Yaris",
    year: "–",
    color: "White",
    category: "Sedan",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    fuel: "Petrol",
    rate: { withDriver: 10000, selfDrive: 7500 },
    tags: ["Fuel efficient"],
    image: "/cars/yaris-white/main.jpeg",
  },
  {
    id: "yaris-2026-white",
    name: "Toyota Yaris",
    year: "2026",
    color: "White",
    category: "Sedan",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    fuel: "Petrol",
    rate: { withDriver: 11000, selfDrive: 8500 },
    tags: ["Newer unit", "Fuel efficient"],
    image: "/cars/yaris-2026-white/main.jpeg",
  },
  {
    id: "yaris-2026-black",
    name: "Toyota Yaris",
    year: "2026",
    color: "Black",
    category: "Sedan",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    fuel: "Petrol",
    rate: { withDriver: 11000, selfDrive: 8500 },
    tags: ["Newer unit"],
    image: "/cars/yaris-2026-black/main.jpeg",
  },
  {
    id: "civic-2020-white",
    name: "Honda Civic",
    year: "2020",
    color: "White",
    category: "Executive",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    fuel: "Petrol · CVT",
    rate: { withDriver: 14000, selfDrive: 11000 },
    tags: ["Weddings", "Corporate"],
    image: "/cars/civic-2020-white/main.jpeg",
  },
  {
    id: "civic-2020-black",
    name: "Honda Civic",
    year: "2020",
    color: "Black",
    category: "Executive",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    fuel: "Petrol · CVT",
    rate: { withDriver: 14000, selfDrive: 11000 },
    tags: ["Weddings", "Corporate"],
    image: "/cars/civic-2020-black/main.jpeg",
  },
  {
    id: "civic-2020-silver",
    name: "Honda Civic",
    year: "2020",
    color: "Silver",
    category: "Executive",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    fuel: "Petrol · CVT",
    rate: { withDriver: 14000, selfDrive: 11000 },
    tags: ["Corporate"],
    image: "/cars/civic-2020-silver/main.jpeg",
  },
  {
    id: "civic-2024-white",
    name: "Honda Civic",
    year: "2024",
    color: "White",
    category: "Executive",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    fuel: "Petrol · CVT",
    rate: { withDriver: 15500, selfDrive: 12500 },
    tags: ["Newer unit", "Weddings"],
    image: "/cars/civic-2024-white/main.jpeg",
    featured: true,
  },
  {
    id: "brv-silver",
    name: "Honda BR-V",
    year: "–",
    color: "Silver",
    category: "SUV",
    seats: 7,
    luggage: 3,
    transmission: "Automatic",
    fuel: "Petrol",
    rate: { withDriver: 17000, selfDrive: 13000 },
    tags: ["7-seater", "Family trips"],
    image: "/cars/brv-silver/main.jpeg",
  },
  {
    id: "jolion-2026-black",
    name: "Haval Jolion",
    year: "2026",
    color: "Black",
    category: "SUV",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    fuel: "Petrol",
    rate: { withDriver: 19000, selfDrive: 14500 },
    tags: ["Newer unit"],
    image: "/cars/jolion-2026-black/main.jpeg",
  },
  {
    id: "sportage",
    name: "Kia Sportage",
    year: "–",
    color: "–",
    category: "SUV",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    fuel: "Petrol",
    rate: { withDriver: 18000, selfDrive: 14000 },
    tags: ["Comfort SUV"],
    image: "/cars/sportage/main.jpeg",
  },
  {
    id: "prado-black",
    name: "Toyota Prado",
    year: "–",
    color: "Black",
    category: "SUV",
    seats: 7,
    luggage: 4,
    transmission: "Automatic",
    fuel: "Diesel · 4x4",
    rate: { withDriver: 40000, selfDrive: null },
    tags: ["Northern tours", "Protocol"],
    image: "/cars/prado-black/main.jpeg",
  },
  {
    id: "land-cruiser-white",
    name: "Toyota Land Cruiser",
    year: "–",
    color: "White",
    category: "SUV",
    seats: 7,
    luggage: 5,
    transmission: "Automatic",
    fuel: "Diesel · 4x4",
    rate: { withDriver: 55000, selfDrive: null },
    tags: ["Luxury", "Protocol"],
    image: "/cars/land-cruiser-white/main.jpeg",
    featured: true,
  },
];

export const CATEGORIES = [
  "All",
  "Economy",
  "Sedan",
  "SUV",
  "Executive",
] as const;

/* -------------------------------------------------------------------------- */
/* Services                                                                    */
/* -------------------------------------------------------------------------- */

export const SERVICES = [
  {
    id: "airport",
    title: "Airport Transfer",
    blurb:
      "Flight tracked, driver waiting at arrivals with a name board. Fixed fare — no surge, no meter, no argument at 3am.",
    points: ["Meet & greet at arrivals", "Free 60-min waiting", "Fixed one-way fare"],
    from: 4500,
  },
  {
    id: "wedding",
    title: "Wedding & Events",
    blurb:
      "Decorated bridal cars and matched convoys. We arrive an hour early and stay until the last guest leaves.",
    points: ["Flower decoration on request", "Uniformed drivers", "Convoy of 3–20 cars"],
    from: 18000,
  },
  {
    id: "corporate",
    title: "Corporate & Monthly",
    blurb:
      "Dedicated cars and vetted drivers on monthly contract, invoiced properly with filer-ready documentation.",
    points: ["Monthly invoicing", "Replacement car guarantee", "Dedicated account manager"],
    from: 145000,
  },
  {
    id: "tours",
    title: "Northern Tours",
    blurb:
      "Hunza, Skardu, Naran, Swat. 4x4s that are actually serviced for the terrain, with drivers who know the roads.",
    points: ["Mountain-experienced drivers", "Driver food & stay included", "Per-trip package"],
    from: 32000,
  },
  {
    id: "selfdrive",
    title: "Self Drive",
    blurb:
      "You take the keys. Clean verification process, transparent security deposit, refunded within 48 hours.",
    points: ["CNIC + licence verification", "Refundable deposit", "Unlimited km within city"],
    from: 4500,
  },
  {
    id: "intercity",
    title: "Intercity Travel",
    blurb:
      "Lahore to Islamabad, Karachi to Hyderabad, anywhere in between. Motorway tolls and driver allowance included.",
    points: ["Tolls included", "Door to door", "Overnight rates available"],
    from: 16000,
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Trust / proof                                                               */
/* -------------------------------------------------------------------------- */

export const STATS = [
  { value: "12+", label: "Years on the road" },
  { value: "40+", label: "Cars in the fleet" },
  { value: "9,000+", label: "Trips completed" },
  { value: "4.9", label: "Average rating" },
] as const;

export const WHY = [
  {
    title: "Verified, salaried drivers",
    body:
      "Every driver is police-verified, licence-checked and on our payroll — not a random contact from a WhatsApp group. You get the same faces, trip after trip.",
  },
  {
    title: "The price we quote is the price you pay",
    body:
      "Fuel policy, toll, driver allowance and overtime are written into the quote before you confirm. No surprise line items when the trip ends.",
  },
  {
    title: "Serviced every 5,000 km",
    body:
      "Tyres, brakes and AC checked before each booking. Full service log per car. If a car is not right, it does not leave the yard.",
  },
  {
    title: "Breakdown cover on every trip",
    body:
      "If the car stops, we get a replacement to you — same city within 90 minutes, intercity within 3 hours. It is on us, not on your schedule.",
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Tell us the trip",
    body: "Pick the car, dates and whether you want a driver. Send it on WhatsApp in one tap.",
  },
  {
    n: "02",
    title: "Get a written quote",
    body: "Full breakdown back within 15 minutes during working hours. Nothing hidden.",
  },
  {
    n: "03",
    title: "Confirm & verify",
    body: "Advance for with-driver bookings, CNIC and licence check for self-drive. Takes ten minutes.",
  },
  {
    n: "04",
    title: "Car reaches you",
    body: "Free delivery inside the city. Cleaned, fuelled and photographed before handover.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Booked a Fortuner for eight days in Hunza. Driver was calm on every switchback and the car did not miss a beat. Bill matched the quote to the rupee.",
    name: "Bilal A.",
    role: "Family trip · Lahore → Hunza",
  },
  {
    quote:
      "We run all our client pickups through Huzaifa now. Monthly invoice, same two drivers, zero no-shows in fourteen months.",
    name: "Sana R.",
    role: "Office Manager · Islamabad",
  },
  {
    quote:
      "Took a Civic on self-drive for the weekend. Deposit was back in my account on Monday morning without me chasing anyone.",
    name: "Hamza K.",
    role: "Self-drive · Lahore",
  },
  {
    quote:
      "Six-car convoy for my sister's barat, all matched and decorated. They were parked outside at 4pm for a 5pm departure.",
    name: "Ayesha M.",
    role: "Wedding · Faisalabad",
  },
] as const;

export const FAQS = [
  {
    q: "What do I need for a self-drive rental?",
    a: "Original CNIC, a valid driving licence held for at least one year, and a refundable security deposit. For customers outside our service cities we also ask for a second reference number. Verification is done once — after that repeat bookings are instant.",
  },
  {
    q: "Is fuel included in the rate?",
    a: "No. All rates are quoted excluding fuel. The car is handed over with a recorded fuel level and should be returned at the same level. This keeps the rate honest instead of padding it with an estimate.",
  },
  {
    q: "How many hours does a daily rate cover?",
    a: "A with-driver day is 10 hours and 100 km inside the city. Beyond that, overtime is charged per hour and per km at the rate written on your quote. Self-drive days are a full 24 hours with unlimited city kilometres.",
  },
  {
    q: "Do you deliver the car to my address?",
    a: "Yes. Delivery and pickup are free anywhere inside our service cities. For intercity delivery we charge a one-time transfer fee that is quoted upfront.",
  },
  {
    q: "What happens if the car breaks down?",
    a: "Call the number on your booking confirmation. We dispatch a replacement — within 90 minutes in-city, within 3 hours intercity — and you are not charged for the downtime.",
  },
  {
    q: "How much advance do you take?",
    a: "For with-driver bookings, 30% at confirmation and the balance at handover. For wedding convoys and northern tours we take 50% because those cars are blocked out of the fleet. Self-drive is deposit plus full rent upfront.",
  },
  {
    q: "Can I extend the booking mid-trip?",
    a: "Yes, subject to the car not being booked after you. Message us as early as you can and we will confirm the extension in writing before it starts.",
  },
  {
    q: "Which cities do you operate in?",
    a: `We are based in Lahore and operate in ${site.cities.join(", ")}. Intercity trips run anywhere in Pakistan, including AJK and Gilgit-Baltistan.`,
  },
] as const;
