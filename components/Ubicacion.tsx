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
      background: "linear-gradient(158deg, rgba(255,255,255,0.92), rgba(247,244,239,0.97))",
      backdropFilter: "blur(22px)",
      WebkitBackdropFilter: "blur(22px)",
      borderRadius: 28,
      border: "1px solid rgba(28,64,44,0.12)",
      boxShadow: "0 14px 56px rgba(28,64,44,0.07)",
    }}>
      <div style={{
        position: "absolute", left: 0, top: "12%", bottom: "12%", width: 2.5,
        background: "linear-gradient(to bottom, transparent, #1c402c 30%, #D4C5B2 60%, #1c402c 85%, transparent)",
        opacity: 0.40,
      }} />

      <div style={{ padding: "34px 28px 0", textAlign: "center" }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          margin: "0 auto 16px",
          background: "linear-gradient(135deg, rgba(28,64,44,0.10), rgba(28,64,44,0.22))",
          border: "1.5px solid rgba(28,64,44,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(28,64,44,0.10)",
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#1c402c">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>

        <div style={{
          fontFamily: "var(--font-great-vibes), cursive",
          fontSize: 42,
          color: "#1c402c",
          lineHeight: 1.15,
          marginBottom: 10,
        }}>
          {type}
        </div>

        <div style={{
          fontFamily: "var(--font-cormorant), serif",
          fontWeight: 700,
          fontSize: 22,
          color: "#1a1a1a",
          letterSpacing: 0.5,
          lineHeight: 1.3,
          marginBottom: 8,
        }}>
          {name}
        </div>

        <div style={{
          fontFamily: "var(--font-lato), sans-serif",
          fontWeight: 500,
          fontSize: 16,
          color: "rgba(26,26,26,0.60)",
          letterSpacing: 0.3,
          lineHeight: 1.55,
          marginBottom: 8,
        }}>
          {address}
        </div>

        <div style={{
          fontFamily: "var(--font-lato), sans-serif",
          fontWeight: 700,
          fontSize: 20,
          color: "#1c402c",
          letterSpacing: 3,
          marginBottom: 4,
        }}>
          {time}
        </div>

        <div style={{
          width: 48, height: 1,
          margin: "18px auto 22px",
          background: "linear-gradient(90deg,transparent,#1c402c,transparent)",
          opacity: 0.25,
        }} />
      </div>

      <div style={{ textAlign: "center", padding: "0 22px 26px" }}>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: 8,
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
          Cómo Llegar
        </a>
      </div>

      <iframe
        style={{
          width: "100%", height: 215, border: 0,
          display: "block", borderRadius: "0 0 28px 28px",
          opacity: 0.88, filter: "saturate(0.85)",
        }}
        src={`https://maps.google.com/maps?q=${lat},${lng}&output=embed&hl=es&z=16`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
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
        fontStyle: "italic",
        fontSize: 14,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: "#1c402c",
        textAlign: "center",
        marginBottom: 8,
        opacity: 0.80,
        fontWeight: 600,
      }}>
        Te esperamos en
      </p>
      <h2 style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 50,
        textAlign: "center",
        lineHeight: 1.1,
        marginBottom: 30,
        color: "#1c402c",
      }}>
        Ubicación
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <VenueCard
          type="Misa de Acción de Gracias"
          name="Clz. Fray Antonio de San Miguel 240"
          address="Centro histórico de Morelia, 58000 Morelia, Mich."
          time="6:00 PM"
          mapsUrl="https://www.google.com/maps/place/Clz.+Fray+Antonio+de+San+Miguel+240,+Centro+hist%C3%B3rico+de+Morelia,+58000+Morelia,+Mich./@19.7017179,-101.1800216,17z"
          lat={19.7017179}
          lng={-101.1800216}
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
