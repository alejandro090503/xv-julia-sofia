"use client";

export default function MesaRegalos() {
  return (
    <section style={{ padding: "64px 26px" }}>
      <h2 style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 50,
        textAlign: "center",
        lineHeight: 1.25,
        marginBottom: 16,
        padding: "6px 24px 10px",
        color: "#1c402c",
        overflow: "visible",
        display: "block",
      }}>
        Mesa de Regalos
      </h2>

      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 600,
        fontSize: 19,
        color: "#1c402c",
        lineHeight: 1.65,
        letterSpacing: 0.4,
        textAlign: "center",
        maxWidth: 360,
        margin: "0 auto 30px",
      }}>
        Tu cariño y presencia son el mejor regalo que puedo recibir. Si deseas obsequiarme algo, aquí te dejo una sugerencia.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "center" }}>
        {/* Lluvia de sobres */}
        <div style={{
          width: "100%",
          textAlign: "center",
          padding: "28px 24px",
          background: "linear-gradient(145deg, rgba(28,64,44,0.04), rgba(212,197,178,0.12))",
          borderRadius: 26,
          border: "1px solid rgba(28,64,44,0.14)",
          boxShadow: "0 6px 28px rgba(28,64,44,0.06)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, left: "10%", right: "10%", height: 2,
            background: "linear-gradient(90deg,transparent,#1c402c 30%,#D4C5B2 70%,transparent)",
            opacity: 0.40,
          }} />

          <div style={{
            width: 72, height: 72, borderRadius: "50%",
            margin: "0 auto 16px",
            background: "linear-gradient(135deg, rgba(28,64,44,0.12), rgba(212,197,178,0.25))",
            border: "1.5px solid rgba(28,64,44,0.22)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 18px rgba(28,64,44,0.10)",
          }}>
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#1c402c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <polyline points="2,7 12,14 22,7" />
              <path d="M2 19 L9 13" opacity="0.6" />
              <path d="M22 19 L15 13" opacity="0.6" />
            </svg>
          </div>

          <h3 style={{
            fontFamily: "var(--font-great-vibes), cursive",
            fontSize: 38,
            color: "#1c402c",
            marginBottom: 6,
            lineHeight: 1.1,
          }}>
            Lluvia de Sobres
          </h3>

          <div style={{
            width: 42, height: 1,
            margin: "10px auto 12px",
            background: "linear-gradient(90deg,transparent,rgba(28,64,44,0.40),transparent)",
          }} />

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: 18,
            color: "#1c402c",
            lineHeight: 1.55,
            letterSpacing: 0.4,
          }}>
            Un sobre con tu bendición llenará mi corazón de alegría.
          </p>
        </div>
      </div>
    </section>
  );
}
