"use client";

/* Silueta elegante de pareja en atuendo formal (oro/oscuro sobre verde) */
function CoupleSilhouette() {
  return (
    <svg viewBox="0 0 220 280" width="200" height="255" fill="none" aria-hidden="true"
      style={{ filter: "drop-shadow(0 8px 22px rgba(0,0,0,0.4))" }}>
      <defs>
        <linearGradient id="dc-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#15301f" />
          <stop offset="100%" stopColor="#091a10" />
        </linearGradient>
        <linearGradient id="dc-gown" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16321f" />
          <stop offset="100%" stopColor="#0a1d11" />
        </linearGradient>
      </defs>

      {/* ── MUJER (vestido largo) ── */}
      <g stroke="#C28F45" strokeWidth="1" strokeLinejoin="round">
        {/* cabello */}
        <path d="M78 30 q-13 4 -13 22 q0 14 5 22 l4 -2 q-4 -10 -3 -22 q1 -10 7 -16 q6 -6 18 -5 q-7 -5 -18 1 Z" fill="url(#dc-dark)" />
        {/* cabeza */}
        <ellipse cx="86" cy="32" rx="11" ry="13" fill="#1d3a27" />
        {/* hombros desnudos + busto */}
        <path d="M74 60 q12 -8 24 0 l-3 14 q-9 -5 -18 0 Z" fill="url(#dc-gown)" />
        {/* vestido A-line hasta el piso */}
        <path d="M77 72 q9 -5 18 0 q3 30 7 60 q6 50 14 122 l-60 0 q8 -72 14 -122 q4 -30 7 -60 Z" fill="url(#dc-gown)" />
        {/* brillos del vestido */}
        <path d="M84 120 q2 60 -6 132" stroke="#C28F45" strokeWidth="0.5" opacity="0.4" fill="none" />
        <path d="M92 120 q1 60 4 132" stroke="#C28F45" strokeWidth="0.5" opacity="0.4" fill="none" />
        {/* cabello largo lado derecho */}
        <path d="M94 30 q12 6 11 24 q-1 14 -6 22 l-4 -3 q4 -9 4 -20 q0 -12 -8 -18 Z" fill="url(#dc-dark)" />
      </g>

      {/* ── HOMBRE (esmoquin) ── */}
      <g stroke="#C28F45" strokeWidth="1" strokeLinejoin="round">
        {/* cabello */}
        <path d="M126 26 q-11 0 -13 12 q11 -6 26 0 q-2 -12 -13 -12 Z" fill="url(#dc-dark)" />
        {/* cabeza */}
        <ellipse cx="139" cy="38" rx="10" ry="12" fill="#1d3a27" />
        {/* saco / torso */}
        <path d="M124 62 q15 -9 30 0 l3 100 q-8 4 -16 4 q-2 -60 -2 -60 q0 0 -2 60 q-8 0 -16 -4 Z" fill="url(#dc-dark)" />
        {/* camisa + solapas V */}
        <path d="M132 62 l7 16 l7 -16 l-3 -2 q-4 3 -8 0 Z" fill="#1f3c28" />
        {/* moño */}
        <path d="M135 66 l4 3 l4 -3 l0 5 l-4 -3 l-4 3 Z" fill="#C28F45" opacity="0.9" />
        {/* piernas / pantalón */}
        <path d="M126 164 q6 3 12 3 l-1 88 l-9 0 Z" fill="url(#dc-dark)" />
        <path d="M152 164 q-6 3 -12 3 l1 88 l9 0 Z" fill="url(#dc-dark)" />
      </g>
    </svg>
  );
}

export default function DressCode() {
  return (
    <section style={{ padding: "64px 26px", textAlign: "center" }}>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: 6,
        textTransform: "uppercase",
        color: "#E8C887",
        marginBottom: 4,
        opacity: 0.9,
      }}>
        Código de Vestimenta
      </p>
      <h2 style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 52,
        lineHeight: 1.1,
        marginBottom: 18,
        background: "linear-gradient(135deg,#C28F45 0%,#E8C887 50%,#C28F45 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}>
        Dress Code
      </h2>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
        <CoupleSilhouette />
      </div>

      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 700,
        fontSize: 22,
        letterSpacing: 8,
        textTransform: "uppercase",
        color: "#E8C887",
        marginBottom: 36,
      }}>
        Etiqueta
      </p>

      {/* Colores sugeridos — esfera única */}
      <div style={{
        maxWidth: 360,
        margin: "0 auto",
        padding: "30px 24px",
        background: "rgba(15,38,24,0.45)",
        border: "1px solid rgba(232,200,135,0.30)",
        borderRadius: 22,
      }}>
        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: 17,
          color: "var(--text)",
          letterSpacing: 1,
          marginBottom: 20,
        }}>
          Color sugerido
        </p>

        {/* Esfera #D4C5B2 con brillo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
          <div style={{
            width: 76, height: 76, borderRadius: "50%",
            background: "radial-gradient(circle at 32% 28%, #efe6da 0%, #D4C5B2 42%, #b6a690 100%)",
            boxShadow: "0 10px 26px rgba(0,0,0,0.4), inset 0 -6px 14px rgba(120,105,80,0.4), inset 0 4px 10px rgba(255,255,255,0.6)",
            border: "1px solid rgba(232,200,135,0.4)",
          }} />
        </div>
        <p style={{
          fontFamily: "var(--font-lato), sans-serif",
          fontSize: 13,
          letterSpacing: 2,
          color: "var(--text-soft)",
          marginBottom: 24,
        }}>
          Tonos arena / champagne
        </p>

        {/* Evitar blanco */}
        <div style={{
          position: "relative",
          padding: "16px 18px",
          border: "1px solid rgba(232,200,135,0.25)",
          borderRadius: 14,
          background: "rgba(15,38,24,0.4)",
        }}>
          <div style={{
            position: "absolute", top: -11, left: "50%",
            transform: "translateX(-50%)",
            width: 22, height: 22, borderRadius: "50%",
            background: "#143524",
            border: "1.5px solid rgba(232,200,135,0.5)",
            fontSize: 11, lineHeight: "20px", textAlign: "center",
            color: "#E8C887", fontWeight: 700,
          }}>
            ✕
          </div>
          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 16, fontStyle: "italic", fontWeight: 600,
            color: "var(--text)", letterSpacing: 0.5, lineHeight: 1.55,
            marginBottom: 10,
          }}>
            Se reserva el color blanco para la quinceañera
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%",
              background: "radial-gradient(circle at 32% 28%, #ffffff 0%, #f3f1ec 60%, #ddd9d0 100%)",
              border: "1px solid rgba(232,200,135,0.4)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
