"use client";

export default function Familia() {
  return (
    <section style={{ padding: "64px 26px" }}>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: "#1c402c",
        textAlign: "center",
        marginBottom: 8,
        opacity: 0.85,
      }}>
        Con la bendición de
      </p>
      <h2 style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 50,
        textAlign: "center",
        lineHeight: 1.25,
        marginBottom: 30,
        padding: "6px 24px 10px",
        color: "#1c402c",
        overflow: "visible",
        display: "block",
      }}>
        Mi Familia
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 0, alignItems: "stretch" }}>
        {/* Padres */}
        <div style={{
          width: "100%",
          textAlign: "center",
          padding: "30px 26px",
          background: "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(247,244,239,0.95))",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(28,64,44,0.12)",
          boxShadow: "0 6px 30px rgba(28,64,44,0.06)",
          borderRadius: "24px 24px 0 0",
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            margin: "0 auto 14px",
            background: "linear-gradient(135deg, rgba(28,64,44,0.10), rgba(28,64,44,0.20))",
            border: "1.5px solid rgba(28,64,44,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 16px rgba(28,64,44,0.08)",
          }}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1c402c" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#1c402c",
            marginBottom: 14,
          }}>
            Mis Padres
          </p>
          <div style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 500,
            fontSize: 21,
            color: "#1a1a1a",
            lineHeight: 1.85,
          }}>
            Edgar Omar Martínez Bill Ocaña
            <span style={{
              display: "block",
              fontStyle: "italic",
              fontSize: 30,
              color: "#D4C5B2",
              lineHeight: 1.1,
              margin: "4px 0",
            }}>&amp;</span>
            Sharazam Lizette Chávez Ceballos
          </div>
        </div>

        {/* Divisor */}
        <div style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 46,
          position: "relative",
          background: "rgba(255,255,255,0.55)",
          borderLeft: "1px solid rgba(28,64,44,0.12)",
          borderRight: "1px solid rgba(28,64,44,0.12)",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(28,64,44,0.12),transparent)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(28,64,44,0.12),transparent)" }} />
          <svg viewBox="0 0 100 26" fill="none" style={{ width: 100, height: 26 }}>
            <line x1="0" y1="13" x2="32" y2="13" stroke="#D4C5B2" strokeWidth="0.7" opacity="0.50"/>
            <path d="M50 4 L57 13 L50 22 L43 13 Z" fill="rgba(28,64,44,0.08)" stroke="#D4C5B2" strokeWidth="0.9" opacity="0.55"/>
            <circle cx="50" cy="13" r="3" fill="rgba(212,197,178,0.35)" stroke="#D4C5B2" strokeWidth="0.6" opacity="0.70"/>
            <line x1="68" y1="13" x2="100" y2="13" stroke="#D4C5B2" strokeWidth="0.7" opacity="0.50"/>
          </svg>
        </div>

        {/* Padrinos */}
        <div style={{
          width: "100%",
          textAlign: "center",
          padding: "30px 26px",
          background: "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(247,244,239,0.95))",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(28,64,44,0.12)",
          borderTop: "none",
          boxShadow: "0 6px 30px rgba(28,64,44,0.06)",
          borderRadius: "0 0 24px 24px",
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            margin: "0 auto 14px",
            background: "linear-gradient(135deg, rgba(212,197,178,0.20), rgba(28,64,44,0.12))",
            border: "1.5px solid rgba(212,197,178,0.40)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 16px rgba(212,197,178,0.15)",
          }}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1c402c" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 L13.7 8.4 L20 9 L15 13.5 L16.5 20 L12 16.5 L7.5 20 L9 13.5 L4 9 L10.3 8.4 Z"/>
            </svg>
          </div>
          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#1c402c",
            marginBottom: 14,
          }}>
            Mis Padrinos
          </p>
          <div style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 500,
            fontSize: 21,
            color: "#1a1a1a",
            lineHeight: 1.85,
          }}>
            Abril Guevara Chávez
            <span style={{
              display: "block",
              fontStyle: "italic",
              fontSize: 30,
              color: "#D4C5B2",
              lineHeight: 1.1,
              margin: "4px 0",
            }}>&amp;</span>
            Erick Eugenio Sánchez Larios
          </div>
        </div>
      </div>
    </section>
  );
}
