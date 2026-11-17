import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let input: unknown;
  try { input = await request.json(); }
  catch { return NextResponse.json({ error: "invalid_json" }, { status: 400 }); }
  if (!input || typeof input !== "object") return NextResponse.json({ error: "validation" }, { status: 422 });
  const data = input as Record<string, unknown>;
  const valid = ["nombre", "telefono", "giro"].every(key => typeof data[key] === "string" && (data[key] as string).trim().length > 0 && (data[key] as string).length <= 160);
  if (!valid || data.consentimiento !== true || !/^[+\d\s().-]{7,30}$/.test(String(data.telefono)) || String(data.telefono).replace(/\D/g, "").length < 7) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }
  const destination = process.env.APPLICATION_WEBHOOK_URL;
  if (!destination) return NextResponse.json({ error: "unconfigured" }, { status: 503 });
  try {
    const result = await fetch(destination, {
      method: "POST", headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({ nombre: String(data.nombre).trim(), telefono: String(data.telefono).trim(), giro: String(data.giro).trim(), consentimiento: true, consentText: "Acepto que creamostuweb me contacte por teléfono, SMS o WhatsApp sobre esta solicitud. Puedo cancelar respondiendo STOP. Pueden aplicar tarifas de mensajes y datos. El consentimiento no es condición de compra.", consentVersion: "clientes-nuevos-v1", source: "clientes-nuevos", receivedAt: new Date().toISOString() }),
    });
    if (!result.ok) return NextResponse.json({ error: "destination" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "network" }, { status: 502 }); }
}
