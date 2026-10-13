import { NextResponse } from "next/server";
import { validate, type Application } from "@/features/contacto/application/application";

/**
 * OPEN-03: the lead destination is not decided yet. Set APPLICATION_WEBHOOK_URL
 * to a CRM intake endpoint and submissions are forwarded there.
 *
 * While it is unset this returns 503 rather than a fake success, so a real
 * enquiry is never silently dropped — the form then points the visitor at
 * WhatsApp, which does work today.
 */
export async function POST(request: Request) {
  let payload: Application;

  try {
    payload = (await request.json()) as Application;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!validate(payload)) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  const destination = process.env.APPLICATION_WEBHOOK_URL;
  if (!destination) {
    console.error(
      "[aplicaciones] APPLICATION_WEBHOOK_URL is not set; submission was not delivered.",
    );
    return NextResponse.json({ error: "unconfigured" }, { status: 503 });
  }

  const forwarded = await fetch(destination, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }),
  });

  if (!forwarded.ok) {
    console.error(
      `[aplicaciones] destination responded ${forwarded.status}; submission was not delivered.`,
    );
    return NextResponse.json({ error: "destination" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
