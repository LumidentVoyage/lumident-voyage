import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-[#b89c5c] mb-6">
          Lumident Voyage
        </p>

        <h1 className="text-5xl md:text-6xl font-serif text-[#1f1f1f] mb-6">
          Thank You
        </h1>

        <p className="text-lg text-gray-600 leading-8 mb-10">
          Your consultation request has been received.
          Our team will review your information and contact you shortly to
          arrange your complimentary consultation.
        </p>

        <div className="space-y-3 text-gray-600 mb-12">
          <p>✓ Response within 24 hours</p>
          <p>✓ Personalized treatment guidance</p>
          <p>✓ Complimentary virtual consultation</p>
        </div>

        <Link
          href="/"
          className="inline-block bg-black text-white px-10 py-4 rounded-lg hover:opacity-90 transition"
        >
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}
