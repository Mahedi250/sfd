"use client";
import { useState, useEffect } from "react";
import { I18N, T } from "@/lib/i18n";
import { Icons } from "@/lib/icons";
import LangToggle from "@/components/ui/LangToggle";
import BtnPrimary from "@/components/ui/BtnPrimary";

export default function Navbar({ lang, setLang, onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [open]);

  const t = I18N.nav;
  const link = {
    color: "var(--ink-2)", textDecoration: "none", fontSize: 14, fontWeight: 500,
    padding: "8px 4px", borderRadius: 6, transition: "color .15s",
  };
  const mlink = {
    color: "var(--ink)", textDecoration: "none", fontSize: 17, fontWeight: 600,
    padding: "14px 2px", borderBottom: "1px solid var(--line-2)", display: "block",
  };

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled || open ? "rgba(255,255,255,.92)" : "rgba(250,251,252,.6)",
      backdropFilter: "saturate(1.4) blur(10px)",
      borderBottom: (scrolled || open) ? "1px solid var(--line)" : "1px solid transparent",
      transition: "background .25s, border-color .25s",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "14px 40px", display: "flex", alignItems: "center", gap: 24 }}>
        <a href="#top" onClick={() => setOpen(false)} style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--ink)" }}>
          <Icons.Brand size={32}/>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span className="lang-swap" style={{ fontFamily: "'Hind Siliguri', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "-0.01em" }}>শীতলক্ষা</span>
            <span style={{ fontSize: 10.5, color: "var(--ink-3)", fontWeight: 500, letterSpacing: ".14em", textTransform: "uppercase" }}>Physio · Dental</span>
          </div>
        </a>

        <nav style={{ display: "flex", gap: 24, marginLeft: 28 }} className="nav-links">
          <a href="#services"    style={link} className="lang-swap">{T(t.services, lang)}</a>
          <a href="#about"       style={link} className="lang-swap">{T(t.about, lang)}</a>
          <a href="#appointment" style={link} className="lang-swap">{T(t.appointment, lang)}</a>
          <a href="#contact"     style={link} className="lang-swap">{T(t.contact, lang)}</a>
        </nav>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
          <LangToggle lang={lang} onChange={setLang}/>
          <div className="desktop-only">
            <BtnPrimary onClick={onBook} icon={<Icons.Arrow/>}>{T(t.book, lang)}</BtnPrimary>
          </div>
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}
            style={{ display: "none", width: 40, height: 40, borderRadius: 10, border: "1px solid var(--line)", background: "#fff", color: "var(--ink)", cursor: "pointer", alignItems: "center", justifyContent: "center" }}>
            {open ? <Icons.Close/> : <Icons.Menu/>}
          </button>
        </div>
      </div>

      <div className="nav-mobile" style={{
        maxHeight: open ? 420 : 0, overflow: "hidden",
        transition: "max-height .35s cubic-bezier(.2,.7,.2,1)",
        borderTop: open ? "1px solid var(--line)" : "1px solid transparent",
        background: "rgba(255,255,255,.96)",
      }}>
        <div style={{ padding: "8px 24px 20px" }}>
          <a href="#services"    onClick={() => setOpen(false)} style={mlink} className="lang-swap">{T(t.services, lang)}</a>
          <a href="#about"       onClick={() => setOpen(false)} style={mlink} className="lang-swap">{T(t.about, lang)}</a>
          <a href="#appointment" onClick={() => setOpen(false)} style={mlink} className="lang-swap">{T(t.appointment, lang)}</a>
          <a href="#contact"     onClick={() => setOpen(false)} style={{ ...mlink, borderBottom: "none" }} className="lang-swap">{T(t.contact, lang)}</a>
          <div style={{ marginTop: 14 }}>
            <BtnPrimary full onClick={() => { setOpen(false); onBook(); }} icon={<Icons.Arrow/>}>
              <span className="lang-swap">{T(t.book, lang)}</span>
            </BtnPrimary>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 880px) { .nav-links { display: none !important; } .desktop-only { display: none !important; } .nav-burger { display: inline-flex !important; } }
        @media (min-width: 881px) { .nav-mobile { display: none !important; } }
      ` }} />
    </header>
  );
}
