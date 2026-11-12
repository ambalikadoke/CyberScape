import { Link } from "react-router-dom";
import { ExternalLink, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NAV } from "@/components/Navbar";

export const Footer = () => (
  <footer className="relative z-10 mt-24 border-t border-indigo-900/40 bg-[#02040a]" data-testid="site-footer">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
      <div className="space-y-4">
        <Logo testId="footer-logo" />
        <p className="max-w-xs text-sm leading-relaxed text-slate-400">
          A cyber awareness initiative helping people understand the digital world and prevent online fraud.
        </p>
      </div>
      <div>
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-500">Explore</p>
        <ul className="space-y-2.5">
          {NAV.map((n) => (
            <li key={n.id}>
              <Link to={n.to} className="text-sm text-slate-300 transition-colors hover:text-cyan-300" data-testid={`footer-link-${n.id}`}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-500">Official Help</p>
        <div className="space-y-3 text-sm">
          <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-cyan-300" data-testid="footer-portal-link">
            <ExternalLink className="h-4 w-4" /> cybercrime.gov.in
          </a>
          <a href="tel:1930" className="flex items-center gap-2 text-slate-300 hover:text-rose-300" data-testid="footer-call-link">
            <Phone className="h-4 w-4" /> Cyber Crime Helpline: 1930
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-indigo-900/30 py-5 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} CyberScape · For awareness purposes only. For official help, use government resources.
    </div>
  </footer>
);
