"use client";

export default function Footer() {
  return (
    <footer style={{ padding: "50px 20px", textAlign: "center" }}>
      <div style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: "clamp(120px, 35vw, 180px)",
        lineHeight: 1.4,
        color: "#1c402c",
        padding: "28px 60px 28px 48px",
        filter: "drop-shadow(0 4px 22px rgba(28,64,44,0.15))",
        overflow: "visible",
        display: "inline-block",
      }}>
        JS
      </div>
      <div style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: 15,
        letterSpacing: 4,
        textTransform: "uppercase",
        color: "#1c402c",
        marginTop: 6,
        opacity: 0.65,
      }}>
        XXVII · Junio · MMXXVI
      </div>
      <div style={{
        width: 48, height: 1,
        margin: "18px auto 14px",
        background: "linear-gradient(90deg,transparent,#1c402c,transparent)",
        opacity: 0.25,
      }} />
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontSize: 14,
        color: "rgba(26,26,26,0.35)",
        letterSpacing: 1,
      }}>
        Con mucho cariño por{" "}
        <a
          href="https://www.instagram.com/elysium.invitaciones"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1c402c", textDecoration: "none" }}
        >
          @elysium.invitaciones
        </a>
      </p>
    </footer>
  );
}
