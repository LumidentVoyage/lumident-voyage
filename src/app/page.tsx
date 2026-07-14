import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
function PhotoPlaceholder({
  label,
  aspect = "4/5",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-border bg-ivory-muted ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        <div className="h-px w-12 bg-gold-muted" />
        <span className="text-center text-[0.65rem] font-medium uppercase tracking-[0.25em] text-charcoal-muted/70">
          {label}
        </span>
        <div className="h-px w-12 bg-gold-muted" />
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">
      {children}
    </p>
  );
}

function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-serif text-3xl font-medium leading-tight tracking-tight text-charcoal sm:text-4xl lg:text-[2.75rem] ${className}`}
    >
      {children}
    </h2>
  );
}

const journeySteps = [
  {
    step: "01",
    title: "Virtual Consultation",
    description:
      "Share your goals from home. Our specialists review your case and discuss possibilities in a private, unhurried conversation.",
  },
  {
    step: "02",
    title: "Personalized Treatment Plan",
    description:
      "Receive a bespoke plan tailored to your smile, timeline, and preferences — with transparent guidance every step of the way.",
  },
  {
    step: "03",
    title: "Travel Coordination",
    description:
      "We arrange flights, accommodations, and ground transfers so your journey feels effortless from departure to return.",
  },
  {
    step: "04",
    title: "Arrival & Welcome",
    description:
      "Step off the plane into a curated welcome. Your dedicated coordinator ensures every detail is already in place.",
  },
  {
    step: "05",
    title: "Treatment in Dubai",
    description:
      "Experience precision dentistry in a serene, world-class setting — with E-max veneers crafted for natural luminosity.",
  },
  {
    step: "06",
    title: "Follow-Up Care",
    description:
      "Return home with ongoing support. We remain available for guidance, ensuring your results endure beautifully.",
  },
];

const journeyIncludes = [
  "Private airport transfers",
  "Curated luxury accommodations",
  "Dedicated patient coordinator",
  "Pre-treatment digital smile design",
  "Concierge dining & experience reservations",
  "Post-treatment follow-up consultations",
];

const faqs = [
  {
    question: "Why choose Dubai for dental veneers?",
    answer:
      "Dubai offers world-class dental expertise, advanced technology, and a setting that transforms treatment into a restorative experience. Lumident Voyage connects you with specialists who prioritize artistry alongside precision.",
  },
  {
    question: "What are E-max ceramic veneers?",
    answer:
      "E-max veneers are ultra-thin, high-strength ceramic restorations prized for their natural translucency and durability. They allow us to refine shape, shade, and symmetry while preserving a lifelike quality.",
  },
  {
    question: "How long does the journey typically take?",
    answer:
      "Most patients plan a stay of five to seven days in Dubai, depending on their treatment plan. We design your itinerary around clinical requirements while leaving room for rest and discovery.",
  },
  {
    question: "Is the consultation really complimentary?",
    answer:
      "Yes. Your initial virtual consultation is an opportunity to explore whether Lumident Voyage is the right fit — with no obligation and complete discretion.",
  },
  {
    question: "Do you coordinate travel from the United States?",
    answer:
      "Absolutely. We specialize in serving American patients, handling logistics from major US cities to Dubai so you can focus entirely on your experience.",
  },
];

export default function Home() {
  return (
    <div className="bg-ivory text-charcoal">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-ivory/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#"
            className="font-serif text-xl font-medium tracking-wide text-charcoal lg:text-2xl"
          >
            Lumident Voyage
          </a>

          <div className="hidden items-center gap-10 md:flex">
            <a
              href="#journey"
              className="text-sm tracking-wide text-charcoal-muted transition-colors hover:text-charcoal"
            >
              The Journey
            </a>
            <a
              href="#veneers"
              className="text-sm tracking-wide text-charcoal-muted transition-colors hover:text-charcoal"
            >
              Veneers
            </a>
            <a
              href="#dubai"
              className="text-sm tracking-wide text-charcoal-muted transition-colors hover:text-charcoal"
            >
              Dubai
            </a>
            <a
              href="#faq"
              className="text-sm tracking-wide text-charcoal-muted transition-colors hover:text-charcoal"
            >
              FAQ
            </a>
            <a
              href="#consultation"
              className="border border-charcoal px-5 py-2.5 text-sm tracking-wide transition-colors hover:bg-charcoal hover:text-ivory"
            >
              Consultation
            </a>
          </div>

          <details className="group relative md:hidden">
            <summary className="cursor-pointer list-none text-sm font-medium uppercase tracking-widest text-charcoal [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute right-0 mt-4 w-48 border border-border bg-ivory p-4 shadow-sm">
              <div className="flex flex-col gap-4">
                <a href="#journey" className="text-sm text-charcoal-muted">
                  The Journey
                </a>
                <a href="#veneers" className="text-sm text-charcoal-muted">
                  Veneers
                </a>
                <a href="#dubai" className="text-sm text-charcoal-muted">
                  Dubai
                </a>
                <a href="#faq" className="text-sm text-charcoal-muted">
                  FAQ
                </a>
                <a
                  href="#consultation"
                  className="border border-charcoal px-4 py-2 text-center text-sm"
                >
                  Consultation
                </a>
              </div>
            </div>
          </details>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-10 lg:pb-32 lg:pt-24">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:items-start lg:gap-20">
            <div className="lg:pt-4">
              <SectionLabel>Dubai · Dental Excellence</SectionLabel>
              <h1 className="font-serif text-4xl font-medium leading-[1.15] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
                Dentistry, thoughtfully reimagined.
              </h1>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-charcoal-muted sm:text-lg">
                Lumident Voyage coordinates expert dental care in Dubai with a
                seamlessly curated travel experience — designed for discerning
                American patients who expect precision, discretion, and beauty in
                equal measure.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center bg-charcoal px-8 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-charcoal/90"
                >
                  <Link href="/contact">   Start Your Consultation </Link>
                
                </a>
                <a
                  href="#journey"
                  className="inline-flex items-center justify-center border border-charcoal px-8 py-4 text-sm font-medium tracking-wide text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
                >
                  Explore the Journey
                </a>
              </div>
            </div>
            <div className="group relative aspect-[5/6] w-full max-w-md justify-self-center overflow-hidden rounded-2xl lg:aspect-auto lg:max-w-none lg:min-h-[720px]">
              <Image
                src="/Images/hero-dubai.jpg"
                alt="Dubai skyline at golden hour — the destination for Lumident Voyage luxury dental travel"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-charcoal/25"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* More than a dental appointment */}
        <section className="border-y border-border bg-ivory-muted">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
              <PhotoPlaceholder label="Experience Photography" aspect="3/4" />
              <div>
                <SectionLabel>The Lumident Difference</SectionLabel>
                <SectionHeading>More than a dental appointment</SectionHeading>
                <p className="mt-6 text-base leading-relaxed text-charcoal-muted sm:text-lg">
                  We believe exceptional dentistry deserves an exceptional
                  setting. From your first conversation to your return home,
                  every touchpoint is considered — clinical excellence woven
                  into a journey that feels personal, unhurried, and quietly
                  luxurious.
                </p>
                <p className="mt-4 text-base leading-relaxed text-charcoal-muted">
                  This is not medical tourism as you know it. It is a
                  thoughtfully orchestrated experience for those who value their
                  time, their comfort, and the artistry of a truly natural
                  smile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* E-max veneers */}
        <section id="veneers" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="lg:order-2">
              <PhotoPlaceholder label="Smile Detail Photography" aspect="4/3" />
            </div>
            <div className="lg:order-1">
              <SectionLabel>Craft & Precision</SectionLabel>
              <SectionHeading>E-max ceramic veneers</SectionHeading>
              <p className="mt-6 text-base leading-relaxed text-charcoal-muted sm:text-lg">
                Our specialists work exclusively with E-max ceramic — a
                material celebrated for its exceptional translucency, strength,
                and ability to mimic the subtle variations of natural enamel.
              </p>
              <ul className="mt-8 space-y-4 border-t border-border pt-8">
                {[
                  "Digitally designed before fabrication begins",
                  "Custom shade-matched to complement your complexion",
                  "Minimally invasive preparation when clinically appropriate",
                  "Finished by master ceramists with an eye for detail",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-sm leading-relaxed text-charcoal-muted sm:text-base"
                  >
                    <span className="mt-2 h-px w-6 shrink-0 bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Six-step journey */}
        <section id="journey" className="border-t border-border bg-ivory-muted">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="max-w-2xl">
              <SectionLabel>Your Path</SectionLabel>
              <SectionHeading>A six-step patient journey</SectionHeading>
              <p className="mt-6 text-base leading-relaxed text-charcoal-muted">
                From first inquiry to lasting results, each phase is handled
                with the same care and attention — so you never navigate alone.
              </p>
            </div>
            <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {journeySteps.map((item) => (
                <article
                  key={item.step}
                  className="bg-ivory p-8 lg:p-10"
                >
                  <span className="font-serif text-2xl text-gold">{item.step}</span>
                  <h3 className="mt-4 font-serif text-xl font-medium text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What the journey can include */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionLabel>Curated for You</SectionLabel>
              <SectionHeading>What the journey can include</SectionHeading>
              <p className="mt-6 text-base leading-relaxed text-charcoal-muted">
                Every itinerary is tailored. These are among the elements we
                most often coordinate for our patients traveling from the United
                States.
              </p>
              <ul className="mt-10 space-y-5">
                {journeyIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 border-b border-border pb-5 text-charcoal"
                  >
                    <span className="text-gold">—</span>
                    <span className="text-sm tracking-wide sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <PhotoPlaceholder label="Travel" aspect="3/4" className="mt-8" />
              <PhotoPlaceholder label="Accommodation" aspect="3/4" />
            </div>
          </div>
        </section>

        {/* Why Dubai */}
        <section id="dubai" className="border-y border-border bg-charcoal text-ivory">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <SectionLabel>Destination</SectionLabel>
                <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
                  Why Dubai
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ivory/75 sm:text-lg">
                  Dubai has emerged as a global center for aesthetic dentistry
                  — combining advanced clinical standards with hospitality that
                  is second to none. For American travelers, direct flights and
                  a world built for comfort make it an ideal destination.
                </p>
                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                  {[
                    {
                      title: "Clinical Excellence",
                      text: "Board-certified specialists and state-of-the-art facilities.",
                    },
                    {
                      title: "Seamless Access",
                      text: "Direct routes from major US hubs with premium ground transport.",
                    },
                    {
                      title: "Refined Recovery",
                      text: "Five-star accommodations and serene environments for healing.",
                    },
                    {
                      title: "Beyond Treatment",
                      text: "A city of culture, cuisine, and quiet luxury awaiting discovery.",
                    },
                  ].map((item) => (
                    <div key={item.title}>
                      <h3 className="text-sm font-medium uppercase tracking-widest text-gold">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ivory/70">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <PhotoPlaceholder
                label="Dubai Photography"
                aspect="4/5"
                className="border-ivory/20 bg-charcoal [&_span]:text-ivory/40"
              />
            </div>
          </div>
        </section>

        {/* Natural-looking results */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Our Philosophy</SectionLabel>
            <SectionHeading>Natural-looking results</SectionHeading>
            <p className="mt-6 text-base leading-relaxed text-charcoal-muted sm:text-lg">
              The most beautiful smiles are the ones that go unnoticed — refined,
              harmonious, and entirely your own. We reject uniformity in favor
              of proportion, warmth, and the subtle imperfections that make a
              smile feel alive.
            </p>
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            <PhotoPlaceholder label="Before" aspect="1/1" />
            <PhotoPlaceholder label="Detail" aspect="1/1" />
            <PhotoPlaceholder label="After" aspect="1/1" />
          </div>
          <p className="mx-auto mt-8 max-w-xl text-center text-xs tracking-wide text-charcoal-muted/70">
            Patient photography coming soon. All results vary based on individual
            treatment plans.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-border bg-ivory-muted">
          <div className="mx-auto max-w-3xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="text-center">
              <SectionLabel>Questions</SectionLabel>
              <SectionHeading>Frequently asked</SectionHeading>
            </div>
            <div className="mt-12 divide-y divide-border border-y border-border">
              {faqs.map((faq) => (
                <details key={faq.question} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left font-medium text-charcoal transition-colors hover:text-gold [&::-webkit-details-marker]:hidden">
                    <span className="font-serif text-lg">{faq.question}</span>
                    <span className="shrink-0 text-gold transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-6 text-sm leading-relaxed text-charcoal-muted sm:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="consultation" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="border border-border bg-ivory-muted px-8 py-16 text-center sm:px-16 sm:py-20">
            <SectionLabel>Begin</SectionLabel>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal sm:text-4xl">
              Your journey starts with a conversation
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-charcoal-muted">
              Schedule a complimentary virtual consultation with our team. No
              obligation — only clarity, discretion, and the beginning of
              something thoughtfully considered.
            </p>
            <a
              href="mailto:hello@lumidentvoyage.com"
              className="mt-10 inline-flex items-center justify-center bg-charcoal px-10 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-charcoal/90"
            >
              Start Your Consultation
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <p className="font-serif text-2xl font-medium text-charcoal">
                Lumident Voyage
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal-muted">
                Luxury dental tourism for American patients seeking E-max
                ceramic veneers and a curated Dubai experience.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-gold">
                Explore
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#journey"
                    className="text-sm text-charcoal-muted transition-colors hover:text-charcoal"
                  >
                    The Journey
                  </a>
                </li>
                <li>
                  <a
                    href="#veneers"
                    className="text-sm text-charcoal-muted transition-colors hover:text-charcoal"
                  >
                    E-max Veneers
                  </a>
                </li>
                <li>
                  <a
                    href="#dubai"
                    className="text-sm text-charcoal-muted transition-colors hover:text-charcoal"
                  >
                    Why Dubai
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-sm text-charcoal-muted transition-colors hover:text-charcoal"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-gold">
                Contact
              </p>
              <ul className="mt-4 space-y-3 text-sm text-charcoal-muted">
                <li>
                  <a
                    href="mailto:hello@lumidentvoyage.com"
                    className="transition-colors hover:text-charcoal"
                  >
                    hello@lumidentvoyage.com
                  </a>
                </li>
                <li>Dubai, United Arab Emirates</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
            <p className="text-xs text-charcoal-muted">
              © {new Date().getFullYear()} Lumident Voyage. All rights
              reserved.
            </p>
            <p className="text-xs text-charcoal-muted/70">
              Results may vary. Consult a qualified dental professional.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
