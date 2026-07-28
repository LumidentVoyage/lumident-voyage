import Link from "next/link";

const journeySteps = [
  {
    number: "01",
    title: "Private consultation request",
    description:
      "Share your goals, preferred travel period, photographs and any available dental records through our secure consultation form.",
  },
  {
    number: "02",
    title: "Clinical review",
    description:
      "Your information is reviewed to better understand your concerns, treatment interests and whether further records may be required.",
  },
  {
    number: "03",
    title: "Online consultation",
    description:
      "Meet privately with our team to discuss your expectations, possible treatment pathways and the questions most important to you.",
  },
  {
    number: "04",
    title: "Personalized proposal",
    description:
      "Receive a tailored preliminary proposal outlining the anticipated treatment, estimated timeline and expected stay in Dubai.",
  },
  {
    number: "05",
    title: "Travel coordination",
    description:
      "Once you decide to proceed, we assist with the planning of your accommodation, appointments and arrival experience.",
  },
  {
    number: "06",
    title: "Arrival in Dubai",
    description:
      "Arrive with a clear schedule and a dedicated point of contact to guide you throughout your treatment journey.",
  },
  {
    number: "07",
    title: "Clinical examination",
    description:
      "Your dentist performs an in-person examination and any necessary diagnostic records before confirming the final treatment plan.",
  },
  {
    number: "08",
    title: "Treatment and care",
    description:
      "Your treatment is completed according to the confirmed plan, with careful attention to comfort, communication and clinical detail.",
  },
  {
    number: "09",
    title: "Final review",
    description:
      "Before you travel home, your result is reviewed and you receive the relevant care instructions and supporting documentation.",
  },
  {
    number: "10",
    title: "Continued support",
    description:
      "Our relationship continues after your return home through remote follow-up and ongoing communication when needed.",
  },
];

export default function PatientJourneyPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#2b2a28]">
      <header className="border-b border-[#e3ddd3]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/" className="font-serif text-2xl tracking-wide">
            Lumident Voyage
          </Link>

          <Link
            href="/contact"
            className="text-xs uppercase tracking-[0.18em] text-[#6f685f] transition hover:text-[#b99a5f]"
          >
            Begin Consultation
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#b99a5f]">
            The Patient Journey
          </p>

          <h1 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">
            Clear guidance, from first conversation to final follow-up.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#686159]">
            Traveling for dental care should feel considered, organized and
            personal. Lumident Voyage guides each patient through the clinical
            and travel process with one clear journey.
          </p>
        </div>

        <div className="mt-20 border-t border-[#d9d1c5]">
          {journeySteps.map((step) => (
            <article
              key={step.number}
              className="grid gap-5 border-b border-[#d9d1c5] py-10 md:grid-cols-[120px_1fr_1.3fr] md:items-start md:gap-10 md:py-14"
            >
              <span className="font-serif text-3xl text-[#b99a5f]">
                {step.number}
              </span>

              <h2 className="font-serif text-2xl leading-snug md:text-3xl">
                {step.title}
              </h2>

              <p className="max-w-xl text-sm leading-7 text-[#746d64] md:text-base">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#ded7cc] bg-[#fbf9f5]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-center md:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b99a5f]">
              Your First Step
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
              Tell us where you are now and where you would like your smile to
              take you.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-[#686159]">
              Submit a private consultation request and our team will contact
              you through your preferred method.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#2b2a28] px-8 py-5 text-xs uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-[#b99a5f] hover:text-[#2b2a28]"
          >
            Begin Your Consultation
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#e3ddd3]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-[#746d64] sm:flex-row sm:items-center sm:justify-between">
          <p>© Lumident Voyage</p>

          <p>
            Final treatment recommendations require an in-person clinical
            examination.
          </p>
        </div>
      </footer>
    </main>
  );
}
