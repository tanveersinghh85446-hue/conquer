import { useState } from "react";
import PageHeader from "../Components/PageHeader";
import CTA from "../Components/CTA";

// Put your photos in /public/gallery and set src, e.g. src: "/gallery/floor-1.jpg". Empty src shows a plain placeholder.
const photos = [
  { src: "/Freeweightsarea.AVIF", alt: "Free weights area", category: "Floor" },
  { src: "/PowerRack.AVIF", alt: "Power racks", category: "Floor" },
  { src: "/Cardiozone.AVIF", alt: "Cardio zone", category: "Floor" },
  { src: "/Functionalzone.AVIF", alt: "Functional zone", category: "Floor" },
  { src: "/Morningconditioningclass.AVIF", alt: "Morning conditioning class", category: "Classes" },
  { src: "/Kettlebellclass.AVIF", alt: "Kettlebell class", category: "Classes" },
  { src: "/Mobilitysession.AVIF", alt: "Mobility session", category: "Classes" },
  { src: "/Memberchallengeday.AVIF", alt: "Member challenge day", category: "Events" },
  { src: "/Communityworkout.AVIF", alt: "Community workout", category: "Events" },
];
const categories = ["All", "Floor", "Classes", "Events"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const shown = photos.filter((p) => active === "All" || p.category === active);

  return (
    <>
      <PageHeader label="Gallery" title="Inside Conquer.">
        The floor, the classes and the people who turn up.
      </PageHeader>

      <section className="wrap py-12 md:py-16">
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={
                "border border-ink px-4 py-2 font-display text-lg font-bold uppercase tracking-wider transition-colors duration-200 " +
                (active === c ? "bg-ink text-paper" : "hover:bg-ink hover:text-paper")
              }
            >
              {c}
            </button>
          ))}
        </div>

        <div key={active} className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <figure
              key={p.alt}
              className="group animate-fadeUp"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex aspect-4/3 items-center justify-center overflow-hidden border border-ink/30 bg-ink/10 text-muted">
                {p.src ? (
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                ) : (
                  "Photo"
                )}
              </div>
              <figcaption className="mt-3 flex justify-between gap-4">
                <span>{p.alt}</span>
                <span className="text-muted">{p.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}