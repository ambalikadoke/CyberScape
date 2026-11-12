import { motion } from "framer-motion";
import { Rocket, Server, Sparkles, MessagesSquare } from "lucide-react";

const items = [
  { Icon: Server, text: "Secure backend integration" },
  { Icon: Sparkles, text: "AI-powered natural conversations" },
  { Icon: MessagesSquare, text: "Wider question understanding" },
];

export const FutureScope = () => (
  <motion.section
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="glass relative mt-16 overflow-hidden rounded-3xl p-7 md:p-12"
    data-testid="future-scope-section"
  >
    <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]" />
    <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
      <div>
        <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-purple-300/80"><Rocket className="h-4 w-4" /> Roadmap</p>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Future Scope</h2>
        <p className="mt-4 leading-relaxed text-slate-300" data-testid="future-scope-text">
          CYRA is currently implemented as a frontend-based cyber awareness assistant because CyberScape is developed as a small-scale project. In the future, the assistant can be integrated with a secure backend and AI-powered services to support more natural conversations, understand a wider range of questions and provide more advanced assistance.
        </p>
      </div>
      <ul className="space-y-3">
        {items.map(({ Icon, text }) => (
          <li key={text} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-sm text-slate-200">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-purple-500/15 text-purple-300"><Icon className="h-4 w-4" /></span>
            {text}
          </li>
        ))}
      </ul>
    </div>
  </motion.section>
);
