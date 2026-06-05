"use client";

interface VenueProps {
  type: string;
  name: string;
  address: string;
  time: string;
  mapsUrl: string;
  lat: number;
  lng: number;
}

function VenueCard({ type, name, address, time, mapsUrl, lat, lng }: VenueProps) {
  return (
    <div style={{
      position: "relative",
      overflow: "hidden",
      background: "rgba(15,38,24,0.5)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderRadius: 28,
      border: "1px solid rgba(232,200,135,0.25)",
      boxShadow: "0 14px 40px rgba(0,0,0,0.28)",
    }}>
      {/* Haz dorado animado que recorre el borde */}
      <div className="venue-beam" aria-hidden="true" />

      <div style={{ padding: "34px 28px 0", textAlign: "center" }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          margin: "0 auto 16px",
          background: "rgba(232,200,135,0.12)",
          border: "1.5px solid rgba(232,200,135,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#E8C887">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>

        <div style={{
          fontFamily: "var(--font-great-vibes), cursive",
          fontSize: 42, color: "#E8C887", lineHeight: 1.15, marginBottom: 10,
        }}>
          {type}
        </div>

        <div style={{
          fontFamily: "var(--font-cormorant), serif",
          fontWeight: 700, fontSize: 22, color: "var(--text)",
          letterSpacing: 0.5, lineHeight: 1.3, marginBottom: 8,
        }}>
          {name}
        </div>

        <div style={{
          fontFamily: "var(--font-lato), sans-serif",
          fontWeight: 500, fontSize: 16, color: "var(--text-soft)",
          letterSpacing: 0.3, lineHeight: 1.55, marginBottom: 8,
        }}>
          {address}
        </div>

        <div style={{
          fontFamily: "var(--font-lato), sans-serif",
          fontWeight: 700, fontSize: 20, color: "#E8C887",
          letterSpacing: 3, marginBottom: 4,
        }}>
          {time}
        </div>

        <div style={{ width: 48, height: 1, margin: "18px auto 22px",
          background: "linear-gradient(90deg,transparent,#C28F45,transparent)", opacity: 0.4 }} />
      </div>

      <div style={{ textAlign: "center", padding: "0 22px 26px" }}>
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
          style={{
            display: "inline-block", marginTop: 8, padding: "14px 32px",
            background: "linear-gradient(135deg,#C28F45,#9c6f2e)",
            color: "#0f2618", borderRadius: 30,
            fontFamily: "var(--font-lato), sans-serif",
            fontSize: 14, fontWeight: 800, textTransform: "uppercase",
            letterSpacing: 3, textDecoration: "none",
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          }}>
          Cómo Llegar
        </a>
      </div>

      <iframe
        style={{ width: "100%", height: 215, border: 0, display: "block",
          borderRadius: "0 0 28px 28px", opacity: 0.92 }}
        src={`https://maps.google.com/maps?q=${lat},${lng}&output=embed&hl=es&z=16`}
        allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        title={`Ubicación — ${type}`}
      />
    </div>
  );
}

export default function Ubicacion() {
  return (
    <section style={{ padding: "64px 26px" }}>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic", fontSize: 14, letterSpacing: 5,
        textTransform: "uppercase", color: "#E8C887",
        textAlign: "center", marginBottom: 8, opacity: 0.9, fontWeight: 600,
      }}>
        Te esperamos en
      </p>
      <h2 style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 50, textAlign: "center", lineHeight: 1.1, marginBottom: 30,
        background: "linear-gradient(135deg,#C28F45 0%,#E8C887 50%,#C28F45 100%)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
      }}>
        Lugares
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <VenueCard
          type="Misa de Acción de Gracias"
          name="Rectoría de Nuestra Señora de los Urdiales"
          address="Jesús Solórzano Dávalos 69, Nueva Valladolid, 58190 Morelia, Mich."
          time="6:00 PM"
          mapsUrl="https://maps.app.goo.gl/wTB4MFFk8QEpfW4s6"
          lat={19.7011781}
          lng={-101.2104329}
        />
        <VenueCard
          type="Recepción"
          name="Salón Real Exclusividad"
          address="Puerto Angel 165, Tiníjaro, 58337 Morelia, Mich."
          time="8:00 PM"
          mapsUrl="https://maps.app.goo.gl/VJUVpex34MLVHHMDA"
          lat={19.6973555}
          lng={-101.2631736}
        />
      </div>
    </section>
  );
}
