"use client";

const GCAL_URL = (() => {
  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const title = encodeURIComponent("XV Años de Julia Sofía");
  const details = encodeURIComponent(
    "Celebración de XV Años de Julia Sofía Martínez Chávez · Morelia, Mich."
  );
  const location = encodeURIComponent("Morelia, Michoacán, México");
  // 2026-06-27 18:00 CST → UTC = 2026-06-28T00:00:00Z
  const dates = "20260628T000000Z/20260628T080000Z";
  return `${base}&text=${title}&dates=${dates}&details=${details}&location=${location}`;
})();

export default function CalendarioBtn() {
  return (
    <section style={{ padding: "40px 26px 64px", textAlign: "center" }}>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontSize: 14,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: "#1c402c",
        marginBottom: 8,
        opacity: 0.75,
        fontWeight: 600,
      }}>
        No lo olvides
      </p>
      <h2 style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 48,
        lineHeight: 1.25,
        marginBottom: 16,
        padding: "4px 20px 8px",
        color: "#1c402c",
        overflow: "visible",
        display: "inline-block",
      }}>
        Guárdalo
      </h2>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: 17,
        color: "#1a1a1a",
        opacity: 0.60,
        marginBottom: 20,
      }}>
        Agrega el evento a tu calendario
      </p>
      <a
        href={GCAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "14px 32px",
          background: "linear-gradient(135deg, #1c402c, #0f2618)",
          color: "#FFFFFF",
          borderRadius: 30,
          fontFamily: "var(--font-lato), sans-serif",
          fontSize: 14,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 3,
          textDecoration: "none",
          boxShadow: "0 4px 16px rgba(28,64,44,0.25)",
        }}
      >
        Añadir a Google Calendar
      </a>
    </section>
  );
}
