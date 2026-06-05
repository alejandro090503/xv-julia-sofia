"use client";

export default function Footer() {
  return (
    <footer style={{ padding: "40px 20px 50px", textAlign: "center" }}>
      <div style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic", fontWeight: 500, fontSize: 15,
        letterSpacing: 4, textTransform: "uppercase",
        color: "#E8C887", marginBottom: 14, opacity: 0.85,
      }}>
        XXVII · Junio · MMXXVI
      </div>
      <div style={{ width: 48, height: 1, margin: "0 auto 16px",
        background: "linear-gradient(90deg,transparent,#C28F45,transparent)", opacity: 0.4 }} />
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic", fontSize: 14, color: "var(--text-soft)", letterSpacing: 1,
      }}>
        Con mucho cariño por{" "}
        <a href="https://www.instagram.com/elysium.invitaciones" target="_blank" rel="noopener noreferrer"
          style={{ color: "#E8C887", textDecoration: "none" }}>
          @elysium.invitaciones
        </a>
      </p>
    </footer>
  );
}
