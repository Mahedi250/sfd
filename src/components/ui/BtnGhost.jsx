"use client";

const cls = {
  display: "inline-flex", alignItems: "center", gap: 10,
  background: "transparent", color: "var(--ink)",
  padding: "13px 20px", borderRadius: 999,
  fontSize: 15, fontWeight: 600,
  border: "1px solid var(--line)",
  cursor: "pointer", textDecoration: "none",
  transition: "background .2s ease, border-color .2s ease",
};

export default function BtnGhost({ children, onClick, href, icon }) {
  const props = {
    style: cls,
    onMouseEnter: (e) => { e.currentTarget.style.background = "#F3F6FA"; e.currentTarget.style.borderColor = "#D6DCE6"; },
    onMouseLeave: (e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--line)"; },
    onClick,
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag {...props} href={href}>
      {icon && <span style={{ display: "inline-flex" }}>{icon}</span>}
      {children}
    </Tag>
  );
}
