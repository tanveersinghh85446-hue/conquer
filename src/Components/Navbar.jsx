import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/memberships", label: "Memberships" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const linkClass = ({ isActive }) =>
    "block border-b-2 py-1 font-display text-lg font-bold uppercase tracking-wider " +
    (isActive ? "border-accent" : "border-transparent hover:border-ink");

  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-paper">
      <div className="wrap flex h-16 items-center justify-between">
        <Link
          to="/"
          onClick={close}
          className="font-display text-3xl font-extrabold uppercase tracking-wide"
        >
          Conquer<span className="text-accent">.</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={linkClass}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-accent">
            Free trial
          </Link>
        </nav>
        <button
          className="p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>
      {open && (
        <nav className="wrap flex flex-col gap-3 border-t border-ink py-5 lg:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={close}
              className={linkClass}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={close} className="btn btn-accent mt-2">
            Free trial
          </Link>
        </nav>
      )}
    </header>
  );
}
