import PageHeader from "../Components/PageHeader";
import CTA from "../Components/CTA";
import { programs } from "../data/programs";

const steps = [
  { t: "Book a trial", d: "Message us or fill the form. Pick a time that suits you." },
  { t: "Talk to a coach", d: "Ten minutes about your goals, injuries and schedule. Then you train." },
  { t: "Get your plan", d: "If you like it, we set you up with the right program and a start date." },
];

export default function Programs() {
  return (
    <>
      <PageHeader label="Programs" title="Pick the one closest to your goal.">
        Not sure which one? Book a trial and a coach will point you to the right program.
      </PageHeader>

      <section className="wrap">
        {programs.map((p, i) => (
          <article key={p.id} id={p.id} className="grid gap-6 border-b border-ink py-10 last:border-b-0 lg:grid-cols-12">
            <span className="font-display text-2xl font-bold text-accent lg:col-span-1">{String(i + 1).padStart(2, "0")}</span>
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl">{p.name}</h2>
              <p className="mt-4 text-lg">{p.description}</p>
              <p className="mt-4 text-muted"><span className="font-semibold text-ink">Good for:</span> {p.who}</p>
            </div>
            <dl className="divide-y divide-ink/20 self-start border border-ink px-5 lg:col-span-4">
              {[["Level", p.level], ["Sessions", p.sessions], ["Length", p.length]].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-3">
                  <dt className="text-muted">{k}</dt>
                  <dd className="font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </section>

      <section className="bg-ink text-paper">
        <div className="wrap py-16 md:py-24">
          <h2 className="text-5xl md:text-6xl">How joining works</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.t} className="border-t border-paper/30 pt-5">
                <span className="font-display text-2xl font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-3xl">{s.t}</h3>
                <p className="mt-2 text-paper/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
