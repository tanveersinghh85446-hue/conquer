// src/Pages/Home.jsx  (poora file replace kar do isse)
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { site } from "../data/site";
import { programs } from "../data/programs";
import FAQ from "../Components/FAQ";
import CTA from "../Components/CTA";
import HeroSlider from "../Components/HeroSlider";

const rules = [
  {
    t: "Coaches on the floor",
    d: "Someone is always watching your form, not scrolling their phone. Small corrections early save you months of bad habits.",
  },
  {
    t: "A plan, not a guess",
    d: "You get a written plan for your goal. You always know what you're doing today and why.",
  },
  {
    t: "Room to train",
    d: "We keep batches manageable, so you spend your hour lifting and not waiting for a rack.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink">
        <HeroSlider />
        <div className="wrap relative z-10 grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label">{site.tagline}</p>
            <h1 className="mt-4 text-[clamp(3.25rem,9vw,7.5rem)] text-paper">
              Get stronger than you were last month.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-paper/80">
              Conquer is a gym for people who want to train properly. Good
              coaching, well-kept equipment and a floor where nobody is judging
              what you lift.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-accent">
                Book a free trial
              </Link>
              <Link
                to="/programs"
                className="btn border-paper text-paper hover:bg-paper hover:text-ink"
              >
                See programs
              </Link>
            </div>
          </div>
          <aside className="border border-paper/40 bg-ink/40 p-6 backdrop-blur-sm lg:col-span-4">
            <p className="label">Opening hours</p>
            <dl className="mt-3 divide-y divide-paper/20 text-paper">
              {site.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4 py-3">
                  <dt className="font-semibold">{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-paper/70">Call us: {site.phone}</p>
          </aside>
        </div>
      </section>

      <section>
        <div className="wrap py-16 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="label">Programs</p>
              <h2 className="mt-3 text-5xl md:text-6xl">
                What you can train for
              </h2>
            </div>
            <Link
              to="/programs"
              className="hidden items-center gap-2 font-display text-lg font-bold uppercase tracking-wider hover:text-accent md:inline-flex"
            >
              All programs <FiArrowRight />
            </Link>
          </div>
          <ol className="mt-10 border-t border-ink">
            {programs.map((p, i) => (
              <li key={p.id} className="border-b border-ink">
                <Link
                  to="/programs"
                  className="group grid grid-cols-[3rem_1fr] items-baseline gap-x-4 gap-y-1 py-6 md:grid-cols-[4rem_17rem_1fr]"
                >
                  <span className="font-display text-2xl font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-3xl font-bold uppercase group-hover:text-accent">
                    {p.name}
                  </span>
                  <span className="col-start-2 text-muted md:col-start-3">
                    {p.short}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label text-paper/70">How we work</p>
            <h2 className="mt-3 text-5xl md:text-6xl">
              Simple rules for the floor
            </h2>
          </div>
          <div className="divide-y divide-paper/20 border-y border-paper/20 lg:col-span-7">
            {rules.map((r, i) => (
              <div
                key={r.t}
                className="grid gap-2 py-6 sm:grid-cols-[4rem_1fr]"
              >
                <span className="font-display text-2xl font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-3xl">{r.t}</h3>
                  <p className="mt-2 text-paper/70">{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
