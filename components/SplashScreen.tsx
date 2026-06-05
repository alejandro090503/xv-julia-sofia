"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  onOpen: () => void;
}

export default function SplashScreen({ onOpen }: Props) {
  const titleRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLButtonElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      if (el) el.style.opacity = "1";
    });
    const schedule = [
      { ref: titleRef, delay: 400, styles: { opacity: "1", transform: "translateY(0)" } },
      { ref: nameRef, delay: 800, styles: { opacity: "1", transform: "translateY(0)" } },
      { ref: hintRef, delay: 1300, styles: { opacity: "1" } },
    ];
    const timers = schedule.map(({ ref, delay, styles }) =>
      setTimeout(() => { if (ref.current) Object.assign(ref.current.style, styles); }, delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleOpen = () => {
    if (exiting) return;
    setExiting(true);
    const el = screenRef.current;
    if (el) {
      el.style.transition = "opacity 0.75s cubic-bezier(0.4,0,0.2,1)";
      el.style.opacity = "0";
    }
    onOpen();
  };

  return (
    <div
      ref={screenRef}
      onClick={handleOpen}
      role="button"
      aria-label="Toca para ver la invitación"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        overflow: "hidden",
        cursor: "pointer",
        background: "linear-gradient(160deg, #0f2618 0%, #1c402c 40%, #0f2618 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0,
        transition: "opacity 0.6s ease",
      }}
    >
      <div style={{ position: "fixed", inset: 0, zIndex: -1,
        background: "linear-gradient(160deg, #0f2618 0%, #1c402c 40%, #0f2618 100%)" }} />

      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 45% at 50% 40%, rgba(212,197,178,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <Particles />

      <div
        ref={titleRef}
        style={{
          fontFamily: "var(--font-great-vibes), cursive",
          fontSize: "clamp(48px, 14vw, 72px)",
          lineHeight: 1.15,
          color: "#D4C5B2",
          textShadow: "0 2px 20px rgba(212,197,178,0.30)",
          opacity: 0,
          transform: "translateY(16px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          textAlign: "center",
        }}
      >
        Mis XV Años
      </div>

      <div
        ref={nameRef}
        style={{
          fontFamily: "var(--font-great-vibes), cursive",
          fontSize: "clamp(56px, 18vw, 96px)",
          lineHeight: 1.15,
          color: "#D4C5B2",
          textShadow: "0 3px 24px rgba(212,197,178,0.35)",
          marginTop: 4,
          opacity: 0,
          transform: "translateY(16px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        Julia Sofía
      </div>

      <div style={{
        width: 100,
        height: 1,
        margin: "28px auto 10px",
        background: "linear-gradient(90deg, transparent, #D4C5B2, transparent)",
        opacity: 0.45,
      }} />

      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 16,
        letterSpacing: 3,
        color: "rgba(212,197,178,0.75)",
        textAlign: "center",
        marginBottom: 32,
        fontWeight: 500,
      }}>
        Has recibido una invitación especial
      </p>

      <button
        ref={hintRef}
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: 13,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#D4C5B2",
          opacity: 0,
          cursor: "pointer",
          whiteSpace: "nowrap",
          padding: "14px 40px",
          background: "rgba(212,197,178,0.10)",
          border: "1px solid rgba(212,197,178,0.30)",
          borderRadius: 40,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          animation: "hintFloat 3.2s ease-in-out infinite",
          transition: "opacity 0.7s ease",
          fontWeight: 600,
          textIndent: 6,
        }}
      >
        Toca para abrir
      </button>
    </div>
  );
}

const PARTICLES = [
  { left: "8%",  size: 4, dur: 9,  del: 0,   color: "#D4C5B2" },
  { left: "22%", size: 3, dur: 12, del: 1.2, color: "rgba(212,197,178,0.6)" },
  { left: "38%", size: 5, dur: 8,  del: 0.5, color: "#D4C5B2" },
  { left: "53%", size: 3, dur: 10, del: 2.1, color: "rgba(212,197,178,0.5)" },
  { left: "67%", size: 4, dur: 11, del: 0.8, color: "#D4C5B2" },
  { left: "81%", size: 3, dur: 9,  del: 1.7, color: "rgba(212,197,178,0.6)" },
  { left: "15%", size: 5, dur: 13, del: 3,   color: "#D4C5B2" },
  { left: "47%", size: 3, dur: 10, del: 2.5, color: "rgba(212,197,178,0.5)" },
  { left: "72%", size: 4, dur: 12, del: 0.3, color: "#D4C5B2" },
  { left: "91%", size: 3, dur: 9,  del: 1.5, color: "rgba(212,197,178,0.6)" },
];

function Particles() {
  return (
    <>
      {PARTICLES.map((p, i) => (
        <div key={i} style={{
          position: "fixed",
          bottom: -10,
          left: p.left,
          width: p.size,
          height: p.size,
          borderRadius: "50%",
          background: p.color,
          opacity: 0.5,
          animation: `floatUp ${p.dur}s ${p.del}s linear infinite`,
          pointerEvents: "none",
        }} />
      ))}
    </>
  );
}
