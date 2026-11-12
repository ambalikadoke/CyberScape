import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Flag, ShieldCheck, ChevronDown } from "lucide-react";
import { STORIES } from "@/data/scamStories";

const StoryCard = ({ s, open, onToggle }) => (
  <div className="glass overflow-hidden rounded-3xl" style={open ? { borderColor: `${s.color}66` } : undefined} data-testid={`scam-story-${s.id}`}>
    <button onClick={onToggle} className="flex w-full items-start justify-between gap-4 p-6 text-left" aria-expanded={open} data-testid={`scam-story-toggle-${s.id}`}>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: s.color }}>{s.category}</p>
        <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
      </div>
      <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} data-testid={`scam-story-body-${s.id}`}>
          <div className="space-y-4 px-6 pb-6 text-sm leading-relaxed">
            <p className="text-slate-300"><BookOpen className="mr-2 inline h-4 w-4 text-slate-400" />{s.happened}</p>
            <div className="rounded-2xl border border-amber-300/15 bg-amber-300/[0.04] p-4">
              <p className="mb-2 flex items-center gap-2 font-semibold text-amber-200"><Flag className="h-4 w-4" /> Red flags</p>
              <ul className="list-disc space-y-1 pl-5 text-slate-300">{s.flags.map((f) => <li key={f}>{f}</li>)}</ul>
            </div>
            <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.05] p-4">
              <p className="mb-2 flex items-center gap-2 font-semibold text-emerald-300"><ShieldCheck className="h-4 w-4" /> How it was stopped</p>
              <p className="text-slate-300">{s.stopped}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const ScamStories = () => {
  const [open, setOpen] = useState(STORIES[0].id);
  return (
    <section className="pt-20" data-testid="scam-stories-section">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-rose-300/80">Learn from real patterns</p>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">Scam Story Cards</h2>
      <p className="mt-3 max-w-2xl text-slate-400">Short stories based on common fraud patterns reported in India. Names are illustrative. See how each scam started, the warning signs, and how it was stopped.</p>
      <div className="mt-10 grid items-start gap-5 md:grid-cols-2">
        {STORIES.map((s) => <StoryCard key={s.id} s={s} open={open === s.id} onToggle={() => setOpen(open === s.id ? null : s.id)} />)}
      </div>
    </section>
  );
};
