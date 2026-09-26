import { Link } from "react-router-dom";

export default function CTA({
  title = "Your first session is on us.",
  text = "Come in, meet a coach, try the floor. No pressure, no hard sell.",
  button = "Book a free trial",
}) {
  return (
    <section className="bg-accent text-paper">
      <div className="wrap flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)]">{title}</h2>
          <p className="mt-4 text-lg">{text}</p>
        </div>
        <Link to="/contact" className="btn btn-dark shrink-0">{button}</Link>
      </div>
    </section>
  );
}
