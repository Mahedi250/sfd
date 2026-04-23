"use client";
import { useState } from "react";
import { I18N, T } from "@/lib/i18n";
import { Icons } from "@/lib/icons";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";
import BtnPrimary from "@/components/ui/BtnPrimary";
import Field from "@/components/ui/Field";
import { inputStyle, onFocusIn, onFocusOut } from "@/components/ui/inputHelpers";

const TIMES = ["09:30", "10:30", "11:30", "14:00", "16:00", "17:30", "19:00"];

export default function Appointment({ lang, formRef }) {
  const t = I18N.appt;
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", time: "", notes: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const services = [
    { v: "pain",   label: I18N.servicesSection.items.pain },
    { v: "stroke", label: I18N.servicesSection.items.stroke },
    { v: "sports", label: I18N.servicesSection.items.sports },
    { v: "clean",  label: I18N.servicesSection.items.clean },
    { v: "root",   label: I18N.servicesSection.items.root },
    { v: "cosm",   label: I18N.servicesSection.items.cosm },
  ];

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section id="appointment" label="Appointment" style={{ paddingTop: 96 }}>
      <div ref={formRef} style={{ background: "linear-gradient(180deg, #FFF, #F6F9FD)", border: "1px solid var(--line)", borderRadius: 28, padding: 40, overflow: "hidden", position: "relative" }}>
        <div aria-hidden style={{ position: "absolute", top: -80, right: -80, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, color-mix(in oklab, var(--blue) 18%, transparent), transparent 70%)", pointerEvents: "none" }}/>

        <div style={{ position: "relative", display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 48 }} className="appt-grid">
          <Reveal>
            <div>
              <Eyebrow tone="blue">{T(t.eyebrow, lang)}</Eyebrow>
              <h2 style={{ margin: "14px 0 10px", fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.028em", fontWeight: 700, fontFamily: lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif" }} className="lang-swap">{T(t.title, lang)}</h2>
              <p style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.55, margin: "0 0 24px" }} className="lang-swap">{T(t.sub, lang)}</p>
              <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { IconComp: Icons.Clock,  text: lang === "bn" ? "গড় অপেক্ষার সময় ৮ মিনিট" : "Avg. wait time — 8 min" },
                  { IconComp: Icons.Phone,  text: lang === "bn" ? "ফোন / WhatsApp: ০১৭১২-৩৪৫৬৭৮" : "Phone / WhatsApp: +880 1712-345678" },
                  { IconComp: Icons.MapPin, text: T(I18N.contact.addr, lang) },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13.5, color: "var(--ink-2)" }}>
                    <span style={{ color: "var(--blue-ink)", marginTop: 1 }}><r.IconComp/></span>
                    <span className="lang-swap">{r.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={submit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="appt-form">
              <div style={{ gridColumn: "1 / -1" }}>
                <Field label={<span className="lang-swap">{T(t.name, lang)}</span>}>
                  <input required value={form.name} onChange={set("name")} placeholder={lang === "bn" ? "মোহাম্মদ করিম" : "Mohammad Karim"} style={inputStyle} onFocus={onFocusIn} onBlur={onFocusOut}/>
                </Field>
              </div>
              <Field label={<span className="lang-swap">{T(t.phone, lang)}</span>}>
                <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="+880 1X XXXX XXXX" style={inputStyle} onFocus={onFocusIn} onBlur={onFocusOut}/>
              </Field>
              <Field label={<span className="lang-swap">{T(t.service, lang)}</span>}>
                <select required value={form.service} onChange={set("service")} style={inputStyle} onFocus={onFocusIn} onBlur={onFocusOut}>
                  <option value="">—</option>
                  {services.map((s) => <option key={s.v} value={s.v}>{T(s.label, lang)}</option>)}
                </select>
              </Field>
              <Field label={<span className="lang-swap">{T(t.date, lang)}</span>}>
                <input required type="date" value={form.date} onChange={set("date")} style={inputStyle} onFocus={onFocusIn} onBlur={onFocusOut}/>
              </Field>
              <Field label={<span className="lang-swap">{T(t.time, lang)}</span>}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
                  {TIMES.map((tm) => {
                    const active = form.time === tm;
                    return (
                      <button key={tm} type="button" onClick={() => setForm((f) => ({ ...f, time: tm }))}
                        style={{ padding: "9px 6px", borderRadius: 10, fontSize: 12.5, fontWeight: 600, border: "1px solid " + (active ? "var(--ink)" : "var(--line)"), background: active ? "var(--ink)" : "#fff", color: active ? "#fff" : "var(--ink-2)", cursor: "pointer", transition: "all .15s" }}>
                        {tm}
                      </button>
                    );
                  })}
                </div>
              </Field>
              <div style={{ gridColumn: "1 / -1" }}>
                <Field label={<span className="lang-swap">{T(t.notes, lang)}</span>}>
                  <textarea rows={3} value={form.notes} onChange={set("notes")} placeholder={lang === "bn" ? "সংক্ষিপ্ত বিবরণ…" : "A short note…"} style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }} onFocus={onFocusIn} onBlur={onFocusOut}/>
                </Field>
              </div>
              <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", marginTop: 4 }}>
                <div style={{ fontSize: 12, color: "var(--ink-3)" }} className="lang-swap">
                  {sent
                    ? <span style={{ color: "var(--green-ink)", fontWeight: 600 }}>✓ {T(t.confirm, lang)}</span>
                    : T(t.consent, lang)}
                </div>
                <BtnPrimary type="submit" icon={<Icons.Arrow/>}><span className="lang-swap">{T(t.submit, lang)}</span></BtnPrimary>
              </div>
            </form>
          </Reveal>
        </div>

        <style>{`@media (max-width: 860px) { .appt-grid { grid-template-columns: 1fr !important; gap: 28px !important; } .appt-form { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </Section>
  );
}
