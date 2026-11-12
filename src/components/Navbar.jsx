import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

export const NAV = [
  { label: "Home", to: "/", id: "home" },
  { label: "Digital World", to: "/digital-world", id: "digital-world" },
  { label: "Safety Hub", to: "/safety-hub", id: "safety-hub" },
  { label: "CYRA Assistant", to: "/cyra-assistant", id: "cyra" },
];

const linkCls = ({ isActive }) =>
  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
    isActive ? "bg-white/[0.07] text-white" : "text-slate-400 hover:text-white"
  }`;

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-500/15 bg-[#040711]/75 backdrop-blur-xl" data-testid="site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" data-testid="desktop-nav">
          {NAV.map((n) => (
            <NavLink key={n.id} to={n.to} end className={linkCls} data-testid={`nav-link-${n.id}`}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
        <a
          href="tel:1930"
          data-testid="nav-helpline-btn"
          className="hidden items-center gap-2 rounded-full border border-rose-400/40 bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-200 transition-colors hover:bg-rose-500/20 lg:flex"
        >
          <Phone className="h-4 w-4" /> Helpline 1930
        </a>
        <ThemeToggle />
        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-indigo-500/25 text-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            key={pathname}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-indigo-500/15 md:hidden"
            data-testid="mobile-nav"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV.map((n) => (
                <NavLink key={n.id} to={n.to} end onClick={() => setOpen(false)} className={linkCls} data-testid={`mobile-nav-link-${n.id}`}>
                  {n.label}
                </NavLink>
              ))}
              <a href="tel:1930" className="mt-2 rounded-full bg-rose-500/15 px-4 py-2 text-sm font-semibold text-rose-200" data-testid="mobile-helpline-btn">
                Call Helpline 1930
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
