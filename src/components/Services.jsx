"use client";
import { I18N, T } from "@/lib/i18n";
import { Icons } from "@/lib/icons";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";

function ServiceCard({ tone, IconComp, title, desc, learnMore }) {
  const bg = tone === "green" ? "var(--green-soft)" : "var(--blue-soft)";
  const fg = tone === "green" ? "var(--green-ink)"  : "var(--blue-ink)";
  return (
    <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 20, padding: 24, position: "relative", transition: "transform .25s, box-shadow .25s, border-color .25s", cursor: "pointer", overflow: "hidden", display: "flex", flexDirection: "column" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; e.currentTarget.style.borderColor = "#D9E0EA"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "var(--line)"; }}
    >
      <div style={{ width: 48, height: 48, borderRadius: 12, background: bg, color: fg, display: "grid", placeItems: "center", marginBottom: 18 }}><IconComp/></div>
      <h3 style={{ fontSize: 19, fontWeight: 600, margin: "0 0 6px", letterSpacing: "-0.015em" }} className="lang-swap">{title}</h3>
      <p style={{ margin: 0, color: "var(--ink-3)", fontSize: 14, lineHeight: 1.5, flex: 1 }} className="lang-swap">{desc}</p>
      <div style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 8, color: fg, fontSize: 13, fontWeight: 600 }}>
        <span className="lang-swap">{learnMore}</span>
        <Icons.Arrow/>
      </div>
    </div>
  );
}

export default function Services({ lang }) {
  const t = I18N.servicesSection;
  const items = t.items;
  const physio = [
    { key: "pain",   IconComp: Icons.Pain,     ...items.pain },
    { key: "stroke", IconComp: Icons.Stroke,   ...items.stroke },
    { key: "sports", IconComp: Icons.Sports,   ...items.sports },
  ];
  const dental = [
    { key: "clean",  IconComp: Icons.Teeth,    ...items.clean },
    { key: "root",   IconComp: Icons.Root,     ...items.root },
    { key: "cosm",   IconComp: Icons.Cosmetic, ...items.cosm },
  ];
  const learnMore = lang === "bn" ? "বিস্তারিত জানুন" : "Learn more";

  return (
    <Section id="services" label="Services">
      <Reveal>
        <div>
          <Eyebrow tone="blue">{T(t.eyebrow, lang)}</Eyebrow>
          <h2 style={{ margin: "14px 0 0", fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 700, whiteSpace: "pre-line", fontFamily: lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif" }} className="lang-swap">{T(t.title, lang)}</h2>
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 72 }} className="svc-wings">
        <Reveal delay={60}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--blue-soft)", color: "var(--blue-ink)", display: "grid", placeItems: "center" }}><Icons.Heart/></div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em" }} className="lang-swap">{T(t.physio, lang)}</div>
                <div style={{ fontSize: 12.5, color: "var(--ink-3)" }} className="lang-swap">{T(t.physioDesc, lang)}</div>
              </div>
            </div>
            <div style={{ display: "grid", gap: 16 }}>
              {physio.map((s) => <ServiceCard key={s.key} tone="blue" IconComp={s.IconComp} title={T(s, lang)} desc={T(s.desc, lang)} learnMore={learnMore}/>)}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--green-soft)", color: "var(--green-ink)", display: "grid", placeItems: "center" }}><Icons.Teeth/></div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em" }} className="lang-swap">{T(t.dental, lang)}</div>
                <div style={{ fontSize: 12.5, color: "var(--ink-3)" }} className="lang-swap">{T(t.dentalDesc, lang)}</div>
              </div>
            </div>
            <div style={{ display: "grid", gap: 16 }}>
              {dental.map((s) => <ServiceCard key={s.key} tone="green" IconComp={s.IconComp} title={T(s, lang)} desc={T(s.desc, lang)} learnMore={learnMore}/>)}
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`@media (max-width: 820px) { .svc-wings { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </Section>
  );
}
