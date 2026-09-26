import { FiCheck } from "react-icons/fi";
import PageHeader from "../Components/PageHeader";
import FAQ from "../Components/FAQ";
import CTA from "../Components/CTA";
import { plans, addons } from "../data/plans";

export default function Memberships() {
  return (
    <>
      <PageHeader
        label="Memberships"
        title="Simple pricing, no hidden charges."
      >
        Pick a plan below, or come in and a coach will help you choose. Prices
        shown are sample rates — ask us for the current ones.
      </PageHeader>

      <section className="wrap py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                "flex flex-col border p-7 " +
                (p.popular
                  ? "border-accent bg-accent text-paper"
                  : "border-ink")
              }
            >
              {p.popular && (
                <span className="mb-4 inline-block self-start bg-ink px-3 py-1 font-display text-sm font-bold uppercase tracking-widest text-paper">
                  Most popular
                </span>
              )}
              <h2 className="text-3xl">{p.name}</h2>
              <p
                className={
                  "mt-2 " + (p.popular ? "text-paper/85" : "text-muted")
                }
              >
                {p.blurb}
              </p>
              <p className="mt-6">
                <span className="font-display text-5xl font-extrabold">
                  ₹{p.price}
                </span>
                <span className={p.popular ? "text-paper/85" : "text-muted"}>
                  {" "}
                  {p.period}
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <FiCheck
                      className={
                        "mt-1 shrink-0 " + (p.popular ? "" : "text-accent")
                      }
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={
                  "btn mt-8 " + (p.popular ? "btn-dark" : "btn-accent")
                }
              >
                Choose {p.name}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-ink pt-10">
          <p className="label">Add-ons</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {addons.map((a) => (
              <div key={a.name} className="border border-ink p-5">
                <h3 className="text-2xl">{a.name}</h3>
                <p className="mt-2 text-muted">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTA
        title="Still deciding?"
        text="Come in for a free trial first. Pick a plan only once you know you like it here."
        button="Book a free trial"
      />
    </>
  );
}
