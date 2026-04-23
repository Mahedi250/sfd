export default function Section({ id, children, style, label }) {
  return (
    <section id={id} style={{ padding: "96px 40px", ...style }} data-screen-label={label}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>{children}</div>
    </section>
  );
}
