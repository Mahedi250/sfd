"use client";
import { I18N, T } from "@/lib/i18n";
import { Icons } from "@/lib/icons";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";

export default function Testimonials({ lang }) {
  const t = I18N.testimonials;
  return (
    <Section id="testimonials" label="Testimonials" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <Reveal>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
          <Eyebrow tone="green">{T(t.eyebrow, lang)}</Eyebrow>
          <h2 style={{ margin: "14px 0 0", fontSize: "clamp(30px, 3.4vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 700, fontFamily: lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif" }} className="lang-swap">{T(t.title, lang)}</h2>
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="test-grid">
        {t.items.map((it, i) => (
          <Reveal key={i} delay={80 * i}>
            <figure style={{ margin: 0, padding: 28, background: "#FAFBFC", border: "1px solid var(--line)", borderRadius: 20, height: "100%", display: "flex", flexDirection: "column", transition: "transform .25s, box-shadow .25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", gap: 2, color: "var(--blue)", marginBottom: 14 }}>
                {[0,1,2,3,4].map((s) => <Icons.Star key={s}/>)}
              </div>
              <blockquote style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "var(--ink)", fontFamily: lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif", flex: 1 }} className="lang-swap">"{T(it, lang)}"</blockquote>
              <figcaption style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 12 }}>
                <div className="ph" style={{ width: 40, height: 40, borderRadius: 999, flex: "none" }}/>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }} className="lang-swap">{T(it.name, lang)}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-3)" }} className="lang-swap">{T(it.role, lang)}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <style>{`@media (max-width: 820px) { .test-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}
