"use client";

const WA_NUMERO = "524434778671";
const MENSAJE = `¡Hola! Con mucho gusto confirmo mi asistencia a la celebración de Julia Sofía Martínez Chávez. 🎉
¡Nos vemos pronto! 💫`;

function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const t = {
    tl: { top: 0, left: 0, transform: "none" },
    tr: { top: 0, right: 0, transform: "scaleX(-1)" },
    bl: { bottom: 0, left: 0, transform: "scaleY(-1)" },
    br: { bottom: 0, right: 0, transform: "scale(-1,-1)" },
  }[pos] as React.CSSProperties;
  return (
    <svg viewBox="0 0 52 52" fill="none" aria-hidden="true"
      style={{ position: "absolute", width: 48, height: 48, pointerEvents: "none", ...t }}>
      <path d="M2 50 L2 2 L50 2" stroke="#C28F45" strokeWidth=".9" opacity=".7" />
      <circle cx="2" cy="2" r="2.5" fill="#C28F45" opacity=".6" />
    </svg>
  );
}

export default function RSVPSection() {
  const handleConfirm = () => {
    const url = `https://wa.me/${WA_NUMERO}?text=${encodeURIComponent(MENSAJE)}`;
    window.open(url, "_blank");
  };

  return (
    <section style={{ padding: "64px 24px" }}>
      <div style={{
        position: "relative",
        maxWidth: 520,
        margin: "0 auto",
        background: "rgba(246,242,234,0.96)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(194,143,69,0.45)",
        padding: "52px 28px 44px",
        boxShadow: "0 24px 64px rgba(0,0,0,0.28)",
      }}>
        <div style={{ position: "absolute", inset: 10, border: "1px solid rgba(194,143,69,0.22)", pointerEvents: "none" }} />
        <Corner pos="tl" /><Corner pos="tr" /><Corner pos="bl" /><Corner pos="br" />

        <div style={{ textAlign: "center", position: "relative" }}>
          {/* Ornamento superior */}
          <svg viewBox="0 0 320 56" fill="none" aria-hidden="true" style={{ display: "block", margin: "0 auto 22px", width: "min(260px,70vw)", height: "auto" }}>
            <g stroke="#C28F45" strokeWidth=".9" opacity=".85" fill="none">
              <path d="M18 28 Q50 10 82 28 Q106 42 130 28" />
              <path d="M190 28 Q214 42 238 28 Q270 10 302 28" />
              <circle cx="160" cy="28" r="5.5" />
              <circle cx="160" cy="28" r="2" fill="#C28F45" stroke="none" />
              <path d="M154 20 Q160 13 166 20" opacity=".55" />
              <path d="M154 36 Q160 43 166 36" opacity=".55" />
            </g>
          </svg>

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#7d5720",
            marginBottom: 6,
          }}>
            Confirmación de Asistencia
          </p>

          <h2 style={{
            fontFamily: "var(--font-great-vibes), cursive",
            fontSize: "clamp(40px, 11vw, 56px)",
            lineHeight: 1.1,
            color: "#1c402c",
            marginBottom: 18,
          }}>
            Tu presencia <span style={{ color: "#C28F45" }}>lo es</span> todo
          </h2>

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 600,
            fontSize: 18,
            color: "#3a3a3a",
            lineHeight: 1.8,
            maxWidth: 380,
            margin: "0 auto 28px",
          }}>
            Por favor confirma tu asistencia antes del <strong style={{ color: "#1c402c" }}>8 de junio de 2026</strong>. Me encantará saber que estarás conmigo en esta noche tan especial.
          </p>

          {/* Divisor con corazón */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, maxWidth: 300, margin: "0 auto 30px" }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(to right,transparent,rgba(194,143,69,0.5),transparent)" }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#C28F45" style={{ flexShrink: 0, opacity: 0.85 }}>
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
            </svg>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(to right,transparent,rgba(194,143,69,0.5),transparent)" }} />
          </div>

          <button
            onClick={handleConfirm}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 48px",
              minHeight: 54,
              background: "linear-gradient(135deg, #1c402c, #0f2618)",
              color: "#f3efe6",
              borderRadius: 50,
              border: "1px solid rgba(194,143,69,0.45)",
              cursor: "pointer",
              fontFamily: "var(--font-lato), sans-serif",
              fontSize: 15,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 3,
              boxShadow: "0 8px 26px rgba(28,64,44,0.30)",
            }}
          >
            Confirmar
          </button>

          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            marginTop: 26,
            fontFamily: "var(--font-lato), sans-serif",
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#7d5720",
            fontWeight: 600,
            width: "100%",
            justifyContent: "center",
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
            </svg>
            Fecha límite · 8 de junio 2026
          </div>
        </div>
      </div>
    </section>
  );
}
