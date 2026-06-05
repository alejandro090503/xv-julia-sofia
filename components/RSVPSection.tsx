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
            color: "#9c6f2e",
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
              gap: 10,
              padding: "16px 36px",
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
              letterSpacing: 2.5,
              boxShadow: "0 8px 26px rgba(28,64,44,0.30)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#E8C887">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Confirmar por WhatsApp
          </button>

          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            marginTop: 26,
            fontFamily: "var(--font-lato), sans-serif",
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#9c6f2e",
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
