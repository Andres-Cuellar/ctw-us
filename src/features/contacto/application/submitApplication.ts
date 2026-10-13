import type { Application, SubmitApplication } from "./application";

/** Default adapter: posts to this app's own route handler. */
export const submitApplication: SubmitApplication = async (
  input: Application,
) => {
  try {
    const response = await fetch("/api/aplicaciones", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    if (response.ok) return { ok: true };
    if (response.status === 422) return { ok: false, reason: "validation" };
    if (response.status === 503) return { ok: false, reason: "unconfigured" };
    return { ok: false, reason: "network" };
  } catch {
    return { ok: false, reason: "network" };
  }
};
