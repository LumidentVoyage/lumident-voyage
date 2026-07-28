export default function ComingSoonPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f5ef] px-6 text-[#2b2a28]">
      <div className="max-w-3xl text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#b99a5f]">
          Lumident Voyage
        </p>

        <h1 className="font-serif text-5xl leading-tight md:text-7xl">
          Something thoughtful is on its way.
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-[#686159]">
          We are carefully creating a new approach to dental care and travel
          in Dubai.
        </p>

        <div className="mx-auto mt-12 h-px w-20 bg-[#b99a5f]" />

        <p className="mt-10 text-sm uppercase tracking-[0.2em] text-[#746d64]">
          Launching soon
        </p>

        <a
          href="mailto:admin@lumidentvoyage.com"
          className="mt-10 inline-flex border border-[#2b2a28] px-8 py-4 text-sm uppercase tracking-[0.18em] transition hover:bg-[#2b2a28] hover:text-white"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}
