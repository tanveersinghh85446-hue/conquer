// src/Components/HeroSlider.jsx  (naya file)
import { useEffect, useState } from "react";

// Put your images in /public/hero and list their paths here.
const slides = ["/Cardiozone.AVIF", "/Communityworkout.AVIF", "/Freeweightsarea.AVIF", "/Functionalzone.AVIF","/Kettlebellclass.AVIF","/Memberchallengeday.AVIF"];

export default function HeroSlider({ interval = 4000 }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), interval);
    return () => clearInterval(t);
  }, [interval]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
          style={{ opacity: idx === i ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-0 bg-ink/70" />
    </div>
  );
}
