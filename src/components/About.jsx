"use client";
import { I18N, T } from "@/lib/i18n";
import { Icons } from "@/lib/icons";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";

export default function About({ lang }) {
  const t = I18N.about;
  const ff = lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif";

  return (
    <Section id="about" label="About" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div style={{ display: "grid", gridTemplateColumns: ".95fr 1.1fr", gap: 64, alignItems: "center" }} className="about-grid">

        {/* ── LEFT: animated art ── */}
        <Reveal>
          <div style={{ position: "relative", height: 500 }} className="about-art">

            {/* main image — ken-burns animated */}
            <div className="about-main-img" style={{ position: "absolute", inset: "0 14% 14% 0", borderRadius: 24, overflow: "hidden", border: "1px solid var(--line)", boxShadow: "var(--shadow-lg)" }}>
              <div style={{ position: "absolute", inset: "-6%", backgroundImage: "url('/assets/42097-O35ITI.jpg')", backgroundSize: "cover", backgroundPosition: "center", animation: "kenburns 14s ease-in-out infinite alternate" }}/>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 45%, rgba(11,18,32,.45))" }}/>
            </div>

            {/* secondary image — elderly care */}
            <div className="about-secondary-img" style={{ position: "absolute", inset: "38% 0 0 26%", borderRadius: 20, overflow: "hidden", border: "3px solid #fff", boxShadow: "var(--shadow-md)", animation: "floaty 9s ease-in-out infinite 2s" }}>
              <div style={{ position: "absolute", inset: "-4%", backgroundImage: "url('/assets/7089126.jpg')", backgroundSize: "cover", backgroundPosition: "center top", animation: "kenburns 16s ease-in-out infinite alternate-reverse" }}/>
            </div>

            {/* floating — home visit steps card */}
            <div className="about-float-card" style={{ position: "absolute", top: "5%", left: "-8%", background: "#fff", border: "1px solid var(--line)", borderRadius: 18, padding: "14px 16px", boxShadow: "var(--shadow-md)", animation: "floaty 6s ease-in-out infinite", zIndex: 3, minWidth: 188 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: "var(--blue-soft)", color: "var(--blue-ink)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <Icons.Home />
                </div>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--ink)", fontFamily: ff }}>
                  {lang === "bn" ? "হোম ভিজিট প্রক্রিয়া" : "How home visit works"}
                </span>
              </div>
              {[
                { dot: "var(--blue)",  label: lang === "bn" ? "কল করুন বা বুকিং দিন" : "Call or book online" },
                { dot: "var(--blue)",  label: lang === "bn" ? "থেরাপিস্ট সময় নিশ্চিত করবেন" : "Therapist confirms time" },
                { dot: "var(--green)", label: lang === "bn" ? "বাড়িতে চিকিৎসা শুরু" : "Treatment at your home" },
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: i < 2 ? 7 : 0 }}>
                  <span style={{ width: 7, height: 7, borderRadius: 999, background: step.dot, flexShrink: 0 }}/>
                  <span style={{ fontSize: 11.5, color: "var(--ink-2)", fontFamily: ff }}>{step.label}</span>
                </div>
              ))}
            </div>

            {/* floating — live availability */}
            <div className="about-float-stat" style={{ position: "absolute", bottom: "6%", left: "-4%", background: "#fff", border: "1px solid var(--line)", borderRadius: 18, padding: "12px 16px", boxShadow: "var(--shadow-md)", display: "flex", alignItems: "center", gap: 12, animation: "floaty 7.5s ease-in-out infinite 1s", zIndex: 3 }}>
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div style={{ width: 10, height: 10, borderRadius: 999, background: "var(--green)" }}/>
                <div style={{ position: "absolute", inset: -4, borderRadius: 999, animation: "pulse-ring 1.8s infinite" }}/>
              </div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--ink)" }}>200+</div>
                <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: ff }} className="lang-swap">
                  {lang === "bn" ? "হোম ভিজিট সম্পন্ন" : "home visits completed"}
                </div>
              </div>
            </div>

          </div>
        </Reveal>

        {/* ── RIGHT: text ── */}
        <div>
          <Reveal><Eyebrow tone="green">{T(t.eyebrow, lang)}</Eyebrow></Reveal>

          <Reveal delay={80}>
            <h2 style={{ margin: "14px 0 20px", fontSize: "clamp(30px, 3.4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 800, whiteSpace: "pre-line", fontFamily: ff }} className="lang-swap">
              {T(t.title, lang)}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)", margin: "0 0 32px", fontFamily: ff }} className="lang-swap">
              {T(t.body, lang)}
            </p>
          </Reveal>

          <div className="about-points" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {t.points.map((p, i) => {
              const colors = [
                { bg: "var(--blue-soft)",  fg: "var(--blue-ink)",  dot: "var(--blue)"  },
                { bg: "var(--blue-soft)",  fg: "var(--blue-ink)",  dot: "var(--blue)"  },
                { bg: "var(--green-soft)", fg: "var(--green-ink)", dot: "var(--green)" },
                { bg: "var(--green-soft)", fg: "var(--green-ink)", dot: "var(--green)" },
              ];
              const c = colors[i];
              return (
                <Reveal key={i} delay={180 + i * 60}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: c.bg, border: `1px solid color-mix(in oklab, ${c.dot} 20%, transparent)`, borderRadius: 14 }}>
                    <span style={{ flex: "none", width: 28, height: 28, borderRadius: 999, background: c.dot, color: "#fff", display: "grid", placeItems: "center" }}>
                      <Icons.Check />
                    </span>
                    <span style={{ fontSize: 13.5, fontWeight: 600, color: c.fg, lineHeight: 1.35, fontFamily: ff }} className="lang-swap">
                      {T(p, lang)}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-art { height: 380px !important; }
          .about-main-img { inset: 0 !important; }
          .about-secondary-img { display: none !important; }
          .about-float-card { left: 8px !important; top: 8px !important; min-width: 160px !important; font-size: 11px !important; }
          .about-float-stat { left: 8px !important; bottom: 8px !important; }
        }
        @media (max-width: 600px) {
          .about-points { grid-template-columns: 1fr !important; }
          .about-art { height: 300px !important; }
          .about-float-card { display: none !important; }
          .about-float-stat { display: none !important; }
        }
      `}</style>
    </Section>
  );
}
