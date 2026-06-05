"use client";
import { PHOTOS } from "./photos";

/* Foto 3 — cierre, bosque encantado, con frase y monograma */
export default function ClosingPhoto() {
  const hasPhoto = !!PHOTOS.closing;

  return (
    <section style={{
      position: "relative",
      width: "100%",
      minHeight: "78vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
      overflow: "hidden",
      background: hasPhoto ? "#0f2618" : "linear-gradient(180deg, #1c402c 0%, #0f2618 100%)",
      padding: "80px 28px 64px",
    }}>
      {hasPhoto && (
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url("${PHOTOS.closing}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: "none",
        }} />
      )}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(15,38,24,0.45) 0%, rgba(15,38,24,0.25) 40%, rgba(15,38,24,0.85) 100%)",
        pointerEvents: "none",
      }} />

      <p style={{
        position: "relative",
        maxWidth: 360,
        textAlign: "center",
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: "clamp(26px, 8vw, 36px)",
        lineHeight: 1.5,
        color: "#f3efe6",
        textShadow: "0 2px 12px rgba(0,0,0,0.6)",
        marginBottom: 30,
      }}>
        Este día ha vivido en mis sueños, y su verdadera magia será estar rodeada de quienes han caminado conmigo.
      </p>

      <div style={{
        position: "relative",
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 72,
        lineHeight: 1.25,
        padding: "0 30px",
        overflow: "visible",
        background: "linear-gradient(135deg,#C28F45 0%,#E8C887 50%,#C28F45 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        filter: "drop-shadow(0 3px 14px rgba(0,0,0,0.5))",
      }}>
        JS
      </div>
      <div style={{
        position: "relative",
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: 6,
        textTransform: "uppercase",
        color: "#E8C887",
        marginTop: 6,
        textShadow: "0 1px 8px rgba(0,0,0,0.5)",
      }}>
        Julia Sofía
      </div>
    </section>
  );
}
