import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

export const Logo = ({ testId = "brand-logo" }) => (
  <Link to="/" data-testid={testId} className="group flex items-center gap-2.5">
    <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/25 to-purple-600/25 ring-1 ring-cyan-400/40 transition-transform duration-300 group-hover:rotate-6">
      <ShieldCheck className="h-5 w-5 text-cyan-300" strokeWidth={2.2} />
    </span>
    <span className="font-display text-xl font-bold tracking-tight">
      Cyber<span className="text-gradient">Scape</span>
    </span>
  </Link>
);
