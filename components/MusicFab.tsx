"use client";
import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";

const AUDIO_URL = "https://bsjoelxktbvlavfoozhk.supabase.co/storage/v1/object/public/fotos-clientes/audio/xv-julia-sofia/cancion.mp3";

export interface MusicFabHandle {
  play: () => void;
}

const MusicFab = forwardRef<MusicFabHandle>((_, ref) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const a = new Audio(AUDIO_URL);
    a.loop = true;
    a.volume = 0.5;
    a.preload = "none";
    audioRef.current = a;
    return () => { a.pause(); };
  }, []);

  useImperativeHandle(ref, () => ({
    play() {
      if (!audioRef.current || playing) return;
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    },
  }));

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <div style={{
      position: "fixed", bottom: 24, right: 24, zIndex: 998,
      width: 68, height: 68, userSelect: "none",
    }}>
      <div style={{
        position: "absolute", inset: -8, borderRadius: "50%",
        border: "1.5px solid rgba(212,197,178,0.30)",
        animation: playing ? "vinylPulse 2.2s ease-in-out infinite" : "none",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute", top: -4, right: -2,
        width: 24, height: 36,
        transformOrigin: "top right",
        transform: playing ? "rotate(-14deg)" : "rotate(-30deg)",
        transition: "transform 0.65s cubic-bezier(0.2,0.7,0.2,1)",
        zIndex: 4, pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute", top: 0, right: 0, width: 8, height: 8,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #D4C5B2, #b8a48e)",
          boxShadow: "0 1px 5px rgba(0,0,0,0.55)",
        }} />
        <div style={{
          position: "absolute", top: 5, right: 3, width: 2, height: 22,
          background: "linear-gradient(to bottom, #D4C5B2 0%, rgba(212,197,178,0.50) 100%)",
          borderRadius: 2, transform: "rotate(18deg)", transformOrigin: "top center",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 3, width: 6, height: 5,
          borderRadius: "0 0 2px 2px",
          background: "#D4C5B2",
          boxShadow: "0 1px 3px rgba(0,0,0,0.50)",
        }} />
      </div>

      <button
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        style={{
          position: "relative", width: "100%", height: "100%",
          borderRadius: "50%", border: "none", cursor: "pointer",
          padding: 0, outline: "none", background: "transparent",
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(28,64,44,0.45), 0 0 0 1.5px rgba(212,197,178,0.26)",
        }}
      >
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          animation: playing ? "vinylSpin 2s linear infinite" : "none",
          background: `
            radial-gradient(circle, #0a1a10 4%, transparent 4.5%),
            radial-gradient(circle, #D4C5B2 0%, #b8a48e 17%, #8e7f70 19%, transparent 19.5%),
            repeating-radial-gradient(circle,
              transparent 21%, rgba(255,255,255,0.04) 21.7%, transparent 22.3%,
              transparent 27%, rgba(255,255,255,0.04) 27.7%, transparent 28.3%,
              transparent 33%, rgba(255,255,255,0.04) 33.7%, transparent 34.3%,
              transparent 39%, rgba(255,255,255,0.04) 39.7%, transparent 40.3%,
              transparent 45%, rgba(255,255,255,0.04) 45.7%, transparent 46.3%,
              transparent 51%, rgba(255,255,255,0.04) 51.7%, transparent 52.3%,
              transparent 57%, rgba(255,255,255,0.04) 57.7%, transparent 58.3%,
              transparent 63%, rgba(255,255,255,0.04) 63.7%, transparent 64.3%,
              transparent 69%, rgba(255,255,255,0.04) 69.7%, transparent 70.3%,
              transparent 75%, rgba(255,255,255,0.04) 75.7%, transparent 76.3%,
              transparent 81%, rgba(255,255,255,0.04) 81.7%, transparent 82.3%,
              transparent 87%, rgba(255,255,255,0.04) 87.7%, transparent 88.3%,
              transparent 93%, rgba(255,255,255,0.04) 93.7%, transparent 94.3%
            ),
            radial-gradient(circle, #0a1a10 0%, #143322 60%, #0a1a10 100%)
          `,
        }}>
          <div style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, transparent 50%, rgba(0,0,0,0.15) 100%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: 6, height: 6, borderRadius: "50%",
            background: "#050d08",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.08)",
          }} />
        </div>

        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: playing ? 0 : 1,
          transition: "opacity 0.35s ease",
          pointerEvents: "none",
        }}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="rgba(212,197,178,0.95)">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </button>
    </div>
  );
});

MusicFab.displayName = "MusicFab";
export default MusicFab;
