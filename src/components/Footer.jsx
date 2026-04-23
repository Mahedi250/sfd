"use client";
import { I18N, T } from "@/lib/i18n";
import { Icons } from "@/lib/icons";

export default function Footer({ lang }) {
  return (
    <footer data-screen-label="Footer" style={{ background: "var(--ink)", color: "#CDD5E1", padding: "56px 40px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40 }} className="ftr-grid">
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#fff" }}>
            <Icons.Brand/>
            <div style={{ lineHeight: 1.15 }}>
              <div style={{ fontSize: 14, fontWeight: 700, fontFamily: "'Hind Siliguri', sans-serif" }}>শীতলক্ষা</div>
              <div style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#8E99AD" }}>Physio · Dental</div>
            </div>
          </div>
          <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.55, color: "#A7B0C1", maxWidth: 320, fontFamily: lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif" }} className="lang-swap">
            {T(I18N.footer.tagline, lang)}
          </p>
        </div>
        {[
          { title: { bn: "সেবা", en: "Care" },          items: [I18N.servicesSection.items.pain, I18N.servicesSection.items.stroke, I18N.servicesSection.items.clean, I18N.servicesSection.items.cosm] },
          { title: { bn: "তথ্য", en: "Information" },   items: [I18N.nav.about, I18N.nav.appointment, I18N.nav.contact] },
          { title: { bn: "খোলা সময়", en: "Opening hours" }, items: [I18N.contact.hours, I18N.contact.friday] },
        ].map((c, i) => (
          <div key={i}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#8E99AD", marginBottom: 16 }} className="lang-swap">{T(c.title, lang)}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {c.items.map((it, j) => (
                <li key={j} style={{ fontSize: 13.5, color: "#C6CEDC", fontFamily: lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif" }} className="lang-swap">{T(it, lang)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* banner card */}
      <div style={{ maxWidth: 1200, margin: "40px auto 0", paddingTop: 32, borderTop: "1px solid #233047" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className="ftr-banner" style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: "1px solid #2A3A52", boxShadow: "0 4px 24px rgba(0,0,0,.35)", maxWidth: 420, width: "100%" }}>
            <img
              src="/assets/banner.jpg"
              alt="শীতলক্ষা জেনারেল হাসপাতাল ব্যানার"
              style={{ width: "100%", display: "block", borderRadius: 16 }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(5,12,24,.55))", borderRadius: 16, pointerEvents: "none" }}/>
            <div style={{ position: "absolute", bottom: 12, left: 14, right: 14, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <span style={{ fontSize: 11.5, color: "#E8EDF5", fontWeight: 600, fontFamily: "'Hind Siliguri', sans-serif", lineHeight: 1.4 }}>
                {T(I18N.contact.addr, lang)}
              </span>
              <span style={{ fontSize: 11, color: "#A7FFD0", fontWeight: 700, whiteSpace: "nowrap", marginLeft: 8 }}>
                ০১৮৩৪-৯৪২১১০
              </span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #1A2A3A", fontSize: 12, color: "#8E99AD", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <span className="lang-swap">{T(I18N.footer.rights, lang)}</span>
          <span className="mono">v 2026.04</span>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 820px) { .ftr-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .ftr-banner { max-width: 100% !important; } }
      ` }} />
    </footer>
  );
}
