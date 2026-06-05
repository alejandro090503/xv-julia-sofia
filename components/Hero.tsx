"use client";
import { useEffect, useRef } from "react";

const PARTICLES = [
  { left: "7%",  size: 4, dur: 9,  del: 0,   color: "#D4C5B2" },
  { left: "21%", size: 3, dur: 12, del: 1.4, color: "rgba(212,197,178,0.5)" },
  { left: "36%", size: 5, dur: 8,  del: 0.6, color: "#D4C5B2" },
  { left: "54%", size: 3, dur: 10, del: 2.2, color: "rgba(212,197,178,0.5)" },
  { left: "69%", size: 4, dur: 11, del: 0.9, color: "#D4C5B2" },
  { left: "84%", size: 3, dur: 9,  del: 1.8, color: "rgba(212,197,178,0.5)" },
  { left: "13%", size: 5, dur: 13, del: 3.1, color: "#D4C5B2" },
  { left: "47%", size: 3, dur: 10, del: 2.7, color: "rgba(212,197,178,0.6)" },
  { left: "75%", size: 4, dur: 12, del: 0.4, color: "#D4C5B2" },
  { left: "91%", size: 3, dur: 8,  del: 1.6, color: "rgba(212,197,178,0.5)" },
];

function OrnamentBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", padding: "0 10px" }}>
      <div style={{ flex: 1, height: 0.5, background: "linear-gradient(90deg, transparent, rgba(212,197,178,0.55))" }} />
      <svg width="5" height="5" viewBox="0 0 5 5">
        <rect width="5" height="5" fill="#D4C5B2" transform="rotate(45 2.5 2.5)" opacity="0.70" />
      </svg>
      <svg width="11" height="11" viewBox="0 0 11 11">
        <rect x="1.5" y="1.5" width="8" height="8" fill="#D4C5B2" transform="rotate(45 5.5 5.5)" opacity="0.85" />
        <rect x="3.5" y="3.5" width="4" height="4" fill="#1c402c" transform="rotate(45 5.5 5.5)" />
        <rect x="4.5" y="4.5" width="2" height="2" fill="#D4C5B2" transform="rotate(45 5.5 5.5)" opacity="0.80" />
      </svg>
      <svg width="5" height="5" viewBox="0 0 5 5">
        <rect width="5" height="5" fill="#D4C5B2" transform="rotate(45 2.5 2.5)" opacity="0.70" />
      </svg>
      <div style={{ flex: 1, height: 0.5, background: "linear-gradient(90deg, rgba(212,197,178,0.55), transparent)" }} />
    </div>
  );
}

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const xvRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const schedule = [
      { el: messageRef, delay: 180, styles: { opacity: "1", transform: "translateY(0)" } },
      { el: nameRef, delay: 480, styles: { opacity: "1", transform: "translateY(0) scale(1)" } },
      { el: xvRef, delay: 900, styles: { opacity: "1", transform: "translateY(0)" } },
      { el: dateRef, delay: 1200, styles: { opacity: "1", transform: "translateY(0)" } },
    ];
    const timers = schedule.map(({ el, delay, styles }) =>
      setTimeout(() => { if (el.current) Object.assign(el.current.style, styles); }, delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(165deg, #0f2618 0%, #1c402c 50%, #0f2618 100%)",
        overflow: "hidden",
        padding: "62px 0 48px",
      }}
    >
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 70% 50% at 50% 42%, rgba(212,197,178,0.10) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {PARTICLES.map((p, i) => (
        <div key={i} style={{
          position: "absolute",
          bottom: -10, left: p.left,
          width: p.size, height: p.size,
          borderRadius: "50%",
          background: p.color,
          opacity: 0.45,
          animation: `floatUp ${p.dur}s ${p.del}s linear infinite`,
          pointerEvents: "none",
        }} />
      ))}

      <p
        ref={messageRef}
        style={{
          maxWidth: 360,
          padding: "0 28px 24px",
          margin: 0,
          textAlign: "center",
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: 18,
          lineHeight: 1.72,
          letterSpacing: 0.5,
          color: "rgba(212,197,178,0.85)",
          opacity: 0,
          transform: "translateY(14px)",
          transition: "opacity 0.95s ease, transform 0.95s ease",
        }}
      >
        Hoy comienza una nueva etapa llena de sueños, ilusiones y momentos que guardaré por siempre en mi corazón.
      </p>

      <div style={{ width: "100%", textAlign: "center", overflow: "visible", padding: "0 0 4px" }}>
        <h1
          ref={nameRef}
          style={{
            fontFamily: "var(--font-great-vibes), cursive",
            fontSize: "min(20vw, 100px)",
            lineHeight: 1.2,
            color: "#D4C5B2",
            textShadow: "0 3px 22px rgba(212,197,178,0.30)",
            margin: 0,
            padding: "4px 28px 12px 22px",
            opacity: 0,
            transform: "translateY(22px) scale(0.97)",
            transition: "opacity 0.95s ease, transform 0.95s ease",
            display: "block",
            whiteSpace: "nowrap",
          }}
        >
          Julia Sofía
        </h1>
      </div>

      <div style={{ width: "100%", maxWidth: 360, padding: "0 24px" }}>
        <div style={{
          position: "relative",
          border: "1px solid rgba(212,197,178,0.35)",
          borderRadius: 2,
          background: "rgba(28,64,44,0.40)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          padding: "26px 26px 24px",
          textAlign: "center",
        }}>
          <div style={{
            position: "absolute", inset: 5,
            border: "0.5px solid rgba(212,197,178,0.20)",
            borderRadius: 1,
            pointerEvents: "none",
          }} />

          <OrnamentBar />

          <div
            ref={xvRef}
            style={{
              opacity: 0,
              transform: "translateY(18px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
              marginTop: 16,
            }}
          >
            <div style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 700,
              fontSize: "clamp(64px, 18vw, 86px)",
              letterSpacing: 22,
              lineHeight: 1,
              textIndent: 22,
              color: "#D4C5B2",
              textShadow: "0 2px 12px rgba(212,197,178,0.20)",
            }}>
              XV
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, margin: "8px 0 10px" }}>
              <div style={{ width: 22, height: 0.5, background: "rgba(212,197,178,0.45)" }} />
              <svg width="5" height="5" viewBox="0 0 5 5">
                <rect width="5" height="5" fill="#D4C5B2" transform="rotate(45 2.5 2.5)" opacity="0.80" />
              </svg>
              <div style={{ width: 22, height: 0.5, background: "rgba(212,197,178,0.45)" }} />
            </div>

            <div style={{
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(20px, 5.5vw, 26px)",
              letterSpacing: 11,
              textTransform: "uppercase",
              color: "#D4C5B2",
              textIndent: 11,
            }}>
              Años
            </div>
          </div>

          <div style={{ margin: "18px 0 14px" }}>
            <OrnamentBar />
          </div>

          <div
            ref={dateRef}
            style={{
              opacity: 0,
              transform: "translateY(10px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            <span style={{
              display: "inline-block",
              padding: "5px 22px",
              border: "0.6px solid rgba(212,197,178,0.35)",
              borderRadius: 40,
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontSize: 15,
              letterSpacing: 4,
              color: "#D4C5B2",
              background: "rgba(28,64,44,0.30)",
            }}>
              27 · Junio · 2026
            </span>
          </div>
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: 22,
        left: "50%",
        transform: "translateX(-50%)",
        animation: "hintFloat 3s ease-in-out infinite",
      }}>
        <div style={{ width: 1, height: 28, background: "linear-gradient(to bottom, transparent, rgba(212,197,178,0.55))" }} />
      </div>
    </section>
  );
}
