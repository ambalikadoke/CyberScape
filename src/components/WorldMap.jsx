import { Globe2 } from "lucide-react";
import { ZONES } from "@/data/digitalWorld";

const POS = ZONES.map((_, i) => {
  const a = (-90 + i * 72) * (Math.PI / 180);
  return { x: 50 + 40 * Math.cos(a), y: 50 + 40 * Math.sin(a) };
});

export const WorldMap = ({ active, onSelect }) => (
  <div className="relative mx-auto aspect-square w-full max-w-[560px]" data-testid="digital-world-map">
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
      <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(99,102,241,0.15)" strokeWidth="0.3" />
      <circle cx="50" cy="50" r="28" fill="none" stroke="rgba(6,182,212,0.12)" strokeWidth="0.3" strokeDasharray="1 1.5" />
      {POS.map((p, i) => {
        const on = ZONES[i].id === active;
        return (
          <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} className="flow-line" stroke={on ? ZONES[i].color : "rgba(148,163,184,0.25)"} strokeWidth={on ? 0.6 : 0.3} style={{ transition: "stroke 0.4s" }} />
        );
      })}
    </svg>

    <div className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-600/40 blur-2xl" />
      <div className="relative grid h-full w-full place-items-center rounded-full border border-cyan-300/40 bg-[#0a0f24]/90 glow-cyan">
        <Globe2 className="h-1/2 w-1/2 text-cyan-200 animate-spin-slow" strokeWidth={1.1} />
      </div>
    </div>

    {ZONES.map((z, i) => {
      const on = z.id === active;
      const { Icon } = z;
      return (
        <button
          key={z.id}
          onClick={() => onSelect(z.id)}
          data-testid={`digital-zone-${z.id}`}
          aria-pressed={on}
          className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 focus:outline-none"
          style={{ left: `${POS[i].x}%`, top: `${POS[i].y}%` }}
        >
          <span
            className={`relative grid h-14 w-14 place-items-center rounded-2xl border backdrop-blur-xl transition-[transform,box-shadow,background-color] duration-300 group-hover:scale-110 sm:h-16 sm:w-16 ${on ? "scale-110" : ""}`}
            style={{
              color: z.color,
              borderColor: on ? z.color : "rgba(99,102,241,0.3)",
              background: on ? `${z.color}22` : "rgba(13,19,41,0.85)",
              boxShadow: on ? `0 0 30px -4px ${z.color}` : "none",
            }}
          >
            {on && <span className="pulse-ring absolute inset-0 rounded-2xl" style={{ color: z.color }} />}
            <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
          </span>
          <span className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-medium sm:text-xs ${on ? "bg-white/10 text-white" : "text-slate-400"}`}>{z.name}</span>
        </button>
      );
    })}
  </div>
);
