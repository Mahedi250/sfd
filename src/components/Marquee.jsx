"use client";
import { I18N } from "@/lib/i18n";
import { Icons } from "@/lib/icons";

export default function Marquee({ lang }) {
  const items = I18N.marquee.items[lang];
  const row = [...items, ...items];
  return (
    <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "#fff", overflow: "hidden", margin: "20px 0 0" }}>
      <div style={{ display: "flex", gap: 40, padding: "18px 0", animation: "marquee 30s linear infinite" }}>
        {row.map((it, i) => (
          <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 10, whiteSpace: "nowrap", color: "var(--ink-2)", fontSize: 14, fontWeight: 500, fontFamily: lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif" }}>
            <span style={{ color: "var(--blue)" }}><Icons.Check/></span>
            {it}
            <span style={{ opacity: .3, margin: "0 20px" }}>·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
