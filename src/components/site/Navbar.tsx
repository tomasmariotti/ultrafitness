import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#entrenamientos", label: "Entrenamientos" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#horarios", label: "Horarios" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/70 backdrop-blur-xl border-b border-border"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <span className="relative inline-flex h-10 w-10 items-center justify-center">
            <img src={logo} alt="UltraFitness" className="relative z-10 h-10 w-10 object-contain" />
            <span className="absolute inset-0 rounded-full bg-primary blur-lg opacity-40 group-hover:opacity-70 transition" />
          </span>
          <span className="font-display text-xl tracking-wider">
            ULTRA<span className="text-primary">FITNESS</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5491100000000?text=Hola!%20Quiero%20información%20sobre%20UltraFitness%20💪"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex btn-glow items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground"
        >
          Empezá Hoy
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md glass"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-3 mx-5 rounded-xl glass-strong p-5 animate-fade-up">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base uppercase tracking-wider text-foreground/80 hover:text-primary transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5491100000000"
              className="mt-2 inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground btn-glow"
            >
              Empezá Hoy
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
