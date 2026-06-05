"use client";

export default function Ornament() {
  return (
    <div className="flex justify-center py-3 px-4">
      <svg viewBox="0 0 300 42" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 300, height: 42 }}>
        <line x1="0" y1="20" x2="96" y2="20" stroke="#D4C5B2" strokeWidth="0.85" opacity="0.40"/>
        <line x1="0" y1="23" x2="88" y2="23" stroke="#D4C5B2" strokeWidth="0.38" opacity="0.18"/>
        <path d="M96 21.5 Q104 7 116 21.5" stroke="#1c402c" strokeWidth="0.95" fill="none" opacity="0.30"/>
        <path d="M122 21.5 L126.5 15.5 L131 21.5 L126.5 27.5 Z" fill="#D4C5B2" fillOpacity="0.40" stroke="#D4C5B2" strokeWidth="0.4" opacity="0.5"/>
        <path d="M150 6 L165 21.5 L150 37 L135 21.5 Z" fill="rgba(28,64,44,0.06)" stroke="#1c402c" strokeWidth="1.05" opacity="0.35"/>
        <circle cx="150" cy="21.5" r="4.5" fill="rgba(212,197,178,0.40)" stroke="#D4C5B2" strokeWidth="0.7" opacity="0.70"/>
        <path d="M169 21.5 L173.5 15.5 L178 21.5 L173.5 27.5 Z" fill="#D4C5B2" fillOpacity="0.40" stroke="#D4C5B2" strokeWidth="0.4" opacity="0.5"/>
        <path d="M184 21.5 Q196 7 204 21.5" stroke="#1c402c" strokeWidth="0.95" fill="none" opacity="0.30"/>
        <line x1="204" y1="20" x2="300" y2="20" stroke="#D4C5B2" strokeWidth="0.85" opacity="0.40"/>
        <line x1="212" y1="23" x2="300" y2="23" stroke="#D4C5B2" strokeWidth="0.38" opacity="0.18"/>
      </svg>
    </div>
  );
}
