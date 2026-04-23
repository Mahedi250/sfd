"use client";
import { useState, useEffect, useRef } from "react";
import { I18N } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import About from "@/components/About";
import Appointment from "@/components/Appointment";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Tweaks from "@/components/Tweaks";

const DEFAULT_TWEAKS = { lang: "bn", accent: "blue", heroVariant: "split", density: "comfortable", showTestimonials: true };

export default function AppShell() {
  const [tweaks, setTweaks] = useState(DEFAULT_TWEAKS);
  const [tweaksVisible, setTweaksVisible] = useState(false);
  const formRef = useRef(null);
  const lang = tweaks.lang || "bn";

  const setLang = (l) => {
    if (l === lang) return;
    document.body.classList.add("lang-switching");
    setTimeout(() => {
      setTweaks((t) => ({ ...t, lang: l }));
      try { window.parent?.postMessage({ type: "__edit_mode_set_keys", edits: { lang: l } }, "*"); } catch {}
      setTimeout(() => document.body.classList.remove("lang-switching"), 40);
    }, 220);
  };

  useEffect(() => {
    document.body.classList.toggle("lang-bn", lang === "bn");
    document.documentElement.lang = lang === "bn" ? "bn" : "en";
    document.title = lang === "bn" ? I18N.brand.bn : I18N.brand.en;
  }, [lang]);

  useEffect(() => {
    const root = document.documentElement;
    if (tweaks.accent === "green") {
      root.style.setProperty("--blue", "oklch(0.66 0.11 160)");
      root.style.setProperty("--blue-soft", "oklch(0.96 0.02 160)");
      root.style.setProperty("--blue-ink", "oklch(0.38 0.09 160)");
    } else if (tweaks.accent === "teal") {
      root.style.setProperty("--blue", "oklch(0.64 0.12 200)");
      root.style.setProperty("--blue-soft", "oklch(0.96 0.02 200)");
      root.style.setProperty("--blue-ink", "oklch(0.36 0.1 200)");
    } else {
      root.style.setProperty("--blue", "oklch(0.62 0.14 235)");
      root.style.setProperty("--blue-soft", "oklch(0.96 0.02 235)");
      root.style.setProperty("--blue-ink", "oklch(0.35 0.12 235)");
    }
  }, [tweaks.accent]);

  useEffect(() => {
    document.documentElement.style.setProperty("--section-pad", tweaks.density === "compact" ? "72px" : "96px");
  }, [tweaks.density]);

  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data;
      if (!d || typeof d !== "object") return;
      if (d.type === "__activate_edit_mode")   setTweaksVisible(true);
      if (d.type === "__deactivate_edit_mode") setTweaksVisible(false);
    };
    window.addEventListener("message", onMsg);
    try { window.parent?.postMessage({ type: "__edit_mode_available" }, "*"); } catch {}
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById("appointment");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <>
      <Navbar lang={lang} setLang={setLang} onBook={scrollToForm}/>
      <Hero lang={lang} onBook={scrollToForm}/>
      <Marquee lang={lang}/>
      <Services lang={lang}/>
      <About lang={lang}/>
      <Appointment lang={lang} formRef={formRef}/>
      {tweaks.showTestimonials && <Testimonials lang={lang}/>}
      <Contact lang={lang}/>
      <Footer lang={lang}/>
      <Tweaks visible={tweaksVisible} tweaks={tweaks} setTweaks={setTweaks}/>
    </>
  );
}
