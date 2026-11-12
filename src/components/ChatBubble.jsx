import { motion } from "framer-motion";
import { Bot, User, Volume2, Square } from "lucide-react";

const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;

const SpeakButton = ({ speaking, onSpeak, idx }) => (
  <button
    onClick={onSpeak}
    data-testid={`cyra-speak-btn-${idx}`}
    aria-label={speaking ? "Stop reading" : "Read answer aloud"}
    className={`mt-2.5 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors ${speaking ? "border-cyan-400/60 bg-cyan-400/15 text-cyan-200" : "border-white/10 text-slate-400 hover:border-cyan-400/40 hover:text-cyan-200"}`}
  >
    {speaking ? <Square className="h-3 w-3" /> : <Volume2 className="h-3.5 w-3.5" />}
    {speaking ? "Stop" : "Listen"}
  </button>
);

export const ChatBubble = ({ msg, idx, speaking, onSpeak }) => {
  const bot = msg.role === "bot";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 ${bot ? "" : "flex-row-reverse"}`}
      data-testid={bot ? "chat-bubble-bot" : "chat-bubble-user"}
    >
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${bot ? "bg-gradient-to-br from-cyan-500/30 to-purple-600/30 text-cyan-200 ring-1 ring-cyan-400/30" : "bg-white/[0.06] text-slate-300"}`}>
        {bot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
      </span>
      <div className={`max-w-[82%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed md:max-w-[70%] ${bot ? "rounded-tl-sm border border-indigo-400/15 bg-[#0d1329]/90 text-slate-200" : "rounded-tr-sm bg-gradient-to-r from-cyan-600 to-blue-600 text-white"}`}>
        {msg.text}
        {msg.label && <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-cyan-300/70">{msg.label}</p>}
        {bot && canSpeak && <div><SpeakButton speaking={speaking} onSpeak={onSpeak} idx={idx} /></div>}
      </div>
    </motion.div>
  );
};

export const TypingBubble = () => (
  <div className="flex gap-3" data-testid="chat-typing-indicator">
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-600/30 text-cyan-200 ring-1 ring-cyan-400/30"><Bot className="h-4 w-4" /></span>
    <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-indigo-400/15 bg-[#0d1329]/90 px-4 py-3.5">
      <span className="typing-dot h-2 w-2 rounded-full bg-cyan-300" />
      <span className="typing-dot h-2 w-2 rounded-full bg-cyan-300" />
      <span className="typing-dot h-2 w-2 rounded-full bg-cyan-300" />
    </div>
  </div>
);
