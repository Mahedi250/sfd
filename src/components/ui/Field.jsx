export default function Field({ label, children, hint }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)", letterSpacing: ".02em" }}>{label}</span>
      {children}
      {hint && <span style={{ fontSize: 11, color: "var(--ink-3)" }}>{hint}</span>}
    </label>
  );
}
