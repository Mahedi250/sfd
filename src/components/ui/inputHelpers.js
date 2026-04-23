export const inputStyle = {
  width: "100%", padding: "13px 14px",
  background: "#fff", border: "1px solid var(--line)",
  borderRadius: 12, fontSize: 15, fontFamily: "inherit",
  color: "var(--ink)", outline: "none",
  transition: "border-color .15s ease, box-shadow .15s ease",
};

export function onFocusIn(e) {
  e.currentTarget.style.borderColor = "var(--blue)";
  e.currentTarget.style.boxShadow = "0 0 0 4px color-mix(in oklab, var(--blue) 14%, transparent)";
}

export function onFocusOut(e) {
  e.currentTarget.style.borderColor = "var(--line)";
  e.currentTarget.style.boxShadow = "none";
}
