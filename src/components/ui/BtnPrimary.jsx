"use client";

const cls = {
  display: "inline-flex", alignItems: "center", gap: 10,
  background: "var(--ink)", color: "#fff",
  padding: "14px 22px", borderRadius: 999,
  fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em",
  border: "1px solid var(--ink)",
  boxShadow: "var(--shadow-md)",
  cursor: "pointer", textDecoration: "none",
  transition: "transform .2s ease, box-shadow .2s ease, background .2s ease",
  justifyContent: "center",
  whiteSpace: "nowrap",
};

export default function BtnPrimary({ children, onClick, type = "button", href, icon, full }) {
  const style = { ...cls, width: full ? "100%" : "auto" };
  const props = {
    style,
    onMouseEnter: (e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; },
    onMouseLeave: (e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; },
    onClick,
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag {...props} href={href} type={href ? undefined : type}>
      {children}
      {icon && <span style={{ display: "inline-flex" }}>{icon}</span>}
    </Tag>
  );
}
