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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const services = [
    { v: "physio",     label: I18N.servicesSection.physio },
    { v: "dental",     label: I18N.servicesSection.dental },
    { v: "homePhysio", label: I18N.servicesSection.homePhysio },
  ];

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (json.success) {
        setSent(true);
        setForm({ name: "", phone: "", service: "", date: "", time: "", notes: "" });
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const infoRows = [
    { IconComp: Icons.Clock,  text: lang === "bn" ? "গড় অপেক্ষার সময় ৮ মিনিট" : "Avg. wait time — 8 min", accent: "var(--blue)" },
    { IconComp: Icons.Phone,  text: lang === "bn" ? "ফোন / WhatsApp: ০১৮৩৪-৯৪২১১০" : "Phone / WhatsApp: +880 1834-942110", accent: "var(--green)" },
    { IconComp: Icons.MapPin, text: T(I18N.contact.addr, lang), accent: "var(--ink)" },
  ];

  return (
    <Section id="appointment" label="Appointment" style={{ paddingTop: 96 }}>
      <div
        ref={formRef}
        style={{
          background: "linear-gradient(160deg, #f8fbff 0%, #ffffff 50%, #f4faf6 100%)",
          border: "1px solid var(--line)",
          borderRadius: 32,
          padding: "56px 52px",
          overflow: "hidden",
          position: "relative",
        }}
        className="appt-wrap"
      >
        {/* decorative blobs */}
        <div aria-hidden style={{ position: "absolute", top: -100, right: -100, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle, color-mix(in oklab, var(--blue) 14%, transparent), transparent 70%)", pointerEvents: "none" }}/>
        <div aria-hidden style={{ position: "absolute", bottom: -80, left: -80, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, color-mix(in oklab, var(--green) 12%, transparent), transparent 70%)", pointerEvents: "none" }}/>

        <div
          style={{ position: "relative", display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 56, alignItems: "start" }}
          className="appt-grid"
        >
          {/* ── Left: info panel ── */}
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div>
                <Eyebrow tone="blue">{T(t.eyebrow, lang)}</Eyebrow>
                <h2
                  style={{ margin: "14px 0 12px", fontSize: "clamp(26px, 2.8vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.028em", fontWeight: 800, fontFamily: lang === "bn" ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif" }}
                  className="lang-swap"
                >
                  {T(t.title, lang)}
                </h2>
                <p
                  style={{ color: "var(--ink-2)", fontSize: 15.5, lineHeight: 1.65, margin: 0 }}
                  className="lang-swap"
                >
                  {T(t.sub, lang)}
                </p>
              </div>

              {/* info card */}
              <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,.04)" }}>
                {infoRows.map((r, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                      padding: "16px 20px",
                      borderBottom: i < infoRows.length - 1 ? "1px solid var(--line)" : "none",
                    }}
                  >
                    <div style={{ width: 34, height: 34, borderRadius: 10, background: `color-mix(in oklab, ${r.accent} 10%, transparent)`, color: r.accent, display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1 }}>
                      <r.IconComp />
                    </div>
                    <span className="lang-swap" style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5, paddingTop: 6 }}>{r.text}</span>
                  </div>
                ))}
              </div>

              {/* hours badge */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[
                  lang === "bn" ? "শনি–বৃহস্পতি ৯টা–৯টা" : "Sat–Thu 9AM–9PM",
                  lang === "bn" ? "শুক্রবার ৪টা–৮টা" : "Fri 4PM–8PM",
                ].map((label, i) => (
                  <span key={i} style={{ fontSize: 12, fontWeight: 600, color: i === 0 ? "var(--blue-ink)" : "var(--green-ink)", background: i === 0 ? "var(--blue-soft)" : "var(--green-soft)", borderRadius: 999, padding: "5px 12px" }}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Right: form ── */}
          <Reveal delay={100}>
            <form
              onSubmit={submit}
              style={{ display: "flex", flexDirection: "column", gap: 18 }}
            >
              {/* name full width */}
              <Field label={<span className="lang-swap">{T(t.name, lang)}</span>}>
                <input required value={form.name} onChange={set("name")} placeholder={lang === "bn" ? "মোহাম্মদ করিম" : "Mohammad Karim"} style={inputStyle} onFocus={onFocusIn} onBlur={onFocusOut}/>
              </Field>

              {/* phone + service */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="appt-2col">
                <Field label={<span className="lang-swap">{T(t.phone, lang)}</span>}>
                  <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="01XXXXXXXXX" pattern="[0-9]{11}" maxLength={11} title={lang === "bn" ? "১১ সংখ্যার মোবাইল নম্বর দিন" : "Enter 11-digit mobile number"} style={inputStyle} onFocus={onFocusIn} onBlur={onFocusOut}/>
                </Field>
                <Field label={<span className="lang-swap">{T(t.service, lang)}</span>}>
                  <select required value={form.service} onChange={set("service")} style={inputStyle} onFocus={onFocusIn} onBlur={onFocusOut}>
                    <option value="">—</option>
                    {services.map((s) => <option key={s.v} value={s.v}>{T(s.label, lang)}</option>)}
                  </select>
                </Field>
              </div>

              {/* date full width */}
              <Field label={<span className="lang-swap">{T(t.date, lang)}</span>}>
                <input required type="date" value={form.date} onChange={set("date")} style={inputStyle} onFocus={onFocusIn} onBlur={onFocusOut}/>
              </Field>

              {/* time slots */}
              <Field label={<span className="lang-swap">{T(t.time, lang)}</span>}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }} className="appt-times">
                  {TIMES.map((tm) => {
                    const active = form.time === tm;
                    return (
                      <button
                        key={tm}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, time: tm }))}
                        style={{
                          padding: "10px 6px",
                          borderRadius: 12,
                          fontSize: 13,
                          fontWeight: 600,
                          border: "1px solid " + (active ? "var(--blue)" : "var(--line)"),
                          background: active ? "var(--blue)" : "#fff",
                          color: active ? "#fff" : "var(--ink-2)",
                          cursor: "pointer",
                          transition: "all .15s",
                          boxShadow: active ? "0 2px 8px color-mix(in oklab, var(--blue) 30%, transparent)" : "none",
                        }}
                      >
                        {tm}
                      </button>
                    );
                  })}
                </div>
              </Field>

              {/* notes */}
              <Field label={<span className="lang-swap">{T(t.notes, lang)}</span>}>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={set("notes")}
                  placeholder={lang === "bn" ? "সংক্ষিপ্ত বিবরণ…" : "A short note…"}
                  style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  onFocus={onFocusIn}
                  onBlur={onFocusOut}
                />
              </Field>

              {/* submit row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, flexWrap: "wrap", paddingTop: 4 }} className="appt-footer">
                <div style={{ fontSize: 12, color: "var(--ink-3)" }} className="lang-swap appt-footer-item">
                  {sent
                    ? <span style={{ color: "var(--green-ink)", fontWeight: 700 }}>✓ {T(t.confirm, lang)}</span>
                    : error
                    ? <span style={{ color: "#c0392b", fontWeight: 700 }}>{lang === "bn" ? "সমস্যা হয়েছে, আবার চেষ্টা করুন।" : "Something went wrong. Please try again."}</span>
                    : T(t.consent, lang)}
                </div>
                <BtnPrimary type="submit" icon={sending ? null : <Icons.Arrow/>} className="appt-footer-item">
                  <span className="lang-swap">{sending ? (lang === "bn" ? "পাঠানো হচ্ছে…" : "Sending…") : T(t.submit, lang)}</span>
                </BtnPrimary>
              </div>
            </form>
          </Reveal>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 900px) { .appt-wrap { padding: 40px 32px !important; } .appt-grid { grid-template-columns: 1fr !important; gap: 36px !important; } }
          @media (max-width: 640px) { .appt-wrap { padding: 32px 20px !important; border-radius: 20px !important; } .appt-2col { grid-template-columns: 1fr !important; } .appt-times { grid-template-columns: repeat(4, 1fr) !important; gap: 6px !important; } }
          @media (max-width: 400px) { .appt-times { grid-template-columns: repeat(3, 1fr) !important; } .appt-footer { flex-direction: column !important; align-items: stretch !important; } .appt-footer-item { text-align: center; } }
        ` }} />
      </div>
    </Section>
  );
}
