import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SafetyDetail } from "@/components/SafetyDetail";
import { CATEGORIES } from "@/data/safetyHub";
import { ScamStories } from "@/components/ScamStories";
import { ChecklistBanner, PrintChecklist } from "@/components/Checklist";

const SPAN = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

export default function SafetyHub() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const cat = CATEGORIES.find((c) => c.id === active);

  const open = (id) => {
    setActive((cur) => (cur === id ? null : id));
    setTimeout(() => ref.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 pt-14 md:pt-20 lg:px-8" data-testid="safety-hub-page">
      <PageHeader
        eyebrow="Protect · Act"
        title={<>Safety <span className="text-gradient">Hub</span></>}
        desc="Practical actions you can take today. Choose a category to open clear, step-by-step guidance for protecting yourself online."
        testId="safety-hub-header"
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {CATEGORIES.map((c, i) => {
          const { Icon } = c;
          const on = c.id === active;
          return (
            <motion.button
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onClick={() => open(c.id)}
              data-testid={`safety-card-${c.id}`}
              aria-expanded={on}
              className={`glass group relative overflow-hidden rounded-3xl p-7 text-left transition-[transform,border-color] duration-300 hover:-translate-y-1 ${SPAN[i]} ${i === 4 ? "md:col-span-2" : ""}`}
              style={on ? { borderColor: c.color, boxShadow: `0 0 36px -10px ${c.color}` } : undefined}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: `${c.color}30` }} />
              <div className="relative flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: `${c.color}1a`, color: c.color }}><Icon className="h-6 w-6" /></span>
                <ArrowUpRight className={`h-5 w-5 text-slate-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${on ? "rotate-90 text-white" : ""}`} />
              </div>
              <h3 className="relative mt-10 text-xl font-semibold">{c.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{c.summary}</p>
              <p className="relative mt-5 font-mono text-[11px] uppercase tracking-widest" style={{ color: c.color }}>{c.actions.length} key actions</p>
            </motion.button>
          );
        })}
      </div>
      <div ref={ref} className="scroll-mt-24 pt-8">
        <AnimatePresence mode="wait">
          {cat && <SafetyDetail key={cat.id} cat={cat} onClose={() => setActive(null)} />}
        </AnimatePresence>
      </div>
      <ScamStories />
      <ChecklistBanner />
      <PrintChecklist />
    </div>
  );
}
