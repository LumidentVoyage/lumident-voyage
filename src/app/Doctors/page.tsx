import Link from "next/link";

const expertise = [
  "Dental implant treatment",
  "Cosmetic and restorative dentistry",
  "Porcelain veneers and smile rehabilitation",
  "CAD-CAM and digital dentistry",
  "Comprehensive treatment planning",
];

const values = [
  {
    number: "01",
    title: "Planning before treatment",
    description:
      "Every successful result begins with diagnosis, communication and a clear understanding of the patient's expectations.",
  },
  {
    number: "02",
    title: "Natural, considered outcomes",
    description:
      "Treatment should restore confidence and function without appearing artificial or disconnected from the individual.",
  },
  {
    number: "03",
    title: "Clinical transparency",
    description:
      "Patients deserve clear explanations, realistic expectations and the opportunity to make informed decisions.",
  },
];

export default function DoctorsPage() {
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
            Private Consultation
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#b99a5f]">
            Meet Your Dentist
          </p>

          <h1 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">
            Care led by precision and communication.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#686159]">
            Lumident Voyage connects international patients with thoughtfully
            planned dental care in Dubai. Every journey is built around clear
            communication, individualized planning and attention to clinical
            detail.
          </p>
        </div>

        <div className="flex min-h-[480px] items-center justify-center border border-[#d8d1c6] bg-[#eee9e1] px-8 text-center">
          <div>
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#b99a5f] font-serif text-3xl text-[#b99a5f]">
              AA
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#8a8379]">
              Professional portrait
            </p>

            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#746d64]">
              Replace this section with your professional photograph when it
              is ready.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ded7cc] bg-[#fbf9f5]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b99a5f]">
              General Dentist & Implantologist
            </p>

            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
              Dr. Ammar Anbari
            </h2>

            <div className="mt-7 h-px w-20 bg-[#b99a5f]" />

            <p className="mt-7 text-sm leading-7 text-[#746d64]">
              DDS
              <br />
              Postgraduate Diploma in Clinical Oral Implantology
            </p>
          </div>

          <div>
            <p className="text-base leading-8 text-[#686159]">
              Dr. Ammar Anbari is a general dentist and implantologist with a
              clinical focus on implant, cosmetic and restorative dentistry.
              His approach combines digital planning, modern restorative
              techniques and careful communication throughout every stage of
              treatment.
            </p>

            <p className="mt-6 text-base leading-8 text-[#686159]">
              He believes that dentistry should not begin with a procedure. It
              should begin with understanding the patient, evaluating the
              complete clinical picture and building a treatment plan that is
              both appropriate and realistic.
            </p>

            <div className="mt-10 border-t border-[#ded7cc] pt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#b99a5f]">
                Areas of Focus
              </p>

              <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {expertise.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-[#686159]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b99a5f]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#b99a5f]">
            Clinical Philosophy
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
            The result matters. So does every decision that leads to it.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="border border-[#d8d1c6] bg-[#fbf9f5] p-8 md:p-10"
            >
              <span className="font-serif text-3xl text-[#b99a5f]">
                {value.number}
              </span>

              <h3 className="mt-8 font-serif text-2xl leading-snug">
                {value.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#746d64]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#ded7cc] bg-[#2b2a28] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-center md:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c8aa70]">
              A Private Conversation
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
              Begin with your goals, your concerns and your questions.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-[#d8d1c6]">
              Share your information privately and our team will guide you
              through the next appropriate step.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#f8f5ef] px-8 py-5 text-xs uppercase tracking-[0.22em] text-[#2b2a28] transition duration-300 hover:bg-[#b99a5f]"
          >
            Request Consultation
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#e3ddd3]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-[#746d64] sm:flex-row sm:items-center sm:justify-between">
          <p>© Lumident Voyage</p>

          <Link href="/" className="transition hover:text-[#b99a5f]">
            Return Home
          </Link>
        </div>
      </footer>
    </main>
  );
}
