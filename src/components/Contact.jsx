"use client";
import { I18N, T } from "@/lib/i18n";
import { Icons } from "@/lib/icons";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";
import BtnPrimary from "@/components/ui/BtnPrimary";
import BtnGhost from "@/components/ui/BtnGhost";

export default function Contact({ lang }) {
  const t = I18N.contact;
  return (
    <Section id="contact" label="Contact">
      <div style={{ display: "grid", gridTemplateColumns: ".95fr 1.05fr", gap: 40 }} className="contact-grid">
        <Reveal>
          <div>
            <Eyebrow tone="blue">{T(t.eyebrow, lang)}</Eyebrow>
            <h2 style={{ margin: "14px 0 24px", fontSize: "clamp(30px, 3.4vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 700, fontFamily: lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif" }} className="lang-swap">{T(t.title, lang)}</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 28 }}>
              {[
                { IconComp: Icons.MapPin, label: T(t.addr, lang) },
                { IconComp: Icons.Clock,  label: `${T(t.hours, lang)}  ·  ${T(t.friday, lang)}` },
                { IconComp: Icons.Phone,  label: "০১৮৩৪-৯৪২১১০" },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ width: 36, height: 36, borderRadius: 10, background: "var(--blue-soft)", color: "var(--blue-ink)", display: "grid", placeItems: "center", flex: "none" }}><r.IconComp/></span>
                  <span style={{ fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.5, paddingTop: 8 }} className="lang-swap">{r.label}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <BtnPrimary href="tel:+8801834942110" icon={<Icons.Phone/>}><span className="lang-swap">{T(t.call, lang)}</span></BtnPrimary>
              <a href="https://wa.me/8801834942110" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--green)", color: "#fff", padding: "13px 20px", borderRadius: 999, fontSize: 15, fontWeight: 600, border: "1px solid var(--green)", textDecoration: "none", boxShadow: "var(--shadow-sm)" }}>
                <Icons.Whatsapp/> <span className="lang-swap">{T(t.wa, lang)}</span>
              </a>
              <BtnGhost href="https://www.google.com/maps?q=24.11415070449184,90.56339342974863" icon={<Icons.MapPin/>}><span className="lang-swap">{T(t.dir, lang)}</span></BtnGhost>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", border: "1px solid var(--line)", height: 420 }}>
            <iframe
              title="Shitolokkha Center location"
              src="https://maps.google.com/maps?q=24.11415070449184,90.56339342974863&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div style={{ position: "absolute", bottom: 12, left: 12, background: "rgba(255,255,255,.92)", border: "1px solid var(--line)", borderRadius: 8, padding: "6px 10px", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "var(--ink-3)" }}>
              24.1141°N · 90.5634°E
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`@media (max-width: 820px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}
