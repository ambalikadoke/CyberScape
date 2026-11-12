import { motion } from "framer-motion";
import { AlertTriangle, ExternalLink, Phone, Globe, Landmark } from "lucide-react";

const facts = [
  { Icon: Landmark, label: "Portal", value: "National Cyber Crime Reporting Portal" },
  { Icon: Globe, label: "Official website", value: "cybercrime.gov.in" },
  { Icon: Phone, label: "Cyber Crime Helpline", value: "1930" },
];

export const ReportCard = () => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="relative overflow-hidden rounded-3xl border border-rose-400/30 bg-gradient-to-br from-rose-500/[0.09] via-[#0d1329]/80 to-purple-600/[0.08] p-7 backdrop-blur-xl md:p-12"
    data-testid="report-cybercrime-card"
  >
    <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-rose-500/15 blur-[90px]" />
    <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-rose-200">
          <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-rose-400" /><span className="h-2 w-2 rounded-full bg-rose-400" /></span>
          Official Help
        </div>
        <h2 className="flex items-start gap-3 text-3xl font-bold tracking-tight md:text-4xl">
          <AlertTriangle className="mt-1 h-8 w-8 shrink-0 text-rose-300" />
          Need to Report a Cybercrime?
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-slate-300">
          If you experience a cybercrime or financial fraud, act quickly. Use the official government resources below to report the incident. For financial fraud, calling 1930 immediately improves the chances of stopping the money transfer.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="official-portal-btn"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 glow-cyan"
          >
            Visit Official Portal <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="tel:1930"
            data-testid="call-1930-btn"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-rose-400/50 bg-rose-500/15 px-6 py-3.5 font-semibold text-rose-100 transition-colors duration-200 hover:bg-rose-500/25"
          >
            <Phone className="h-4 w-4" /> Call 1930
          </a>
        </div>
      </div>
      <ul className="space-y-3">
        {facts.map(({ Icon, label, value }) => (
          <li key={label} className="glass flex items-center gap-4 rounded-2xl p-4" data-testid={`report-fact-${label.toLowerCase().replace(/\s+/g, "-")}`}>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.05] text-rose-200"><Icon className="h-5 w-5" /></span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500">{label}</p>
              <p className="font-display text-lg font-semibold text-white">{value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </motion.section>
);
