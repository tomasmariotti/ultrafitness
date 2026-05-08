import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Dumbbell,
  Bike,
  Flame,
  Users,
  Sparkles,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  ArrowRight,
  CheckCircle2,
  Quote,
  Activity,
  HeartPulse,
} from "lucide-react";
import heroGym from "@/assets/hero-gym.jpg";
import gymMachines from "@/assets/gym-machines.jpg";
import gymWeights from "@/assets/gym-weights.jpg";
import gymSpinning from "@/assets/gym-spinning.jpg";
import gymTraining from "@/assets/gym-training.jpg";
import gymFunctional from "@/assets/gym-functional.jpg";
import ctaBg from "@/assets/cta-bg.jpg";
import { Navbar } from "@/components/site/Navbar";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UltraFitness — Gimnasio en Berazategui Oeste | Musculación, Spinning e Indoor Bike" },
      {
        name: "description",
        content:
          "UltraFitness, el gimnasio premium de Berazategui Oeste. Musculación, entrenamiento de fuerza, spinning e indoor bike. Coaches atentos, ambiente familiar y máquinas modernas.",
      },
      { name: "keywords", content: "gimnasio Berazategui, gimnasio Berazategui Oeste, musculación Berazategui, entrenamiento de fuerza, spinning Berazategui, indoor bike, UltraFitness" },
      { property: "og:title", content: "UltraFitness — Gimnasio Premium en Berazategui Oeste" },
      { property: "og:description", content: "Donde tu mejor versión empieza. Entrenamiento serio, ambiente familiar y atención personalizada." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const WHATSAPP = "https://wa.me/5491100000000?text=Hola!%20Quiero%20información%20sobre%20UltraFitness%20💪";

function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      style={{
        background:
          "radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), oklch(0.62 0.24 27 / 0.10), transparent 60%)",
      }}
    />
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroGym}
          alt="Interior cinematográfico del gimnasio UltraFitness en Berazategui"
          width={1920}
          height={1280}
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      {/* Floating blur lights */}
      <div aria-hidden className="absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[140px] animate-drift -z-10" />
      <div aria-hidden className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[120px] animate-drift -z-10" style={{ animationDelay: "-6s" }} />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-32 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 mb-6 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-blink" />
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/80">Berazategui Oeste · Argentina</span>
          </div>

          <h1 className="font-display text-[14vw] md:text-[8.5vw] lg:text-[7.5rem] leading-[0.9] tracking-tight uppercase animate-fade-up">
            <span className="block text-gradient">El lugar donde</span>
            <span className="block">
              <span className="text-accent-gradient">tu mejor versión</span>
            </span>
            <span className="block text-foreground">empieza.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Entrenamiento de fuerza, atención personalizada y un ambiente que te impulsa a progresar todos los días.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground">
              Quiero entrenar
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#instalaciones" className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] hover:bg-white/10 transition">
              Ver instalaciones
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <StatCard icon={<Star className="h-4 w-4" />} value={<><AnimatedCounter to={4.9} decimals={1} />⭐</>} label="Google Reviews" />
            <StatCard icon={<Users className="h-4 w-4" />} value={<>+<AnimatedCounter to={53} />
            </>} label="Reseñas reales" />
            <StatCard icon={<HeartPulse className="h-4 w-4" />} value="Familiar" label="Ambiente" />
            <StatCard icon={<Sparkles className="h-4 w-4" />} value="Atentos" label="Coaches" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/70 flex flex-col items-center gap-2">
        Scroll
        <span className="block h-8 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: React.ReactNode; label: string }) {
  return (
    <div className="glass rounded-xl p-4 hover-tilt">
      <div className="flex items-center gap-2 text-primary text-xs uppercase tracking-widest">
        {icon}
        <span>{label}</span>
      </div>
      <div className="mt-2 text-2xl md:text-3xl font-display tracking-tight">{value}</div>
    </div>
  );
}

function Marquee() {
  const items = ["Disciplina", "Energía", "Progreso", "Comunidad", "Fuerza", "Constancia"];
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="relative border-y border-border bg-surface/40 overflow-hidden py-5">
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {repeated.map((t, i) => (
          <span key={i} className="text-2xl md:text-4xl font-display uppercase tracking-wider text-foreground/60 flex items-center gap-12">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const features = [
    { icon: <Users className="h-5 w-5" />, title: "Atención personalizada", desc: "Te conocemos por tu nombre y entendemos tus objetivos." },
    { icon: <Dumbbell className="h-5 w-5" />, title: "Equipamiento moderno", desc: "Máquinas premium, peso libre y zonas amplias." },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "Coaches profesionales", desc: "Corrección de posturas y planes pensados para vos." },
    { icon: <Flame className="h-5 w-5" />, title: "Ambiente motivador", desc: "Energía real, comunidad familiar, progreso constante." },
  ];
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal relative">
            <div className="relative rounded-2xl overflow-hidden glow-border">
              <img
                src={gymTraining}
                alt="Entrenamiento de fuerza con barra en UltraFitness"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-4 md:right-8 glass-strong rounded-xl p-5 max-w-[260px] hidden sm:block">
              <div className="flex items-center gap-2 text-primary">
                <Activity className="h-4 w-4" />
                <span className="text-[10px] uppercase tracking-[0.25em]">Progreso real</span>
              </div>
              <p className="mt-2 text-sm text-foreground/85">
                Personas que entran a probar… y se quedan por años.
              </p>
            </div>
          </div>

          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Sobre UltraFitness</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl uppercase leading-[0.95]">
              No es un gimnasio.<br />
              Es <span className="text-accent-gradient">tu lugar</span>.
            </h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl">
              En UltraFitness creemos que entrenar bien empieza por sentirse acompañado. Por eso construimos un espacio
              donde los dueños están presentes, los coaches corrigen tus posturas, y cada persona que entra se siente
              parte. No te perdés en la multitud: progresás, te motivan y volvés con ganas.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f.title} className="glass rounded-xl p-5 hover-tilt group">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                    {f.icon}
                  </div>
                  <h3 className="mt-4 font-display text-lg uppercase tracking-wide">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  const items = [
    { src: gymMachines, label: "Máquinas premium", className: "md:col-span-2 md:row-span-2 h-[400px] md:h-full" },
    { src: gymWeights, label: "Peso libre", className: "h-[260px]" },
    { src: gymSpinning, label: "Indoor Bike", className: "h-[260px]" },
    { src: gymFunctional, label: "Zona funcional", className: "h-[260px] md:col-span-2" },
  ];
  return (
    <section id="instalaciones" className="relative py-28 md:py-36 bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Instalaciones</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl uppercase">
              Espacios <span className="text-accent-gradient">pensados</span><br /> para rendir.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Zonas amplias, máquinas modernas y un ambiente impecable. Cada rincón está cuidado para que entrenes mejor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-rows-[auto] gap-4 reveal">
          {items.map((it, i) => (
            <a
              key={i}
              href="#contacto"
              className={`group relative overflow-hidden rounded-2xl glow-border ${it.className}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 group-hover:opacity-95 transition" />
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between">
                <div>
                  <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-primary">UltraFitness</span>
                  <h3 className="font-display text-2xl md:text-3xl uppercase">{it.label}</h3>
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trainings() {
  const cards = [
    { icon: <Dumbbell />, title: "Musculación", desc: "Equipamiento completo y zonas amplias para entrenar a tu ritmo." },
    { icon: <Flame />, title: "Entrenamiento de fuerza", desc: "Trabajo serio de fuerza con técnica y progresión." },
    { icon: <Bike />, title: "Indoor Bike", desc: "Bicis modernas, intensidad alta, energía pura." },
    { icon: <Activity />, title: "Spinning", desc: "Clases motivadoras con música y comunidad." },
    { icon: <Sparkles />, title: "Funcional", desc: "Próximamente — entrenamiento integral y dinámico.", soon: true },
  ];
  return (
    <section id="entrenamientos" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Entrenamientos</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl uppercase">
            Encontrá <span className="text-accent-gradient">tu disciplina</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Más de una forma de progresar. Combinalas para entrenar como vos querés.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
          {cards.map((c) => (
            <div key={c.title} className="relative glass rounded-2xl p-7 hover-tilt overflow-hidden group">
              <div aria-hidden className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.5_0.22_22)] text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.62_0.24_27/0.6)]">
                {c.icon}
              </div>
              <h3 className="relative mt-6 font-display text-2xl uppercase tracking-wide">
                {c.title}
                {c.soon && <span className="ml-2 align-middle text-[10px] uppercase tracking-widest rounded-full bg-primary/20 text-primary px-2 py-0.5">Próximamente</span>}
              </h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { name: "Martín G.", text: "Desde el primer día me sentí cómodo. El ambiente es increíble y todos te ayudan a progresar." },
  { name: "Camila R.", text: "Los coaches están siempre atentos y motivan muchísimo. Cambié mi forma de entrenar." },
  { name: "Lucas P.", text: "Las instalaciones son excelentes y las máquinas están impecables. Recomendado 100%." },
  { name: "Sofía M.", text: "Se nota que realmente les importa cada persona que entrena. Me siento parte." },
  { name: "Diego S.", text: "Muy buena energía y ambiente familiar. Después de probar varios, me quedo en UltraFitness." },
  { name: "Julieta A.", text: "Limpio, moderno, atento. El gimnasio que estaba buscando en Berazategui." },
];

function Reviews() {
  return (
    <section id="resenas" className="relative py-28 md:py-36 bg-surface/40 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-radial-glow" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-xs uppercase tracking-[0.25em]">4.9 / 5 · +53 reseñas reales</span>
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl uppercase">
            Lo que dicen <span className="text-accent-gradient">de nosotros</span>.
          </h2>
        </div>

        <div className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <article key={i} className="relative glass-strong rounded-2xl p-7 hover-tilt">
              <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/30" />
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-[oklch(0.45_0.18_22)] flex items-center justify-center font-display text-lg">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold">{r.name}</span>
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex gap-0.5 mt-0.5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-3 w-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-foreground/85 leading-relaxed">"{r.text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  const isOpenNow = (() => {
    const d = new Date();
    const day = d.getDay(); // 0 sun
    const h = d.getHours();
    if (day === 0) return false;
    if (day === 6) return h >= 8 && h < 14;
    return h >= 7 && h < 22;
  })();

  const rows = [
    { d: "Lunes a Viernes", h: "07:00 — 22:00" },
    { d: "Sábados", h: "08:00 — 14:00" },
    { d: "Domingos", h: "Cerrado", off: true },
  ];

  return (
    <section id="horarios" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Horarios</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl uppercase leading-[0.95]">
            Abierto <br /> cuando <span className="text-accent-gradient">vos podés</span>.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            Llegá temprano antes del trabajo o entrená al final del día. Te esperamos en Av. 14 1930, Berazategui Oeste.
          </p>

          <div className={`mt-8 inline-flex items-center gap-3 rounded-full glass-strong px-4 py-2.5`}>
            <span className={`relative flex h-2.5 w-2.5`}>
              {isOpenNow && <span className="absolute inline-flex h-full w-full rounded-full bg-[oklch(0.7_0.18_150)] opacity-75 animate-ping" />}
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isOpenNow ? "bg-[oklch(0.7_0.18_150)]" : "bg-muted-foreground"}`} />
            </span>
            <span className="text-sm font-semibold uppercase tracking-wider">
              {isOpenNow ? "Abierto ahora" : "Cerrado ahora"}
            </span>
          </div>
        </div>

        <div className="reveal">
          <div className="rounded-2xl glass-strong p-2 glow-border">
            <div className="rounded-xl bg-background/40 p-6">
              <div className="flex items-center gap-2 text-primary mb-5">
                <Clock className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.25em]">Atención semanal</span>
              </div>
              <ul className="divide-y divide-border">
                {rows.map((r) => (
                  <li key={r.d} className="flex items-center justify-between py-4">
                    <span className="font-display uppercase tracking-wider text-lg md:text-xl">{r.d}</span>
                    <span className={`font-mono text-sm md:text-base ${r.off ? "text-muted-foreground" : "text-foreground"}`}>
                      {r.h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="contacto" className="relative py-28 md:py-36 bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Ubicación</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl uppercase">
            Vení a <span className="text-accent-gradient">conocernos</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="reveal lg:col-span-3 rounded-2xl overflow-hidden glow-border h-[420px] relative">
            <iframe
              title="Mapa UltraFitness"
              src="https://www.google.com/maps?q=Av.%2014%201930,%20Berazategui%20Oeste,%20Buenos%20Aires&output=embed"
              loading="lazy"
              className="absolute inset-0 h-full w-full grayscale contrast-125 invert-[0.92] hue-rotate-180"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="reveal lg:col-span-2 glass-strong rounded-2xl p-7 flex flex-col">
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.25em]">Dirección</span>
            </div>
            <p className="mt-3 font-display text-2xl uppercase leading-tight">
              Av. 14 1930<br />
              Berazategui Oeste<br />
              <span className="text-muted-foreground text-base normal-case">Provincia de Buenos Aires, Argentina</span>
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                Lun–Vie 07–22 · Sáb 08–14
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                +54 9 11 0000-0000
              </div>
            </div>

            <div className="mt-auto pt-8 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Av.+14+1930+Berazategui+Oeste"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] hover:bg-white/10 transition"
              >
                Cómo llegar <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-glow inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={ctaBg} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      <div className="reveal mx-auto max-w-4xl px-5 md:px-8 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Es ahora</span>
        <h2 className="mt-4 font-display text-5xl md:text-8xl uppercase leading-[0.9]">
          Tu cambio empieza con<br />
          <span className="text-accent-gradient">una decisión.</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          Entrená en un lugar donde realmente te impulsan a mejorar.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-base font-bold uppercase tracking-[0.2em] text-primary-foreground btn-glow animate-pulse-glow"
        >
          Empezar ahora
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border bg-background pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-display text-2xl tracking-wider">
              ULTRA<span className="text-primary">FITNESS</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Disciplina · Energía · Progreso. El gimnasio premium de Berazategui Oeste.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://instagram.com" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass hover:bg-primary hover:border-primary transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass hover:bg-primary hover:border-primary transition">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.25em] text-primary">Visitanos</h4>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Av. 14 1930<br />Berazategui Oeste<br />Buenos Aires, AR
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.25em] text-primary">Horarios</h4>
            <ul className="mt-4 text-sm text-muted-foreground space-y-1.5">
              <li>Lun–Vie · 07:00–22:00</li>
              <li>Sábados · 08:00–14:00</li>
              <li>Domingos · Cerrado</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-wrap justify-between items-center gap-3 text-xs text-muted-foreground uppercase tracking-widest">
          <span>© {new Date().getFullYear()} UltraFitness</span>
          <span className="text-foreground/60">Disciplina · Energía · Progreso</span>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  useReveal();
  return (
    <main className="relative">
      <MouseGlow />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Facilities />
      <Trainings />
      <Reviews />
      <Schedule />
      <Location />
      <FinalCTA />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
