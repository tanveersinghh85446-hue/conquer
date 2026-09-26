import { Link } from "react-router-dom";
import { site } from "../data/site";

const pages = [
  "About",
  "Programs",
  "Memberships",
  "Team",
  "Gallery",
  "Contact",
];
const head =
  "font-display text-sm font-bold uppercase tracking-widest text-paper/70";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-4xl font-extrabold uppercase">
            Conquer<span className="text-accent">.</span>
          </p>
          <p className="mt-3 max-w-xs text-paper/70">
            {site.tagline}. Train properly, get a bit better every week.
          </p>
        </div>
        <div>
          <p className={head}>Pages</p>
          <ul className="mt-4 space-y-2">
            {pages.map((p) => (
              <li key={p}>
                <Link to={`/${p.toLowerCase()}`} className="hover:underline">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className={head}>Visit</p>
          <address className="mt-4 space-y-1 not-italic">
            {site.address.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </address>
          <div className="mt-3 text-paper/70">
            {site.hours.map((h) => (
              <p key={h.days}>
                {h.days}: {h.time}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className={head}>Talk to us</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="hover:underline"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {site.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/20">
        <p className="wrap py-5 text-sm text-paper/70">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
