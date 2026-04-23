"use client";
import { useState } from "react";
import { I18N, T } from "@/lib/i18n";
import { Icons } from "@/lib/icons";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";

function ServiceCard({ tone, IconComp, title, desc, learnMore }) {
  const bg  = tone === "green" ? "var(--green-soft)" : "var(--blue-soft)";
  const fg  = tone === "green" ? "var(--green-ink)"  : "var(--blue-ink)";
  const bar = tone === "green" ? "var(--green)"      : "var(--blue)";

  return (
    <div
      className="svc-card"
      style={{
        background: "#fff",
        border: "1px solid var(--line)",
        borderRadius: 20,
        padding: "24px 24px 20px",
        position: "relative",
        transition: "transform .22s, box-shadow .22s, border-color .22s",
        cursor: "pointer",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,.09)";
        e.currentTarget.style.borderColor = bar;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "var(--line)";
      }}
    >
      {/* top accent bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: bar, opacity: 0.35, borderRadius: "20px 20px 0 0" }}/>

      <div style={{ marginBottom: 16 }}>
        <div style={{ width: 46, height: 46, borderRadius: 13, background: bg, color: fg, display: "grid", placeItems: "center" }}>
          <IconComp />
        </div>
      </div>

      <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 6px", letterSpacing: "-0.015em", lineHeight: 1.2 }} className="lang-swap">
        {title}
      </h3>
      <p style={{ margin: "0 0 18px", color: "var(--ink-3)", fontSize: 13.5, lineHeight: 1.55, flex: 1 }} className="lang-swap">
        {desc}
      </p>

      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, color: fg, fontSize: 12.5, fontWeight: 700 }}>
        <span className="lang-swap">{learnMore}</span>
        <Icons.Arrow />
      </div>
    </div>
  );
}

function WingHeader({ tone, IconComp, title, desc, lang }) {
  const bg = tone === "green" ? "var(--green-soft)" : "var(--blue-soft)";
  const fg = tone === "green" ? "var(--green-ink)"  : "var(--blue-ink)";
  const bar = tone === "green" ? "var(--green)"     : "var(--blue)";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, padding: "14px 18px", background: bg, borderRadius: 16, border: `1px solid color-mix(in oklab, ${bar} 20%, transparent)` }}>
      <div style={{ width: 40, height: 40, borderRadius: 11, background: "#fff", color: fg, display: "grid", placeItems: "center", flexShrink: 0, boxShadow: "0 1px 4px rgba(0,0,0,.07)" }}>
        <IconComp />
      </div>
      <div>
        <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.01em", color: "var(--ink)" }} className="lang-swap">{title}</div>
        <div style={{ fontSize: 12.5, color: fg, marginTop: 1 }} className="lang-swap">{desc}</div>
      </div>
    </div>
  );
}

export default function Services({ lang }) {
  const t = I18N.servicesSection;
  const items = t.items;
  const [tab, setTab] = useState("physio");

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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 56 }}>
          <div>
            <Eyebrow tone="blue">{T(t.eyebrow, lang)}</Eyebrow>
            <h2
              style={{ margin: "14px 0 0", fontSize: "clamp(30px, 3.6vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 800, whiteSpace: "pre-line", fontFamily: lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif" }}
              className="lang-swap"
            >
              {T(t.title, lang)}
            </h2>
          </div>
          {/* mobile tab switcher — hidden on desktop via class */}
          <div className="svc-tabs" style={{ display: "flex", gap: 6, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 12, padding: 4 }}>
            {[
              { id: "physio", label: lang === "bn" ? "ফিজিওথেরাপি" : "Physio", tone: "blue" },
              { id: "dental", label: lang === "bn" ? "ডেন্টাল"     : "Dental",  tone: "green" },
            ].map((tb) => {
              const active = tab === tb.id;
              const fg = tb.tone === "blue" ? "var(--blue-ink)" : "var(--green-ink)";
              const activeBg = tb.tone === "blue" ? "var(--blue-soft)" : "var(--green-soft)";
              return (
                <button
                  key={tb.id}
                  type="button"
                  onClick={() => setTab(tb.id)}
                  style={{ padding: "7px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, border: "none", background: active ? activeBg : "transparent", color: active ? fg : "var(--ink-3)", cursor: "pointer", transition: "all .15s" }}
                >
                  {tb.label}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* desktop: 2 columns — mobile: tab-controlled single column */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }} className="svc-wings">
        {/* physio wing */}
        <Reveal delay={60}>
          <div className={`svc-wing svc-wing-physio svc-wing-${tab === "physio" ? "active" : "inactive"}`}>
            <WingHeader tone="blue" IconComp={Icons.Heart} title={T(t.physio, lang)} desc={T(t.physioDesc, lang)} lang={lang} />
            <div style={{ display: "grid", gap: 14 }}>
              {physio.map((s) => (
                <ServiceCard key={s.key} tone="blue" IconComp={s.IconComp} title={T(s, lang)} desc={T(s.desc, lang)} learnMore={learnMore} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* dental wing */}
        <Reveal delay={120}>
          <div className={`svc-wing svc-wing-dental svc-wing-${tab === "dental" ? "active" : "inactive"}`}>
            <WingHeader tone="green" IconComp={Icons.Teeth} title={T(t.dental, lang)} desc={T(t.dentalDesc, lang)} lang={lang} />
            <div style={{ display: "grid", gap: 14 }}>
              {dental.map((s) => (
                <ServiceCard key={s.key} tone="green" IconComp={s.IconComp} title={T(s, lang)} desc={T(s.desc, lang)} learnMore={learnMore} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 821px) { .svc-tabs { display: none !important; } .svc-wing { display: block !important; } }
        @media (max-width: 820px) { .svc-wings { grid-template-columns: 1fr !important; gap: 0 !important; } .svc-wing-inactive { display: none !important; } .svc-wing-active { display: block !important; } }
        @media (max-width: 480px) { .svc-card { padding: 20px 18px 16px !important; } }
      ` }} />
    </Section>
  );
}
