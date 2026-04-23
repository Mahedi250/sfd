"use client";
import { I18N, T } from "@/lib/i18n";
import { Icons } from "@/lib/icons";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";

export default function About({ lang }) {
  const t = I18N.about;
  return (
    <Section id="about" label="About" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div style={{ display: "grid", gridTemplateColumns: ".95fr 1.1fr", gap: 64, alignItems: "center" }} className="about-grid">
        <Reveal>
          <div style={{ position: "relative", height: 480 }} className="about-art">
            <div style={{ position: "absolute", inset: "0 20% 20% 0", borderRadius: 20, overflow: "hidden", border: "1px solid var(--line)", backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1100&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}/>
            <div style={{ position: "absolute", inset: "30% 0 0 30%", borderRadius: 20, boxShadow: "var(--shadow-md)", overflow: "hidden", border: "3px solid #fff", backgroundImage: "url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}/>
            <div style={{ position: "absolute", top: "4%", right: "6%", background: "var(--ink)", color: "#fff", borderRadius: 999, padding: "8px 14px", fontSize: 12, fontWeight: 600, letterSpacing: ".04em", boxShadow: "var(--shadow-md)" }}>Est. 2013</div>
          </div>
        </Reveal>

        <div>
          <Reveal><Eyebrow tone="green">{T(t.eyebrow, lang)}</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 style={{ margin: "14px 0 20px", fontSize: "clamp(30px, 3.4vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 700, whiteSpace: "pre-line", fontFamily: lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif" }} className="lang-swap">{T(t.title, lang)}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-2)", margin: "0 0 28px", fontFamily: lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif" }} className="lang-swap">{T(t.body, lang)}</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {t.points.map((p, i) => (
              <Reveal key={i} delay={180 + i * 60}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "#FAFBFC", border: "1px solid var(--line)", borderRadius: 14 }}>
                  <span style={{ flex: "none", width: 28, height: 28, borderRadius: 999, background: "var(--blue)", color: "#fff", display: "grid", placeItems: "center" }}><Icons.Check/></span>
                  <span style={{ fontSize: 13.5, fontWeight: 500, color: "var(--ink)", lineHeight: 1.35 }} className="lang-swap">{T(p, lang)}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 860px) { .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } .about-art { height: 360px !important; } }`}</style>
    </Section>
  );
}
