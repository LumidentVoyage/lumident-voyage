import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e3ddd3] bg-[#f8f5ef]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link
              href="/"
              className="font-serif text-2xl font-medium text-[#2b2a28]"
            >
              Lumident Voyage
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#746d64]">
              Luxury dental tourism for American patients seeking E-max ceramic
              veneers and a curated Dubai experience.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#b99a5f]">
              Explore
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[#746d64]">
              <Link href="/journey">The Journey</Link>
              <Link href="/doctors">Meet the Doctor</Link>
              <Link href="/#veneers">E-max Veneers</Link>
              <Link href="/#faq">FAQ</Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#b99a5f]">
              Contact
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[#746d64]">
              <a href="mailto:hello@lumidentvoyage.com">
                hello@lumidentvoyage.com
              </a>

              <p>Dubai, United Arab Emirates</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#e3ddd3] pt-8 text-xs text-[#746d64] sm:flex-row">
          <p>
            © {new Date().getFullYear()} Lumident Voyage. All rights reserved.
          </p>

          <p>Results may vary. Consult a qualified dental professional.</p>
        </div>
      </div>
    </footer>
  );
}
