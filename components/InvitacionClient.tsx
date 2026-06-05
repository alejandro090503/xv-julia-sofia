"use client";
import { useState, useRef } from "react";
import SplashScreen from "./SplashScreen";
import Hero from "./Hero";
import Ornament from "./Ornament";
import CountdownTimer from "./CountdownTimer";
import Ubicacion from "./Ubicacion";
import CalendarioBtn from "./CalendarioBtn";
import DressCode from "./DressCode";
import Familia from "./Familia";
import MesaRegalos from "./MesaRegalos";
import RSVPSection from "./RSVPSection";
import Footer from "./Footer";
import MusicFab, { type MusicFabHandle } from "./MusicFab";
import ScrollReveal from "./ScrollReveal";

export default function InvitacionClient() {
  const [contentVisible, setContentVisible] = useState(false);
  const [splashMounted, setSplashMounted] = useState(true);
  const musicRef = useRef<MusicFabHandle>(null);

  const handleOpen = () => {
    musicRef.current?.play();
    setContentVisible(true);
    setTimeout(() => {
      setSplashMounted(false);
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 820);
  };

  return (
    <>
      {splashMounted && <SplashScreen onOpen={handleOpen} />}

      <div
        style={{
          opacity: contentVisible ? 1 : 0,
          transition: "opacity 0.85s ease",
          maxWidth: 430,
          margin: "0 auto",
          position: "relative",
          overflowX: "clip",
          zIndex: 1,
          backgroundColor: "#f7f4ef",
        }}
      >
        <Hero />

        <ScrollReveal>
          <Familia />
        </ScrollReveal>

        <ScrollReveal>
          <Ornament />
        </ScrollReveal>

        <ScrollReveal>
          <div style={{ padding: "32px 26px 10px", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18 }}>
              <div style={{ flex: 1, maxWidth: 60, height: 1, background: "linear-gradient(to right,transparent,#1c402c)", opacity: 0.3 }} />
              <div style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 700,
                fontSize: 24,
                letterSpacing: 8,
                textTransform: "uppercase",
                color: "#1c402c",
                textIndent: 8,
              }}>
                27 · Junio · 2026
              </div>
              <div style={{ flex: 1, maxWidth: 60, height: 1, background: "linear-gradient(to left,transparent,#1c402c)", opacity: 0.3 }} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <CountdownTimer />
        </ScrollReveal>

        <ScrollReveal>
          <Ornament />
        </ScrollReveal>

        <ScrollReveal>
          <Ubicacion />
        </ScrollReveal>

        <ScrollReveal>
          <CalendarioBtn />
        </ScrollReveal>

        <ScrollReveal>
          <Ornament />
        </ScrollReveal>

        <ScrollReveal>
          <DressCode />
        </ScrollReveal>

        <ScrollReveal>
          <Ornament />
        </ScrollReveal>

        <ScrollReveal>
          <MesaRegalos />
        </ScrollReveal>

        <ScrollReveal>
          <Ornament />
        </ScrollReveal>

        <ScrollReveal>
          <RSVPSection />
        </ScrollReveal>

        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </div>

      <MusicFab ref={musicRef} />
    </>
  );
}
