import { motion } from "framer-motion";
import { CheckCircle2, XCircle, LifeBuoy, X } from "lucide-react";

export const SafetyDetail = ({ cat, onClose }) => {
  const { Icon } = cat;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="glass relative overflow-hidden rounded-3xl p-6 md:p-10"
      style={{ borderColor: `${cat.color}55` }}
      data-testid={`safety-detail-${cat.id}`}
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-[100px]" style={{ background: `${cat.color}20` }} />
      <button onClick={onClose} className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 transition-colors hover:text-white" data-testid="safety-detail-close" aria-label="Close">
        <X className="h-4 w-4" />
      </button>
      <div className="relative flex items-center gap-4">
        <span className="grid h-14 w-14 place-items-center rounded-2xl" style={{ background: `${cat.color}1a`, color: cat.color }}><Icon className="h-7 w-7" /></span>
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">{cat.title}</h2>
          <p className="text-slate-400">{cat.summary}</p>
        </div>
      </div>
      <div className="relative mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-emerald-300/80">Practical actions</p>
          <ul className="space-y-3">
            {cat.actions.map((a, i) => (
              <motion.li key={a} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.06 }} className="flex gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-sm text-slate-200">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> {a}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-rose-300/80">Avoid</p>
            <ul className="space-y-3">
              {cat.avoid.map((a) => (
                <li key={a} className="flex gap-3 rounded-2xl border border-rose-400/10 bg-rose-500/[0.04] p-4 text-sm text-slate-300">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" /> {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] p-5 text-sm leading-relaxed text-cyan-50/90">
            <p className="mb-2 flex items-center gap-2 font-semibold text-cyan-200"><LifeBuoy className="h-4 w-4" /> If something goes wrong</p>
            {cat.respond}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
