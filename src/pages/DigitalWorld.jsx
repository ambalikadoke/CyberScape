import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MousePointerClick } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { WorldMap } from "@/components/WorldMap";
import { ZonePanel } from "@/components/ZonePanel";
import { ZONES } from "@/data/digitalWorld";

export default function DigitalWorld() {
  const [active, setActive] = useState(null);
  const panelRef = useRef(null);
  const zone = ZONES.find((z) => z.id === active);

  const select = (id) => {
    setActive(id);
    setTimeout(() => panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 pt-14 md:pt-20 lg:px-8" data-testid="digital-world-page">
      <PageHeader
        eyebrow="Explore · Understand"
        title={<>Your <span className="text-gradient">Digital World</span></>}
        desc="Everything you do online belongs to a connected ecosystem. Select a zone to discover how it works and which elements are involved behind the screen."
        testId="digital-world-header"
      />
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <WorldMap active={active} onSelect={select} />
        <div className="space-y-3" data-testid="zone-list">
          {ZONES.map((z) => {
            const { Icon } = z;
            const on = z.id === active;
            return (
              <button
                key={z.id}
                onClick={() => select(z.id)}
                data-testid={`zone-list-item-${z.id}`}
                className={`glass flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-[transform,border-color] duration-300 hover:translate-x-1 ${on ? "" : "hover:border-white/20"}`}
                style={on ? { borderColor: z.color } : undefined}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl" style={{ background: `${z.color}1a`, color: z.color }}><Icon className="h-5 w-5" /></span>
                <div>
                  <p className="font-semibold">{z.name}</p>
                  <p className="text-sm text-slate-400">{z.tagline}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div ref={panelRef} className="scroll-mt-24 pt-12">
        <AnimatePresence mode="wait">
          {zone ? (
            <ZonePanel zone={zone} key={zone.id} />
          ) : (
            <div className="glass flex items-center gap-4 rounded-3xl p-8 text-slate-400" data-testid="zone-panel-empty">
              <MousePointerClick className="h-6 w-6 text-cyan-300" />
              Select any zone on the map to open its information panel.
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
