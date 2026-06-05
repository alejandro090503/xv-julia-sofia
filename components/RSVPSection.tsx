"use client";

const WA_NUMERO = "524434778671";
const MENSAJE = `¡Hola! Con mucho gusto confirmo mi asistencia a la celebración de Julia Sofía Martínez Chávez. 🎉
¡Nos vemos pronto! 💫`;

export default function RSVPSection() {
  const handleConfirm = () => {
    const url = `https://wa.me/${WA_NUMERO}?text=${encodeURIComponent(MENSAJE)}`;
    window.open(url, "_blank");
  };

  return (
    <section style={{ padding: "64px 26px" }}>
      <h2 style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 50,
        textAlign: "center",
        lineHeight: 1.1,
        marginBottom: 12,
        color: "#1c402c",
      }}>
        Confirmación
      </h2>

      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: 16,
        color: "#1c402c",
        textAlign: "center",
        letterSpacing: 2,
        marginBottom: 24,
        opacity: 0.75,
      }}>
        Confirma antes del 8 de junio de 2026
      </p>

      <div style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.88), rgba(247,244,239,0.97))",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(28,64,44,0.12)",
        borderRadius: 24,
        padding: "32px 22px",
        boxShadow: "0 4px 20px rgba(28,64,44,0.06)",
        overflow: "hidden",
        position: "relative",
        textAlign: "center",
      }}>
        <div style={{
          position: "absolute", top: 0, left: "15%", right: "15%",
          height: 1.5,
          background: "linear-gradient(90deg,transparent,#1c402c 25%,#D4C5B2 50%,#1c402c 75%,transparent)",
        }} />

        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: 19,
          color: "#1c402c",
          lineHeight: 1.65,
          letterSpacing: 0.4,
          maxWidth: 340,
          margin: "0 auto 28px",
        }}>
          Tu presencia es muy importante para mí. Por favor confirma tu asistencia por WhatsApp.
        </p>

        <button
          onClick={handleConfirm}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: "16px 36px",
            minHeight: 52,
            background: "linear-gradient(135deg, #1c402c, #0f2618)",
            color: "#FFFFFF",
            borderRadius: 30,
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-lato), sans-serif",
            fontSize: 15,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 3,
            boxShadow: "0 4px 22px rgba(28,64,44,0.25)",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Confirmar Asistencia
        </button>
      </div>
    </section>
  );
}
