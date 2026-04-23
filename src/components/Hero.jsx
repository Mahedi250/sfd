"use client";
import { I18N, T } from "@/lib/i18n";
import { Icons } from "@/lib/icons";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import BtnPrimary from "@/components/ui/BtnPrimary";
import BtnGhost from "@/components/ui/BtnGhost";

const DEPT_CHIPS = [
  { bn: "অর্থোপেডিক",      en: "Orthopedic",    tone: "blue"  },
  { bn: "নিউরো রিহ্যাব",   en: "Neuro Rehab",   tone: "blue"  },
  { bn: "ডেন্টাল কেয়ার",  en: "Dental Care",   tone: "green" },
  { bn: "শিশু ফিজিওথেরাপি", en: "Child Physio", tone: "ink"   },
];

export default function Hero({ lang, onBook }) {
  const t = I18N.hero;
  const ff = lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif";

  return (
    <section id="top" data-screen-label="Hero" style={{ position: "relative", overflow: "hidden" }} className="hero-section">

      {/* bg blobs */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: -140, right: -140, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--blue) 26%, transparent), transparent 60%)", filter: "blur(12px)" }}/>
        <div style={{ position: "absolute", bottom: -180, left: -120, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--green) 20%, transparent), transparent 60%)", filter: "blur(12px)" }}/>
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "80px 40px 52px", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56, alignItems: "center" }} className="hero-grid">

        {/* ── LEFT: text ── */}
        <div>
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

          {/* brand strip — hidden on mobile */}
          <Reveal delay={120}>
            <div className="hero-brand-strip" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, color: "var(--ink-3)", fontSize: 13, fontWeight: 600 }}>
              <span style={{ width: 28, height: 1, background: "var(--line)", flexShrink: 0 }}/>
              <span style={{ fontFamily: "'Hind Siliguri', sans-serif", letterSpacing: 0 }}>{I18N.brand.bn}</span>
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

          {/* stats */}
          <Reveal delay={270}>
            <div style={{ marginTop: 40, paddingTop: 22, borderTop: "1px solid var(--line)", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="hero-stats">
              {[t.stat1, t.stat2, t.stat3].map((s, i) => (
                <div key={i} className="lang-swap" style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-2)", lineHeight: 1.4, fontFamily: ff }}>
                  <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: 999, background: i === 0 ? "var(--blue)" : i === 1 ? "var(--green)" : "var(--ink)", marginRight: 7, verticalAlign: "middle" }}/>
                  {T(s, lang)}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── RIGHT: art ── */}
        <Reveal delay={180}>
          <div style={{ position: "relative", height: 560 }} className="hero-art">
            {/* main image */}
            <div style={{ position: "absolute", top: 0, right: 0, width: "82%", height: "72%", borderRadius: 24, boxShadow: "var(--shadow-lg)", overflow: "hidden", border: "1px solid var(--line)", backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(11,18,32,.35))" }}/>
            </div>
            {/* secondary image — hidden on mobile */}
            <div className="hero-art-secondary" style={{ position: "absolute", bottom: 20, left: 0, width: "52%", height: "44%", borderRadius: 20, boxShadow: "var(--shadow-md)", overflow: "hidden", border: "3px solid #fff", backgroundImage: "url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}/>
            {/* satisfaction badge */}
            <div className="hero-float-stat" style={{ position: "absolute", top: "8%", left: "-4%", background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: "14px 16px", boxShadow: "var(--shadow-md)", display: "flex", alignItems: "center", gap: 12, animation: "floaty 6s ease-in-out infinite" }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: "var(--blue-soft)", color: "var(--blue-ink)", display: "grid", placeItems: "center" }}>
                <Icons.Heart />
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>98%</div>
                <div style={{ fontSize: 11, color: "var(--ink-3)" }}>patient satisfaction</div>
              </div>
            </div>
            {/* availability badge */}
            <div className="hero-float-avail" style={{ position: "absolute", bottom: "6%", right: "-2%", background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: "14px 16px", boxShadow: "var(--shadow-md)", display: "flex", alignItems: "center", gap: 12, animation: "floaty 7s ease-in-out infinite .6s" }}>
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
          .hero-grid { grid-template-columns: 1fr !important; gap: 0 !important; padding: 52px 28px 40px !important; }
          .hero-art { display: none !important; }
          .hero-brand-strip { display: none !important; }
        }
        @media (max-width: 600px) {
          .hero-grid { padding: 40px 18px 32px !important; }
          .hero-sub { font-size: 15px !important; margin-bottom: 18px !important; }
          .hero-chips { gap: 6px !important; margin-bottom: 20px !important; }
          .hero-btns { gap: 10px !important; }
          .hero-btns > * { flex: 1 1 140px; }
          .hero-stats { grid-template-columns: 1fr !important; gap: 12px !important; margin-top: 28px !important; }
        }
        @media (max-width: 380px) {
          .hero-btns > * { flex: 1 1 100% !important; }
        }
      ` }} />
    </section>
  );
}
