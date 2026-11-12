import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, ShieldHalf, Bot } from "lucide-react";
import { HeroVisual } from "@/components/HeroVisual";
import { ReportCard } from "@/components/ReportCard";
import { StoryOfTheDay } from "@/components/StoryOfTheDay";

const pillars = [
  { Icon: Globe2, title: "Digital World", desc: "Explore how mobile, payments, email, social media and shopping work behind the screen.", to: "/digital-world", id: "digital-world", tone: "text-cyan-300" },
  { Icon: ShieldHalf, title: "Safety Hub", desc: "Practical, step-by-step actions to secure your accounts, privacy, devices and money.", to: "/safety-hub", id: "safety-hub", tone: "text-blue-300" },
  { Icon: Bot, title: "CYRA Assistant", desc: "Ask quick questions about passwords, OTPs, UPI, phishing and more. Works fully offline.", to: "/cyra-assistant", id: "cyra", tone: "text-purple-300" },
];

const fade = (d = 0) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d } });

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8" data-testid="home-page">
      <section className="grid items-center gap-12 pb-20 pt-14 md:pt-20 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div {...fade(0)} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-cyan-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]" /> Cyber Awareness · Fraud Prevention
          </motion.div>
          <motion.h1 {...fade(0.1)} className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl" data-testid="hero-heading">
            Stay Safe in the <span className="text-gradient">Digital World</span>
          </motion.h1>
          <motion.p {...fade(0.2)} className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg" data-testid="hero-description">
            Every tap, payment and message leaves you connected to a wider digital world. CyberScape helps you understand how it works, recognise online fraud early and take simple steps to protect yourself and your family.
          </motion.p>
          <motion.div {...fade(0.3)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/digital-world" data-testid="hero-explore-btn" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3.5 font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 glow-cyan">
              Explore Digital World <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/safety-hub" data-testid="hero-safety-btn" className="inline-flex items-center justify-center gap-2 rounded-full border border-indigo-400/30 bg-white/[0.03] px-7 py-3.5 font-semibold text-slate-100 transition-colors duration-200 hover:border-cyan-400/50 hover:bg-white/[0.06]">
              Safety Hub
            </Link>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}>
          <HeroVisual />
        </motion.div>
      </section>

      <ReportCard />

      <StoryOfTheDay />

      <section className="pt-24" data-testid="home-pillars">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-purple-300/80">What's inside</p>
        <h2 className="max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">Understand, protect, and ask — all in one place.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map(({ Icon, title, desc, to, id, tone }, i) => (
            <motion.div key={id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
              <Link to={to} data-testid={`pillar-card-${id}`} className="glass group flex h-full flex-col rounded-3xl p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
                <span className={`mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.05] ${tone}`}><Icon className="h-6 w-6" /></span>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{desc}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300">Open <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
