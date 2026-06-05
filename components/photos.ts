// ══════════════════════════════════════════════════════════════
//  FOTOS DE LA QUINCEAÑERA — Julia Sofía
//  Para cambiar una foto: pega aquí la URL (Supabase o /public).
//  Si la dejas vacía "", se muestra un placeholder verde elegante.
//
//  Foto 1 (hero)    → de espaldas, vertical 9:16, golden hour
//  Foto 2 (framed)  → de frente, marco rasgado, vertical 4:5
//  Foto 3 (closing) → bosque encantado, vertical 9:16
// ══════════════════════════════════════════════════════════════
const BASE = "https://bsjoelxktbvlavfoozhk.supabase.co/storage/v1/object/public/fotos-clientes/img/xv-julia-sofia";

export const PHOTOS = {
  hero: `${BASE}/hero.jpg`,
  framed: `${BASE}/framed.jpg`,
  closing: `${BASE}/closing.jpg`,
};
