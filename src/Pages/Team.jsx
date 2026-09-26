import PageHeader from "../Components/PageHeader";
import CTA from "../Components/CTA";

// SAMPLE DATA. Replace with your real coaches. Add `photo: "/team/name.jpg"` (file in /public/team) to show a photo.
const team = [
  {
    photo: "/Trainer.AVIF",
    name: "Aarav Mehta",
    role: "Head Coach",
    focus: "Strength and programming",
    bio: "Runs the floor and writes most of our programs. Cares a lot about squat depth and very little about ego lifting.",
  },
  {
    photo: "/Trainer1.AVIF",
    name: "Simran Kaur",
    role: "Fitness Coach",
    focus: "Fat loss and conditioning",
    bio: "Leads the group classes. Keeps sessions hard, short and well organised.",
  },
  {
    photo: "/Trainer2.AVIF",
    name: "Rohan Verma",
    role: "Personal Trainer",
    focus: "Beginners and injury comebacks",
    bio: "Patient with first-timers. Good at making a scary exercise feel easy to start.",
  },
  {
    photo: "/Trainer3.AVIF",
    name: "Neha Sharma",
    role: "Mobility Coach",
    focus: "Mobility and recovery",
    bio: "Helps stiff backs and tight hips move better so the rest of your training goes smoothly.",
  },
];

const initials = (n) =>
  n
    .split(" ")
    .map((w) => w[0])
    .join("");

export default function Team() {
  return (
    <>
      <PageHeader label="Team" title="The people on the floor.">
        Every coach here trains too. Say hi when you come in.
      </PageHeader>

      <section className="wrap py-16 md:py-24">
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article key={m.name}>
              <div className="flex aspect-4/5 items-end bg-ink p-5 font-display text-8xl font-extrabold text-paper">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  initials(m.name)
                )}
              </div>
              <h2 className="mt-5 text-3xl">{m.name}</h2>
              <p className="label mt-2">{m.role}</p>
              <p className="mt-3 font-semibold">{m.focus}</p>
              <p className="mt-1 text-muted">{m.bio}</p>
            </article>
          ))}
        </div>
        <p className="mt-16 max-w-xl text-lg">
          Want to train with a particular coach? Just mention it when you book
          your trial.
        </p>
      </section>

      <CTA />
    </>
  );
}
