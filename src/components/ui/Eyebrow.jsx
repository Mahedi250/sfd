export default function Eyebrow({ children, tone = "blue" }) {
  const bg  = tone === "green" ? "var(--green-soft)" : "var(--blue-soft)";
  const col = tone === "green" ? "var(--green-ink)"  : "var(--blue-ink)";
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: bg, color: col,
      padding: "6px 12px", borderRadius: 999,
      fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase",
      fontFamily: "'Inter', sans-serif",
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 999, background: col }} /> {children}
    </div>
  );
}
