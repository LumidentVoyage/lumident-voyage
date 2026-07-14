import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f5ef] px-6 text-[#2b2a28]">
      <div className="max-w-2xl text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#b99a5f]">
          Inquiry Received
        </p>

        <h1 className="font-serif text-5xl md:text-6xl">
          Thank you for reaching out.
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-[#686159]">
          A Lumident Voyage coordinator will review your inquiry and contact you
          shortly.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block border border-[#2b2a28] px-8 py-4 text-sm uppercase tracking-[0.18em]"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
