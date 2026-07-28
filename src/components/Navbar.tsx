import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e3ddd3] bg-[#f8f5ef]/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="font-serif text-xl font-medium tracking-wide text-[#2b2a28] lg:text-2xl"
        >
          Lumident Voyage
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/journey" className="text-sm text-[#6f685f]">
            The Journey
          </Link>

          <Link href="/doctors" className="text-sm text-[#6f685f]">
            Meet the Doctor
          </Link>

          <Link href="/#veneers" className="text-sm text-[#6f685f]">
            Veneers
          </Link>

          <Link href="/#dubai" className="text-sm text-[#6f685f]">
            Dubai
          </Link>

          <Link href="/#faq" className="text-sm text-[#6f685f]">
            FAQ
          </Link>

          <Link
            href="/contact"
            className="border border-[#2b2a28] px-5 py-2.5 text-sm transition hover:bg-[#2b2a28] hover:text-white"
          >
            Consultation
          </Link>
        </div>

        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none text-sm uppercase tracking-widest">
            Menu
          </summary>

          <div className="absolute right-0 mt-4 w-52 border border-[#e3ddd3] bg-[#f8f5ef] p-5 shadow-sm">
            <div className="flex flex-col gap-4">
              <Link href="/journey">The Journey</Link>
              <Link href="/doctors">Meet the Doctor</Link>
              <Link href="/#veneers">Veneers</Link>
              <Link href="/#dubai">Dubai</Link>
              <Link href="/#faq">FAQ</Link>
              <Link
                href="/contact"
                className="border border-[#2b2a28] px-5 py-3 text-center"
              >
                Consultation
              </Link>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
