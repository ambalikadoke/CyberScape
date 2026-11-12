import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Flag, ShieldCheck, ArrowRight } from "lucide-react";
import { STORIES } from "@/data/scamStories";

const todayIndex = () => {
  const d = new Date();
  const days = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  return days % STORIES.length;
};

export const StoryOfTheDay = () => {
  const s = STORIES[todayIndex()];
  const date = new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="pt-24"
      data-testid="story-of-the-day"
    >
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300/80"><CalendarDays className="h-4 w-4" /> <span data-testid="story-of-the-day-date">{date}</span></p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">Scam Story of the Day</h2>
        </div>
        <Link to="/safety-hub" data-testid="story-of-the-day-more-btn" className="group inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300">
          See all scam stories <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="glass relative overflow-hidden rounded-3xl p-7 md:p-10" style={{ borderColor: `${s.color}55` }} data-testid={`story-of-the-day-${s.id}`}>
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[100px]" style={{ background: `${s.color}22` }} />
        <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: s.color }}>{s.category}</p>
            <h3 className="mt-2 text-2xl font-semibold" data-testid="story-of-the-day-title">{s.title}</h3>
            <p className="mt-4 leading-relaxed text-slate-300">{s.happened}</p>
            <div className="mt-6 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.05] p-5 text-sm">
              <p className="mb-2 flex items-center gap-2 font-semibold text-emerald-300"><ShieldCheck className="h-4 w-4" /> How it was stopped</p>
              <p className="leading-relaxed text-slate-300">{s.stopped}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-amber-300/15 bg-amber-300/[0.04] p-5 text-sm">
            <p className="mb-3 flex items-center gap-2 font-semibold text-amber-200"><Flag className="h-4 w-4" /> Red flags to remember</p>
            <ul className="space-y-2.5">
              {s.flags.map((f, i) => (
                <li key={f} className="flex gap-3 text-slate-300"><span className="font-mono text-amber-300">0{i + 1}</span>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
