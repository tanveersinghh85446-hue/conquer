import PageHeader from "../Components/PageHeader";
import CTA from "../Components/CTA";

const values = [
  { t: "Form before weight", d: "We'd rather you lift 20 kg well than 60 kg badly. Coaches will slow you down when you need it." },
  { t: "Consistency over intensity", d: "The best program is the one you can still follow in month six." },
  { t: "Everyone starts somewhere", d: "Nobody gets judged for their first week. Or their tenth." },
  { t: "A space that's looked after", d: "Equipment is maintained, racked back and wiped down, so the place stays good to train in." },
];

const floor = ["Free weights and power racks", "Cardio machines", "Functional zone with sleds and ropes", "Stretching and mobility area", "Changing rooms and lockers", "Drinking water on the floor"];

export default function About() {
  return (
    <>
      <PageHeader label="About" title="A gym built around doing the basics well.">
        Conquer is a place to train seriously without the show. Here's what we believe and how we run things.
      </PageHeader>

      <section>
        <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-12">
          <h2 className="text-5xl md:text-6xl lg:col-span-5">Why Conquer exists</h2>
          <div className="space-y-5 text-lg lg:col-span-7">
            <p>Most people don't quit the gym because it's too hard. They quit because nobody showed them what to do, the place didn't feel like it was for them, or they got hurt doing something silly.</p>
            <p>Conquer is set up to fix that. You get a coach who learns your name, a plan written for your goal, and a floor where a first-timer and a five-year regular train side by side.</p>
            <p className="text-muted">We don't sell miracle transformations. We ask you to show up three or four times a week and get a bit better each time. It's slower than the ads promise, and it works.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink">
        <div className="wrap py-16 md:py-24">
          <p className="label">What we stand for</p>
          <div className="mt-8 border-t border-ink">
            {values.map((v, i) => (
              <div key={v.t} className="grid gap-2 border-b border-ink py-6 md:grid-cols-[4rem_20rem_1fr]">
                <span className="font-display text-2xl font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-3xl">{v.t}</h3>
                <p className="text-muted">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-12">
          <h2 className="text-5xl md:text-6xl lg:col-span-5">What's on the floor</h2>
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-7">
            {floor.map((f) => (
              <li key={f} className="flex items-start gap-3 border-b border-paper/20 py-4">
                <span className="mt-2 h-2 w-2 shrink-0 bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}
