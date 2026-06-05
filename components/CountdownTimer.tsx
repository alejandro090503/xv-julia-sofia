"use client";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-27T18:00:00-06:00");

function getRemainingTime() {
  const now = new Date();
  const diff = TARGET.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    total: diff,
  };
}

const TOTAL_DAYS = Math.ceil(
  (TARGET.getTime() - new Date("2026-01-01").getTime()) / (1000 * 60 * 60 * 24)
);

interface RingProps { value: number; label: string; max: number; }

function Ring({ value, label, max }: RingProps) {
  const r = 50;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  const offset = circ * (1 - pct);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "relative", width: 78, height: 78 }}>
        <svg viewBox="0 0 120 120" style={{ width: "100%", height: "100%", overflow: "visible" }}>
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(232,200,135,0.14)" strokeWidth="3" />
          <circle cx="60" cy="60" r={r} fill="none" stroke="#C28F45" strokeWidth="9" strokeLinecap="round"
            strokeDasharray={circ} strokeDashoffset={offset} transform="rotate(-90 60 60)"
            style={{ filter: "blur(7px)", opacity: 0.25 }} />
          <circle cx="60" cy="60" r={r} fill="none" stroke="#E8C887" strokeWidth="3.4" strokeLinecap="round"
            strokeDasharray={circ} strokeDashoffset={offset} transform="rotate(-90 60 60)"
            style={{ transition: "stroke-dashoffset 0.5s ease" }} />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <span style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 26, fontWeight: 700, color: "var(--text)",
            lineHeight: 1, fontVariantNumeric: "tabular-nums", letterSpacing: 0.6,
          }}>
            {String(value).padStart(2, "0")}
          </span>
          <span style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic", fontSize: 9, letterSpacing: "1.6px",
            textTransform: "uppercase", color: "#E8C887", marginTop: 2, opacity: 0.85,
          }}>
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getRemainingTime());

  useEffect(() => {
    const id = setInterval(() => setTime(getRemainingTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ padding: "64px 26px" }}>
      <h2 style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 50, textAlign: "center", lineHeight: 1.1, marginBottom: 30,
        background: "linear-gradient(135deg,#C28F45 0%,#E8C887 50%,#C28F45 100%)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
      }}>
        Faltan
      </h2>

      <div style={{
        background: "rgba(15,38,24,0.45)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(232,200,135,0.22)",
        borderRadius: 28, padding: "40px 20px 36px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -1, left: "15%", right: "15%", height: 1.5,
          background: "linear-gradient(90deg,transparent,#C28F45 30%,#E8C887 50%,#C28F45 70%,transparent)" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px", maxWidth: 380, margin: "0 auto", justifyItems: "center" }}>
          <Ring value={time.days} label="Días" max={TOTAL_DAYS} />
          <Ring value={time.hours} label="Horas" max={24} />
          <Ring value={time.minutes} label="Minutos" max={60} />
          <Ring value={time.seconds} label="Segundos" max={60} />
        </div>

        <div style={{ textAlign: "center", marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(232,200,135,0.14)" }}>
          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic", fontSize: 17, color: "var(--text-soft)",
            letterSpacing: 1, lineHeight: 1.6, fontWeight: 600,
          }}>
            Cada segundo más cerca de este día especial
          </p>
        </div>
      </div>
    </section>
  );
}
