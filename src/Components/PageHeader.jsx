export default function PageHeader({ label, title, children }) {
  return (
    <header className="border-b border-ink">
      <div className="wrap py-14 md:py-20">
        <p className="label">{label}</p>
        <h1 className="mt-3 text-[clamp(3rem,8vw,6rem)]">{title}</h1>
        {children && <p className="mt-6 max-w-2xl text-lg text-muted">{children}</p>}
      </div>
    </header>
  );
}
