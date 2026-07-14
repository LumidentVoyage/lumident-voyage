export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 font-serif text-5xl">
          Start Your Consultation
        </h1>

        <p className="mb-12 text-lg text-gray-600">
          Tell us a little about yourself and your smile goals. Our team
          will contact you to arrange your complimentary consultation.
        </p>

        <form
          action="https://formsubmit.co/admin@lumidentvoyage.com"
          method="POST"
          className="space-y-6"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Lumident Voyage Consultation"
          />

          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label className="mb-2 block">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-lg border p-4"
            />
          </div>

          <div>
            <label className="mb-2 block">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border p-4"
            />
          </div>

          <div>
            <label className="mb-2 block">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="w-full rounded-lg border p-4"
            />
          </div>

          <div>
            <label className="mb-2 block">Treatment Interest</label>
            <select
              name="treatment"
              className="w-full rounded-lg border p-4"
            >
              <option>Porcelain Veneers</option>
              <option>Full Smile Makeover</option>
              <option>Dental Implants</option>
              <option>Not Sure Yet</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block">
              Tell us about your goals
            </label>
            <textarea
              name="message"
              rows={5}
              className="w-full rounded-lg border p-4"
            />
          </div>

          <button
            type="submit"
            className="bg-black px-8 py-4 text-white"
          >
            Request Consultation
          </button>
        </form>
      </div>
    </main>
  );
}
