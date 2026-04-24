"use client";
import { I18N } from "@/lib/i18n";
import { Icons } from "@/lib/icons";

export default function Marquee({ lang }) {
  const items = I18N.marquee.items[lang];
  const ff = lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif";

  const itemStyle = {
    display: "inline-flex", alignItems: "center", gap: 10,
    whiteSpace: "nowrap", color: "var(--ink-2)", fontSize: 14, fontWeight: 500,
    fontFamily: ff, paddingRight: 52,
  };

  return (
    <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "#fff", overflow: "hidden", margin: "20px 0 0" }}>
      <div style={{ display: "flex", width: "max-content", padding: "18px 0", animation: "marquee 22s linear infinite" }}>
        {[0, 1].map(copy =>
          items.map((it, i) => (
            <div key={`${copy}-${i}`} style={itemStyle}>
              <span style={{ color: "var(--blue)" }}><Icons.Check /></span>
              {it}
              <span style={{ opacity: .3 }}>·</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
