import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

// Sample answers. Edit them to match your real rules.
const faqs = [
  {
    q: "I've never been to a gym. Is that okay?",
    a: "Yes. Most of our members started from zero. The Foundations program is built for you, and a coach stays with you for the first sessions.",
  },
  {
    q: "Can I try before I join?",
    a: "Yes. Book a free trial session, meet a coach and train on the floor. Join only if you like it.",
  },
  {
    q: "What should I bring?",
    a: "Sports shoes, a towel and a water bottle. Wear something you can move in. We handle the rest.",
  },
  {
    q: "Do you offer personal training?",
    a: "Yes. One-on-one sessions are available with any of our coaches, by appointment.",
  },
  {
    q: "What if I have an injury or a health condition?",
    a: "Tell the coach on day one. We adjust the program around it, and we'll ask you to check with your doctor if needed.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="border-t border-ink">
      <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="label">FAQ</p>
          <h2 className="mt-3 text-5xl md:text-6xl">Before you ask</h2>
          <p className="mt-4 text-muted">Can't find yours? Just message us.</p>
        </div>
        <ul className="border-t border-ink lg:col-span-8">
          {faqs.map((f, i) => (
            <li key={f.q} className="border-b border-ink">
              <button
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span className="text-xl font-semibold">{f.q}</span>
                {open === i ? (
                  <FiMinus className="shrink-0" size={22} />
                ) : (
                  <FiPlus className="shrink-0" size={22} />
                )}
              </button>
              {open === i && <p className="pb-6 pr-10 text-muted">{f.a}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
