"use client";
import { useState, useEffect, useCallback } from "react";
import { I18N, T } from "@/lib/i18n";
import { Icons } from "@/lib/icons";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import BtnPrimary from "@/components/ui/BtnPrimary";
import BtnGhost from "@/components/ui/BtnGhost";

const HERO_SLIDES = [
  { src: "/assets/7063343.jpg", label: "Expert Physiotherapy" },
  { src: "/assets/dental.jpg", label: "Dental Department"    },
  { src: "/assets/7089126.jpg", label: "Advanced Treatment"   },
];

const DEPT_CHIPS = [
  { bn: "অর্থোপেডিক",      en: "Orthopedic",    tone: "blue"  },
  { bn: "নিউরো রিহ্যাব",   en: "Neuro Rehab",   tone: "blue"  },
  { bn: "ডেন্টাল কেয়ার",  en: "Dental Care",   tone: "green" },
  { bn: "শিশু ফিজিওথেরাপি", en: "Child Physio", tone: "ink"   },
];

export default function Hero({ lang, onBook }) {
  const t = I18N.hero;
  const ff = lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif";

  const [slide, setSlide] = useState(0);
  const next = useCallback(() => setSlide(s => (s + 1) % HERO_SLIDES.length), []);
  const prev = useCallback(() => setSlide(s => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length), []);
  useEffect(() => { const id = setInterval(next, 4500); return () => clearInterval(id); }, [next]);

  return (
    <section id="top" data-screen-label="Hero" style={{ position: "relative", overflow: "hidden" }} className="hero-section">

      {/* bg blobs */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: -140, right: -140, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--blue) 26%, transparent), transparent 60%)", filter: "blur(12px)" }}/>
        <div style={{ position: "absolute", bottom: -180, left: -120, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--green) 20%, transparent), transparent 60%)", filter: "blur(12px)" }}/>
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "80px 40px 52px", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56, alignItems: "center" }} className="hero-grid">

        {/* ── LEFT: text ── */}
        <div className="hero-left">
          <Reveal>
            <Eyebrow tone="green">{T(t.eyebrow, lang)}</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h1 style={{ margin: "16px 0 14px", fontSize: "clamp(38px, 5.2vw, 76px)", lineHeight: lang === "bn" ? 1.18 : 1.02, letterSpacing: "-0.035em", fontWeight: 800, fontFamily: ff, overflowWrap: "break-word" }} className="lang-swap">
              <span style={{ display: "block", color: "var(--green)", paddingTop: lang === "bn" ? ".04em" : 0 }}>
                {T(t.titleTop, lang)}
              </span>
              <span style={{ display: "block", background: "linear-gradient(92deg, var(--blue), var(--green))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", paddingRight: 4, paddingBottom: lang === "bn" ? ".12em" : 0 }}>
                {T(t.titleBot, lang)}
              </span>
            </h1>
          </Reveal>

          {/* brand strip */}
          <Reveal delay={120}>
            <div className="hero-brand-strip" style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16, background: "var(--blue-soft)", border: "1px solid color-mix(in oklab, var(--blue) 20%, transparent)", borderRadius: 999, padding: "6px 14px 6px 10px" }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--blue)", flexShrink: 0 }}/>
              <span style={{ fontFamily: "'Hind Siliguri', sans-serif", letterSpacing: 0, fontSize: 13, fontWeight: 700, color: "var(--blue-ink)" }}>{I18N.brand.bn}</span>
            </div>
          </Reveal>

          <Reveal delay={155}>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 520, margin: "0 0 22px", fontWeight: 500, fontFamily: ff }} className="lang-swap hero-sub">
              {T(t.sub, lang)}
            </p>
          </Reveal>

          {/* dept chips */}
          <Reveal delay={185}>
            <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 26 }} className="hero-chips">
              {DEPT_CHIPS.map(({ bn, en, tone }) => {
                const fg = tone === "blue" ? "var(--blue-ink)" : tone === "green" ? "var(--green-ink)" : "var(--ink-2)";
                const bg = tone === "blue" ? "var(--blue-soft)" : tone === "green" ? "var(--green-soft)" : "var(--surface)";
                const border = tone === "blue" ? "color-mix(in oklab, var(--blue) 25%, transparent)" : tone === "green" ? "color-mix(in oklab, var(--green) 25%, transparent)" : "var(--line)";
                return (
                  <span key={en} style={{ fontSize: 12, fontWeight: 700, color: fg, background: bg, border: `1px solid ${border}`, borderRadius: 999, padding: "5px 12px", whiteSpace: "nowrap" }}>
                    {lang === "bn" ? bn : en}
                  </span>
                );
              })}
            </div>
          </Reveal>

          {/* CTA buttons */}
          <Reveal delay={215}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }} className="hero-btns">
              <BtnPrimary onClick={onBook} icon={<Icons.Arrow />}>
                <span className="lang-swap">{T(t.book, lang)}</span>
              </BtnPrimary>
              <BtnGhost href="#contact" icon={<Icons.Phone />}>
                <span className="lang-swap">{T(t.call, lang)}</span>
              </BtnGhost>
            </div>
          </Reveal>

        </div>

        {/* ── RIGHT: slider ── */}
        <Reveal delay={180}>
          <div style={{ position: "relative", height: 560 }} className="hero-art">

            {/* ── slider frame ── */}
            <div className="hero-art-frame" style={{ position: "absolute", top: 0, right: 0, left: 0, bottom: 80, borderRadius: 28, overflow: "hidden", boxShadow: "var(--shadow-lg)", border: "1px solid var(--line)" }}>

              {/* slides */}
              {HERO_SLIDES.map((s, i) => (
                <div key={i} className="hero-slide" style={{ position: "absolute", inset: 0, backgroundImage: `url('${s.src}')`, backgroundSize: "cover", backgroundPosition: "center top", opacity: slide === i ? 1 : 0, transition: "opacity 0.85s cubic-bezier(.4,0,.2,1)", zIndex: slide === i ? 1 : 0 }}/>
              ))}

              {/* gradient overlay */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(11,18,32,.08) 0%, transparent 35%, rgba(11,18,32,.55) 100%)", zIndex: 2 }}/>

              {/* slide label */}
              <div style={{ position: "absolute", bottom: 56, left: 20, zIndex: 3 }}>
                <span style={{ display: "inline-block", background: "rgba(255,255,255,.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,.25)", borderRadius: 999, padding: "4px 12px", fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase", transition: "opacity 0.4s" }}>
                  {HERO_SLIDES[slide].label}
                </span>
              </div>

              {/* dot indicators */}
              <div style={{ position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 6, zIndex: 3 }}>
                {HERO_SLIDES.map((_, i) => (
                  <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} style={{ width: slide === i ? 26 : 8, height: 8, borderRadius: 999, background: slide === i ? "#fff" : "rgba(255,255,255,.45)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.35s cubic-bezier(.4,0,.2,1)" }}/>
                ))}
              </div>

              {/* prev arrow */}
              <button onClick={prev} aria-label="Previous" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", zIndex: 3, width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,.82)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,.6)", boxShadow: "0 2px 10px rgba(11,18,32,.18)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>

              {/* next arrow */}
              <button onClick={next} aria-label="Next" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", zIndex: 3, width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,.82)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,.6)", boxShadow: "0 2px 10px rgba(11,18,32,.18)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            {/* ── thumbnail strip ── */}
            <div className="hero-art-thumbs" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 70, display: "flex", gap: 10 }}>
              {HERO_SLIDES.map((s, i) => (
                <button key={i} onClick={() => setSlide(i)} style={{ flex: 1, borderRadius: 14, overflow: "hidden", border: slide === i ? "2px solid var(--blue)" : "2px solid transparent", boxShadow: slide === i ? "0 0 0 1px var(--blue-soft)" : "none", backgroundImage: `url('${s.src}')`, backgroundSize: "cover", backgroundPosition: "center", cursor: "pointer", transition: "border 0.3s, box-shadow 0.3s", padding: 0 }}/>
              ))}
            </div>

            {/* satisfaction badge */}
            <div className="hero-float-stat" style={{ position: "absolute", top: "8%", left: "-4%", background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: "14px 16px", boxShadow: "var(--shadow-md)", display: "flex", alignItems: "center", gap: 12, animation: "floaty 6s ease-in-out infinite", zIndex: 4 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: "var(--blue-soft)", color: "var(--blue-ink)", display: "grid", placeItems: "center" }}>
                <Icons.Heart />
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>98%</div>
                <div style={{ fontSize: 11, color: "var(--ink-3)" }}>patient satisfaction</div>
              </div>
            </div>

            {/* availability badge */}
            <div className="hero-float-avail" style={{ position: "absolute", bottom: "18%", right: "-2%", background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: "14px 16px", boxShadow: "var(--shadow-md)", display: "flex", alignItems: "center", gap: 12, animation: "floaty 7s ease-in-out infinite .6s", zIndex: 4 }}>
              <div style={{ position: "relative" }}>
                <div style={{ width: 10, height: 10, borderRadius: 999, background: "var(--green)" }}/>
                <div style={{ position: "absolute", inset: -4, borderRadius: 999, animation: "pulse-ring 1.8s infinite" }}/>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }} className="lang-swap">
                  {lang === "bn" ? "এখনই অ্যাপয়েন্টমেন্ট নিন" : "Appointments open"}
                </div>
                <div style={{ fontSize: 11, color: "var(--ink-3)" }} className="lang-swap">{T(t.hint, lang)}</div>
              </div>
            </div>

          </div>
        </Reveal>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 960px) {
          .hero-grid  { grid-template-columns: 1fr !important; gap: 24px !important; padding: 52px 24px 48px !important; }
          .hero-left  { width: 100% !important; max-width: 100% !important; }
          .hero-sub   { max-width: 100% !important; }
          .hero-art   { height: 420px !important; }
          .hero-art-thumbs { height: 56px !important; gap: 8px !important; }
          .hero-art-frame  { bottom: 66px !important; border-radius: 20px !important; }
          .hero-float-stat  { display: none !important; }
          .hero-float-avail { display: none !important; }
          .hero-slide { background-size: cover !important; background-position: center top !important; }
        }
        @media (max-width: 600px) {
          .hero-grid  { padding: 32px 18px 36px !important; gap: 18px !important; }
          .hero-art   { height: 320px !important; }
          .hero-art-thumbs { height: 48px !important; gap: 6px !important; }
          .hero-art-frame  { bottom: 58px !important; border-radius: 16px !important; }
          .hero-sub   { font-size: 15px !important; margin-bottom: 16px !important; }
          .hero-chips { gap: 6px !important; margin-bottom: 18px !important; }
          .hero-btns  { gap: 8px !important; }
          .hero-btns > * { flex: 1 1 auto; font-size: 14px !important; padding: 12px 16px !important; gap: 6px !important; }
        }
        @media (max-width: 380px) {
          .hero-art   { height: 260px !important; }
          .hero-art-thumbs { display: none !important; }
          .hero-art-frame  { bottom: 0 !important; border-radius: 14px !important; }
          .hero-btns > * { font-size: 13px !important; padding: 11px 14px !important; }
        }
      ` }} />
    </section>
  );
}
