import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = ({ testId = "theme-toggle-btn" }) => {
  const [light, setLight] = useState(() => document.documentElement.classList.contains("light"));

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e) => {
      if (localStorage.getItem("cyberscape-theme")) return;
      document.documentElement.classList.toggle("light", e.matches);
      setLight(e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = !light;
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("cyberscape-theme", next ? "light" : "dark");
    setLight(next);
  };

  return (
    <button
      onClick={toggle}
      data-testid={testId}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      className="grid h-10 w-10 place-items-center rounded-xl border border-indigo-500/25 text-slate-200 transition-[transform,color] duration-300 hover:rotate-12 hover:text-cyan-300"
    >
      {light ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
};
