"use client";
import { PHOTOS } from "./photos";

/* Foto 2 — de frente, dentro de un marco de papel rasgado (deckle) */
export default function PhotoFrame() {
  const hasPhoto = !!PHOTOS.framed;

  return (
    <section style={{ padding: "56px 26px 40px", display: "flex", justifyContent: "center" }}>
      {/* Filtro SVG para el borde rasgado */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <filter id="torn-edge">
          <feTurbulence type="fractalNoise" baseFrequency="0.014" numOctaves="3" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="16" />
        </filter>
      </svg>

      <div style={{
        position: "relative",
        width: "min(300px, 80vw)",
        filter: "drop-shadow(0 16px 36px rgba(0,0,0,0.45))",
      }}>
        <div style={{
          filter: "url(#torn-edge)",
          background: "#f6f2ea",
          padding: 12,
        }}>
          <div style={{
            width: "100%",
            aspectRatio: "4 / 5",
            overflow: "hidden",
            background: hasPhoto
              ? "transparent"
              : "linear-gradient(160deg, #1c402c 0%, #2d5a3f 45%, #0f2618 100%)",
            backgroundImage: hasPhoto ? `url("${PHOTOS.framed}")` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {!hasPhoto && (
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="rgba(232,200,135,0.55)" strokeWidth="0.8" aria-hidden="true">
                <path d="M12 3 C12 8, 8 10, 6 12 C8 14, 12 16, 12 21 C12 16, 16 14, 18 12 C16 10, 12 8, 12 3 Z" />
                <circle cx="12" cy="12" r="1.6" fill="rgba(232,200,135,0.55)" stroke="none" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
