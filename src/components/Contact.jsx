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
                { IconComp: Icons.Phone,  label: "+880 1712-345678  ·  +880 2-333-456789" },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ width: 36, height: 36, borderRadius: 10, background: "var(--blue-soft)", color: "var(--blue-ink)", display: "grid", placeItems: "center", flex: "none" }}><r.IconComp/></span>
                  <span style={{ fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.5, paddingTop: 8 }} className="lang-swap">{r.label}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <BtnPrimary href="tel:+8801712345678" icon={<Icons.Phone/>}><span className="lang-swap">{T(t.call, lang)}</span></BtnPrimary>
              <a href="https://wa.me/8801712345678" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--green)", color: "#fff", padding: "13px 20px", borderRadius: 999, fontSize: 15, fontWeight: 600, border: "1px solid var(--green)", textDecoration: "none", boxShadow: "var(--shadow-sm)" }}>
                <Icons.Whatsapp/> <span className="lang-swap">{T(t.wa, lang)}</span>
              </a>
              <BtnGhost href="#" icon={<Icons.MapPin/>}><span className="lang-swap">{T(t.dir, lang)}</span></BtnGhost>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", border: "1px solid var(--line)", height: 420, background: "#EAF0F6" }}>
            <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(15,23,42,.05)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="400" height="400" fill="#EEF3F8"/>
              <rect width="400" height="400" fill="url(#grid)"/>
              <path d="M -20 280 Q 80 260 160 300 T 340 320 T 440 340" stroke="#BCD9EE" strokeWidth="34" fill="none" strokeLinecap="round" opacity=".9"/>
              <path d="M -20 280 Q 80 260 160 300 T 340 320 T 440 340" stroke="#D8E8F3" strokeWidth="34" fill="none" strokeLinecap="round" strokeDasharray="2 14" opacity=".6"/>
              <path d="M 0 180 L 400 200" stroke="#fff" strokeWidth="10"/>
              <path d="M 220 0 L 240 400" stroke="#fff" strokeWidth="10"/>
              <path d="M 60 60 L 360 200" stroke="#fff" strokeWidth="6"/>
              <path d="M 0 120 L 220 180" stroke="#fff" strokeWidth="4"/>
              {[[40,40,80,60],[150,20,50,80],[280,40,90,90],[40,200,100,60],[280,240,100,40],[60,320,120,50]].map(([x,y,w,h], i) => (
                <rect key={i} x={x} y={y} width={w} height={h} fill="#F7FAFD" stroke="#D8E0EA" rx="3"/>
              ))}
              <text x="60"  y="110" fontFamily="JetBrains Mono, monospace" fontSize="9"  fill="#7A8695">DIT ROAD</text>
              <text x="160" y="195" fontFamily="JetBrains Mono, monospace" fontSize="9"  fill="#7A8695">B.B. ROAD</text>
              <text x="250" y="350" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#7A8695" fontStyle="italic">Shitalakshya R.</text>
            </svg>
            <div style={{ position: "absolute", left: "48%", top: "44%", transform: "translate(-50%, -100%)" }}>
              <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 12, padding: "8px 12px", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", boxShadow: "var(--shadow-md)" }} className="lang-swap">
                {lang === "bn" ? "শীতলক্ষা সেন্টার" : "Shitolokkha Center"}
              </div>
              <div style={{ width: 16, height: 16, borderRadius: "50% 50% 50% 0", background: "var(--blue)", border: "3px solid #fff", transform: "rotate(-45deg)", margin: "6px auto 0", boxShadow: "0 4px 10px rgba(59,130,246,.35)" }}/>
            </div>
            <div style={{ position: "absolute", bottom: 12, left: 12, background: "rgba(255,255,255,.9)", border: "1px solid var(--line)", borderRadius: 8, padding: "6px 10px", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "var(--ink-3)" }}>23.63°N · 90.50°E</div>
          </div>
        </Reveal>
      </div>
      <style>{`@media (max-width: 820px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}
