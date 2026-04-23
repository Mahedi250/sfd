"use client";

const ROWS = [
  { k: "lang",        label: "Language",    opts: [["bn","বাংলা"],["en","EN"]] },
  { k: "accent",      label: "Accent",      opts: [["blue","Blue"],["green","Green"],["teal","Teal"]] },
  { k: "heroVariant", label: "Hero layout", opts: [["split","Split"],["center","Centered"]] },
  { k: "density",     label: "Density",     opts: [["comfortable","Comfortable"],["compact","Compact"]] },
];

export default function Tweaks({ visible, tweaks, setTweaks }) {
  if (!visible) return null;

  const update = (k, v) => {
    setTweaks((prev) => ({ ...prev, [k]: v }));
    try { window.parent?.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*"); } catch {}
  };

  return (
    <div style={{ position: "fixed", right: 20, bottom: 20, zIndex: 100, width: 280, background: "rgba(255,255,255,.96)", border: "1px solid var(--line)", borderRadius: 16, padding: 16, backdropFilter: "blur(10px)", boxShadow: "var(--shadow-lg)", fontFamily: "'Inter', sans-serif" }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 14 }}>Tweaks</div>
      {ROWS.map((r) => (
        <div key={r.k} style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 11, color: "var(--ink-3)", marginBottom: 6, fontWeight: 600 }}>{r.label}</div>
          <div style={{ display: "flex", gap: 4, background: "#F1F4F9", borderRadius: 8, padding: 3 }}>
            {r.opts.map(([v, l]) => {
              const active = tweaks[r.k] === v;
              return (
                <button key={v} onClick={() => update(r.k, v)} style={{ flex: 1, padding: "6px 4px", fontSize: 12, fontWeight: 600, border: "none", borderRadius: 6, cursor: "pointer", background: active ? "#fff" : "transparent", color: active ? "var(--ink)" : "var(--ink-3)", boxShadow: active ? "var(--shadow-sm)" : "none", transition: "all .15s" }}>{l}</button>
              );
            })}
          </div>
        </div>
      ))}
      <div style={{ marginBottom: 4 }}>
        <div style={{ fontSize: 11, color: "var(--ink-3)", marginBottom: 6, fontWeight: 600 }}>Testimonials</div>
        <button onClick={() => update("showTestimonials", !tweaks.showTestimonials)} style={{ width: "100%", padding: "7px", fontSize: 12, fontWeight: 600, border: "1px solid var(--line)", borderRadius: 8, cursor: "pointer", background: tweaks.showTestimonials ? "var(--ink)" : "#fff", color: tweaks.showTestimonials ? "#fff" : "var(--ink-2)" }}>
          {tweaks.showTestimonials ? "Visible" : "Hidden"}
        </button>
      </div>
    </div>
  );
}
