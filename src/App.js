import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import DigitalWorld from "@/pages/DigitalWorld";
import SafetyHub from "@/pages/SafetyHub";
import Cyra from "@/pages/Cyra";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App noise relative">
      <BrowserRouter>
        <ScrollTop />
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="grid-bg absolute inset-0" />
          <div className="absolute -top-40 -left-32 h-[480px] w-[480px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-purple-600/10 blur-[140px]" />
        </div>
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/digital-world" element={<DigitalWorld />} />
            <Route path="/safety-hub" element={<SafetyHub />} />
            <Route path="/cyra-assistant" element={<Cyra />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
