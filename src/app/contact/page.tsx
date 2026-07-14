import Link from "next/link";

const inputClass =
  "w-full border border-[#b8b0a4] bg-transparent px-4 py-4 text-[#2b2a28] outline-none transition focus:border-[#b99a5f]";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#2b2a28]">
      <header className="border-b border-[#e3ddd3]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/" className="font-serif text-2xl tracking-wide">
            Lumident Voyage
          </Link>

          <Link
            href="/"
            className="text-sm uppercase tracking-[0.18em] text-[#6f685f]"
          >
            Return Home
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
        <div className="lg:pt-8">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#b99a5f]">
            Private Consultation
          </p>

          <h1 className="max-w-lg font-serif text-5xl leading-tight md:text-6xl">
            Begin your journey.
          </h1>

          <p className="mt-8 max-w-md text-lg leading-8 text-[#686159]">
            Tell us about your goals and preferred timeline. A Lumident
            coordinator will review your inquiry and contact you personally.
          </p>

          <div className="mt-12 border-t border-[#d9d1c5] pt-8">
            <p className="text-sm leading-7 text-[#746d64]">
              Your information is used only to assess your inquiry and arrange
              your consultation. Final treatment recommendations require a
              clinical examination.
            </p>
          </div>
        </div>

        <div className="border border-[#ded7cc] bg-[#fbf9f5] p-6 shadow-sm md:p-10">
          <form
            action="https://formsubmit.co/admin@lumidentvoyage.com"
            method="POST"
            className="space-y-7"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Lumident Voyage Consultation"
            />

            <input type="hidden" name="_captcha" value="false" />

            <input
              type="hidden"
              name="_next"
              value="https://www.lumidentvoyage.com/thank-you"
            />

            <div className="grid gap-7 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">State or Country</label>
                <input
                  type="text"
                  name="location"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm">
                  Treatment Interest
                </label>
                <select
                  name="treatment"
                  className={inputClass}
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a treatment
                  </option>
                  <option>Porcelain Veneers</option>
                  <option>Full Smile Makeover</option>
                  <option>Dental Implants</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Preferred Travel Time
                </label>
                <select
                  name="travel_time"
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a timeframe
                  </option>
                  <option>Within 1–3 months</option>
                  <option>Within 3–6 months</option>
                  <option>Within 6–12 months</option>
                  <option>Still exploring</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Tell us about your goals
              </label>
              <textarea
                name="message"
                rows={6}
                className={inputClass}
                placeholder="What would you like to improve about your smile?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2b2a28] px-8 py-5 text-sm uppercase tracking-[0.18em] text-white transition hover:bg-[#45413d]"
            >
              Request Consultation
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
