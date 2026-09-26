import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram } from "react-icons/fi";
import PageHeader from "../Components/PageHeader";
import FAQ from "../Components/FAQ";
import { site } from "../data/site";
import { programs } from "../data/programs";

export default function Contact() {
  // No backend needed: the form opens WhatsApp with the message filled in.
  function handleSubmit(e) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const note = d.get("message") ? ` ${d.get("message")}` : "";
    const text = `Hi ${site.name}, I'm ${d.get("name")}. I'm interested in: ${d.get("interest")}.${note} My number: ${d.get("phone")}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  const details = [
    { icon: FiMapPin, title: "Address", lines: site.address },
    { icon: FiPhone, title: "Phone", lines: [site.phone], href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: FiMail, title: "Email", lines: [site.email], href: `mailto:${site.email}` },
    { icon: FiClock, title: "Hours", lines: site.hours.map((h) => `${h.days}: ${h.time}`) },
    { icon: FiInstagram, title: "Instagram", lines: [site.instagram.handle], href: site.instagram.url },
  ];

  return (
    <>
      <PageHeader label="Contact" title="Come and train with us.">
        Book a free trial, ask about a program or just say hi. Fill the form and it goes straight to us on WhatsApp.
      </PageHeader>

      <section className="wrap grid gap-14 py-16 md:py-24 lg:grid-cols-12">
        <ul className="space-y-7 lg:col-span-5">
          {details.map(({ icon: Icon, title, lines, href }) => (
            <li key={title} className="flex gap-4">
              <Icon className="mt-1 shrink-0 text-accent" size={22} />
              <div>
                <p className="font-display text-lg font-bold uppercase tracking-wider">{title}</p>
                {lines.map((l) => (
                  <p key={l} className="text-muted">
                    {href ? <a href={href} className="hover:text-accent hover:underline">{l}</a> : l}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="space-y-5 border border-ink p-6 md:p-8 lg:col-span-7">
          <h2 className="text-4xl">Book a free trial</h2>
          <label className="block">
            <span className="mb-1 block font-semibold">Your name</span>
            <input name="name" required className="field" autoComplete="name" />
          </label>
          <label className="block">
            <span className="mb-1 block font-semibold">Phone number</span>
            <input name="phone" type="tel" required className="field" autoComplete="tel" />
          </label>
          <label className="block">
            <span className="mb-1 block font-semibold">Interested in</span>
            <select name="interest" className="field">
              {programs.map((p) => <option key={p.id}>{p.name}</option>)}
              <option>Not sure yet</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block font-semibold">Anything we should know? (optional)</span>
            <textarea name="message" rows={4} className="field" />
          </label>
          <button type="submit" className="btn btn-accent">Send on WhatsApp</button>
        </form>
      </section>

      <FAQ />
    </>
  );
}
