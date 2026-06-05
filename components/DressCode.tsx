"use client";

export default function DressCode() {
  return (
    <section style={{ padding: "64px 26px" }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(155deg, #f7f4ef 0%, #eee9e0 55%, #f7f4ef 100%)",
        borderRadius: 28,
        padding: "36px 24px 32px",
        border: "1px solid rgba(28,64,44,0.18)",
        boxShadow: "0 18px 60px rgba(28,64,44,0.10)",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 18% 18%, rgba(28,64,44,0.06) 0%, transparent 60%), radial-gradient(ellipse at 82% 82%, rgba(212,197,178,0.14) 0%, transparent 60%)",
        }} />
        <div style={{
          position: "absolute", top: -1, left: "18%", right: "18%", height: 2,
          background: "linear-gradient(90deg,transparent,#1c402c 30%,#D4C5B2 70%,transparent)",
          opacity: 0.55,
        }} />

        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: 14,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#1c402c",
          textAlign: "center",
          marginBottom: 4,
          position: "relative",
          opacity: 0.80,
        }}>
          Código de Vestimenta
        </p>
        <h2 style={{
          fontFamily: "var(--font-great-vibes), cursive",
          fontSize: 50,
          textAlign: "center",
          lineHeight: 1.1,
          marginBottom: 6,
          position: "relative",
          color: "#1c402c",
        }}>
          Dress Code
        </h2>
        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: 18,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#1c402c",
          textAlign: "center",
          marginBottom: 22,
          position: "relative",
        }}>
          Etiqueta
        </p>

        {/* Colores sugeridos */}
        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: 16,
          color: "#1c402c",
          textAlign: "center",
          marginBottom: 12,
          letterSpacing: 1,
          position: "relative",
        }}>
          Colores sugeridos
        </p>
        <div style={{
          display: "flex",
          height: 6,
          borderRadius: 3,
          overflow: "hidden",
          marginBottom: 26,
          boxShadow: "0 2px 10px rgba(28,64,44,0.12)",
          position: "relative",
        }}>
          {["#D4C5B2", "#b8a48e", "#c4bcb4", "#8e7f70"].map((c, i) => (
            <div key={i} style={{ flex: 1, background: c }} />
          ))}
        </div>

        {/* Color a evitar */}
        <div style={{
          position: "relative",
          textAlign: "center",
          padding: "16px 18px",
          border: "1px solid rgba(28,64,44,0.20)",
          borderRadius: 14,
          background: "rgba(255,255,255,0.55)",
          marginTop: 8,
        }}>
          <div style={{
            position: "absolute",
            top: -11, left: "50%",
            transform: "translateX(-50%)",
            width: 22, height: 22, borderRadius: "50%",
            background: "#f7f4ef",
            border: "1.5px solid rgba(28,64,44,0.30)",
            fontSize: 11, lineHeight: "20px",
            textAlign: "center", color: "#1c402c", fontWeight: 700,
          }}>
            ✕
          </div>
          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 17, fontStyle: "italic", fontWeight: 600,
            color: "#1c402c", letterSpacing: 0.5, lineHeight: 1.55,
          }}>
            Por favor evitar el color blanco
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
            <div style={{
              width: 30, height: 30, borderRadius: "50%",
              background: "#FFFFFF",
              border: "2px solid rgba(28,64,44,0.15)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
