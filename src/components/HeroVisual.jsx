import { ShieldCheck, Lock, Wifi, Mail, CreditCard, Fingerprint } from "lucide-react";

const chips = [
  { Icon: Lock, cls: "top-[8%] left-[12%] text-cyan-300", delay: "0s" },
  { Icon: Mail, cls: "top-[18%] right-[6%] text-purple-300", delay: "1s" },
  { Icon: CreditCard, cls: "bottom-[14%] left-[4%] text-blue-300", delay: "2s" },
  { Icon: Wifi, cls: "bottom-[6%] right-[16%] text-cyan-300", delay: "1.5s" },
  { Icon: Fingerprint, cls: "top-[48%] -right-[2%] text-purple-300", delay: "0.5s" },
];

export const HeroVisual = () => (
  <div className="relative mx-auto aspect-square w-full max-w-[460px]" data-testid="hero-visual">
    <div className="absolute inset-[6%] rounded-full border border-cyan-400/20 animate-spin-slow">
      <span className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_16px_#22d3ee]" />
    </div>
    <div className="absolute inset-[20%] rounded-full border border-dashed border-purple-400/30 animate-spin-rev">
      <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_16px_#c084fc]" />
    </div>
    <div className="absolute inset-[33%] rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/30 blur-2xl" />
    <div className="absolute inset-[34%] grid place-items-center rounded-[2rem] border border-cyan-300/30 bg-[#0a0f24]/80 backdrop-blur-xl glow-cyan animate-float">
      <ShieldCheck className="h-1/2 w-1/2 text-cyan-300" strokeWidth={1.4} />
    </div>
    {chips.map(({ Icon, cls, delay }, i) => (
      <div
        key={i}
        className={`glass absolute grid h-12 w-12 place-items-center rounded-2xl animate-float ${cls}`}
        style={{ animationDelay: delay }}
      >
        <Icon className="h-5 w-5" />
      </div>
    ))}
  </div>
);
