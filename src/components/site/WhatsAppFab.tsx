import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5491100000000?text=Hola!%20Quiero%20información%20sobre%20UltraFitness%20💪"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp UltraFitness"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[oklch(0.72_0.18_150)] blur-xl opacity-60 group-hover:opacity-90 transition" />
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.7_0.18_150)] text-white shadow-2xl ring-1 ring-white/20 animate-pulse-glow hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
      </span>
      <span className="hidden md:block absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap rounded-md glass px-3 py-1.5 text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition">
        Escribinos por WhatsApp
      </span>
    </a>
  );
}
