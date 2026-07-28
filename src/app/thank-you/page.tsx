import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f8f5ef] text-[#2b2a28]">
      <header className="border-b border-[#e3ddd3]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/" className="font-serif text-2xl tracking-wide">
            Lumident Voyage
          </Link>

          <Link
            href="/"
            className="text-xs uppercase tracking-[0.18em] text-[#6f685f] transition hover:text-[#b99a5f]"
          >
            Return Home
          </Link>
        </div>
      </header>

      <section className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="w-full max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#b99a5f]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-7 w-7 text-[#b99a5f]"
              aria-hidden="true"
            >
              <path
                d="M5 12.5L9.25 17L19 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.35em] text-[#b99a5f]">
            Consultation Received
          </p>

          <h1 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
            Your journey begins here.
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-[#686159]">
            Thank you for sharing your goals with Lumident Voyage. Our team
            will carefully review your consultation request and contact you
            within 24 hours.
          </p>

          <div className="mx-auto mt-12 h-px w-20 bg-[#b99a5f]" />

          <div className="mx-auto mt-12 max-w-xl border border-[#ded7cc] bg-[#fbf9f5] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[#b99a5f]">
              What happens next
            </p>

            <div className="mt-8 space-y-7 text-left">
              <div className="flex gap-5">
                <span className="font-serif text-2xl text-[#b99a5f]">01</span>

                <div>
                  <h2 className="font-medium">Personal review</h2>
                  <p className="mt-2 text-sm leading-6 text-[#746d64]">
                    Our team will review your treatment interests, goals and
                    supporting files.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#e3ddd3]" />

              <div className="flex gap-5">
                <span className="font-serif text-2xl text-[#b99a5f]">02</span>

                <div>
                  <h2 className="font-medium">Private consultation</h2>
                  <p className="mt-2 text-sm leading-6 text-[#746d64]">
                    A coordinator will contact you through your preferred
                    contact method.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#e3ddd3]" />

              <div className="flex gap-5">
                <span className="font-serif text-2xl text-[#b99a5f]">03</span>

                <div>
                  <h2 className="font-medium">Your personalized journey</h2>
                  <p className="mt-2 text-sm leading-6 text-[#746d64]">
                    We will guide you through the clinical, travel and
                    accommodation details of your experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:admin@lumidentvoyage.com?subject=Lumident%20Voyage%20Consultation"
              className="inline-flex w-full items-center justify-center bg-[#2b2a28] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#b99a5f] hover:text-[#2b2a28] sm:w-auto"
            >
              Contact Our Team
            </a>

            <Link
              href="/"
              className="inline-flex w-full items-center justify-center border border-[#b8b0a4] px-8 py-4 text-xs uppercase tracking-[0.2em] transition duration-300 hover:border-[#b99a5f] hover:text-[#b99a5f] sm:w-auto"
            >
              Return Home
            </Link>
          </div>

          <p className="mx-auto mt-10 max-w-lg text-xs leading-6 text-[#8a8379]">
            Please note that any preliminary guidance is subject to clinical
            examination and confirmation by a qualified dental professional.
          </p>
        </div>
      </section>
    </main>
  );
}
