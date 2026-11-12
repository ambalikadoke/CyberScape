import { motion } from "framer-motion";
import { Lightbulb, ChevronRight } from "lucide-react";

export const ZonePanel = ({ zone }) => {
  const { Icon } = zone;
  return (
    <motion.div
      key={zone.id}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
      transition={{ duration: 0.45 }}
      className="glass relative overflow-hidden rounded-3xl p-6 md:p-10"
      style={{ borderColor: `${zone.color}55` }}
      data-testid={`zone-panel-${zone.id}`}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[100px]" style={{ background: `${zone.color}22` }} />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl" style={{ background: `${zone.color}1a`, color: zone.color }}>
          <Icon className="h-7 w-7" />
        </span>
        <div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl" data-testid="zone-panel-title">{zone.name}</h2>
          <p className="text-slate-400">{zone.tagline}</p>
        </div>
      </div>
      <p className="relative mt-6 max-w-3xl leading-relaxed text-slate-300">{zone.overview}</p>

      <p className="relative mt-9 mb-4 font-mono text-xs uppercase tracking-widest text-slate-500">How it works</p>
      <ol className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {zone.flow.map((step, i) => (
          <motion.li key={step} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.08 }} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
            <span className="font-mono text-sm font-semibold" style={{ color: zone.color }}>0{i + 1}</span>
            <span className="text-sm text-slate-200">{step}</span>
            {i < zone.flow.length - 1 && <ChevronRight className="ml-auto hidden h-4 w-4 text-slate-600 lg:block" />}
          </motion.li>
        ))}
      </ol>

      <p className="relative mt-9 mb-4 font-mono text-xs uppercase tracking-widest text-slate-500">Key elements involved</p>
      <div className="relative grid gap-4 md:grid-cols-2">
        {zone.elements.map((el, i) => (
          <motion.div key={el.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.07 }} className="rounded-2xl border border-white/5 bg-[#060a1a]/60 p-5 transition-colors hover:border-white/15" data-testid={`zone-element-${i}`}>
            <h3 className="font-semibold" style={{ color: zone.color }}>{el.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{el.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-8 flex items-start gap-3 rounded-2xl border border-amber-300/20 bg-amber-300/[0.05] p-4 text-sm text-amber-100/90">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
        <span><strong className="text-amber-200">Did you know?</strong> {zone.fact}</span>
      </div>
    </motion.div>
  );
};
