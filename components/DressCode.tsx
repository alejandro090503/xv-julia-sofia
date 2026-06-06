"use client";

const COUPLE_IMG = "https://bsjoelxktbvlavfoozhk.supabase.co/storage/v1/object/public/fotos-clientes/img/xv-julia-sofia/dresscode-pareja.png";

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
        <img
          src={COUPLE_IMG}
          alt="Pareja en código de vestimenta etiqueta — esmoquin y vestido largo"
          loading="lazy"
          style={{
            width: 210,
            height: "auto",
            filter: "drop-shadow(0 12px 26px rgba(0,0,0,0.45))",
          }}
        />
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

        {/* Esfera multicolor — el que deseen */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
          <div style={{
            position: "relative",
            width: 76, height: 76, borderRadius: "50%",
            background: "conic-gradient(from 210deg, #d8a8b5, #c9a674, #b8a48e, #8aa593, #6f8db5, #a89bbf, #c592a8, #d8a8b5)",
            boxShadow: "0 10px 26px rgba(0,0,0,0.4), inset 0 -6px 14px rgba(0,0,0,0.3), inset 0 4px 10px rgba(255,255,255,0.55)",
            border: "1px solid rgba(232,200,135,0.45)",
            overflow: "hidden",
          }}>
            {/* highlight para efecto esfera 3D */}
            <div style={{
              position: "absolute",
              top: "8%", left: "18%",
              width: "38%", height: "32%",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.55) 0%, transparent 70%)",
              filter: "blur(2px)",
            }} />
          </div>
        </div>
        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: 15,
          letterSpacing: 2,
          color: "var(--text-soft)",
          marginBottom: 24,
        }}>
          El color que tú prefieras
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
            Se reserva el color verde esmeralda para la quinceañera
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%",
              background: "radial-gradient(circle at 32% 28%, #2eb872 0%, #157347 55%, #0a3d24 100%)",
              border: "1px solid rgba(232,200,135,0.4)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.45), inset 0 -2px 4px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.3)",
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
