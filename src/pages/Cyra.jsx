import { useEffect, useRef, useState } from "react";
import { Send, Trash2, Bot, WifiOff } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ChatBubble, TypingBubble } from "@/components/ChatBubble";
import { FutureScope } from "@/components/FutureScope";
import { TOPICS, SUGGESTIONS, getReply } from "@/data/cyraEngine";

const KEY = "cyra-chat-history";
const WELCOME = { role: "bot", text: "Hi, I'm CYRA — your Cyber Assistant. Ask me how, why, when, can, what or where questions about staying safe online. Pick a topic below or type your own question." };

const load = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || [WELCOME]; } catch { return [WELCOME]; }
};

export default function Cyra() {
  const [messages, setMessages] = useState(load);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [topic, setTopic] = useState("password");
  const scrollRef = useRef(null);
  const timer = useRef(null);

  const [speakingIdx, setSpeakingIdx] = useState(null);

  useEffect(() => () => { clearTimeout(timer.current); window.speechSynthesis?.cancel(); }, []);

  const speak = (i, text) => {
    const synth = window.speechSynthesis;
    synth.cancel();
    if (speakingIdx === i) return setSpeakingIdx(null);
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-IN";
    u.rate = 0.92;
    const voice = synth.getVoices().find((v) => v.lang.startsWith("en"));
    if (voice) u.voice = voice;
    u.onend = u.onerror = () => setSpeakingIdx((cur) => (cur === i ? null : cur));
    setSpeakingIdx(i);
    synth.speak(u);
  };

  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(messages)); }, [messages]);
  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }); }, [messages, typing]);

  const send = (text) => {
    const q = text.trim();
    if (!q || typing) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTyping(true);
    const r = getReply(q);
    if (r.topic && TOPICS[r.topic]) setTopic(r.topic);
    const label = r.topic && TOPICS[r.topic] ? `${TOPICS[r.topic].label} · ${r.intent}` : undefined;
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: r.text, label }]);
      setTyping(false);
    }, 700 + Math.min(r.text.length * 4, 900));
  };

  const clear = () => {
    clearTimeout(timer.current);
    window.speechSynthesis?.cancel();
    setSpeakingIdx(null);
    setTyping(false);
    setMessages([WELCOME]);
  };

  return (
    <div className="mx-auto max-w-6xl px-5 pt-14 md:pt-20 lg:px-8" data-testid="cyra-page">
      <PageHeader
        eyebrow="Offline · Rule-based"
        title={<>CYRA – <span className="text-gradient">Cyber Assistant</span></>}
        desc="Get clear, focused answers on everyday cyber safety. CYRA understands both the topic and the type of your question, and works entirely in your browser."
        testId="cyra-header"
      />

      <div className="glass mt-10 flex h-[640px] flex-col overflow-hidden rounded-3xl md:h-[680px]" data-testid="cyra-chat-window">
        <div className="flex items-center justify-between border-b border-indigo-500/15 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-600/30 text-cyan-200 ring-1 ring-cyan-400/30">
              <Bot className="h-5 w-5" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0d1329] bg-emerald-400" />
            </span>
            <div>
              <p className="font-display font-semibold">CYRA</p>
              <p className="flex items-center gap-1 whitespace-nowrap text-xs text-slate-400"><WifiOff className="h-3 w-3" /> Offline<span className="hidden sm:inline"> · English only</span></p>
            </div>
          </div>
          <button onClick={clear} data-testid="cyra-clear-btn" className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400 transition-colors hover:border-rose-400/40 hover:text-rose-300">
            <Trash2 className="h-3.5 w-3.5" /> Clear chat
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-6 md:px-6" data-testid="cyra-messages">
          {messages.map((m, i) => <ChatBubble key={i} idx={i} msg={m} speaking={speakingIdx === i} onSpeak={() => speak(i, m.text)} />)}
          {typing && <TypingBubble />}
        </div>

        <div className="space-y-3 border-t border-indigo-500/15 px-4 py-4 md:px-6">
          <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap" data-testid="cyra-topic-chips">
            {Object.entries(TOPICS).map(([id, t]) => (
              <button key={id} onClick={() => setTopic(id)} data-testid={`topic-chip-${id}`}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${topic === id ? "border-cyan-400/60 bg-cyan-400/10 text-cyan-200" : "border-white/10 text-slate-400 hover:text-white"}`}>
                {t.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap" data-testid="cyra-suggestions">
            {SUGGESTIONS[topic].map((s, i) => (
              <button key={s} onClick={() => send(s)} disabled={typing} data-testid={`suggestion-btn-${i}`}
                className="shrink-0 rounded-xl border border-purple-400/20 bg-purple-500/[0.07] px-3 py-2 text-xs text-purple-100 transition-colors hover:bg-purple-500/15 disabled:opacity-50">
                {s}
              </button>
            ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask CYRA a cyber safety question..."
              data-testid="cyra-chat-input"
              className="h-12 flex-1 rounded-2xl border border-indigo-400/20 bg-[#060a1a]/80 px-4 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/60 focus:outline-none"
            />
            <button type="submit" disabled={!input.trim() || typing} data-testid="cyra-send-btn" aria-label="Send"
              className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white transition-transform hover:scale-105 disabled:opacity-40 disabled:hover:scale-100">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <FutureScope />
    </div>
  );
}
