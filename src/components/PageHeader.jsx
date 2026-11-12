import { motion } from "framer-motion";

export const PageHeader = ({ eyebrow, title, desc, testId }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="max-w-3xl"
    data-testid={testId}
  >
    <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300/80">{eyebrow}</p>
    <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
    <p className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg">{desc}</p>
  </motion.div>
);
