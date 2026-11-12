import { createPortal } from "react-dom";
import { Printer, Download } from "lucide-react";
import { CATEGORIES } from "@/data/safetyHub";

export const ChecklistBanner = () => (
  <section className="glass mt-20 flex flex-col gap-6 rounded-3xl p-7 md:flex-row md:items-center md:justify-between md:p-10" data-testid="checklist-banner">
    <div className="flex items-start gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300"><Download className="h-6 w-6" /></span>
      <div>
        <h2 className="text-xl font-bold md:text-2xl">Printable Safety Checklist</h2>
        <p className="mt-1 max-w-xl text-sm text-slate-400">A one-page checklist of the most important actions from every category. Print it or save it as a PDF to share with family members.</p>
      </div>
    </div>
    <button onClick={() => window.print()} data-testid="download-checklist-btn" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5 glow-cyan">
      <Printer className="h-4 w-4" /> Print / Save as PDF
    </button>
  </section>
);

export const PrintChecklist = () => createPortal(
  <div className="print-area hidden" data-testid="print-checklist">
    <h1 style={{ fontSize: 22, margin: 0 }}>CyberScape — Family Cyber Safety Checklist</h1>
    <p style={{ fontSize: 11, margin: "4px 0 14px" }}>Tick each item once it's done. Keep this page near your phone or computer.</p>
    <div style={{ columns: 2, columnGap: 24 }}>
      {CATEGORIES.map((c) => (
        <div key={c.id} style={{ breakInside: "avoid", marginBottom: 12 }}>
          <h2 style={{ fontSize: 13, margin: "0 0 4px", borderBottom: "1px solid #999" }}>{c.title}</h2>
          {c.actions.slice(0, 4).map((a) => (
            <p key={a} style={{ fontSize: 10.5, margin: "3px 0" }}>☐ {a}</p>
          ))}
        </div>
      ))}
    </div>
    <div style={{ border: "2px solid #000", padding: 10, marginTop: 8, fontSize: 12 }}>
      <strong>Victim of cybercrime or financial fraud?</strong> Call the Cyber Crime Helpline <strong>1930</strong> immediately and report at <strong>cybercrime.gov.in</strong>. Never share OTP, UPI PIN, CVV or passwords with anyone.
    </div>
  </div>,
  document.body
);
