/**
 * The application a business owner submits. One shape, shared by the form, the
 * route handler and whichever destination is configured later (OPEN-03).
 */
export interface Application {
  nombre: string;
  negocio: string;
  telefono: string;
  email: string;
  giro: string;
  necesidades: string[];
  tieneWeb: string;
  financiamiento: string;
  mensaje: string;
  /** Required. Recorded with the submission for A2P 10DLC evidence. */
  consentimiento: boolean;
}

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: "validation" | "unconfigured" | "network" };

/**
 * The port. The form depends on this signature, never on a transport, so the
 * destination can become a CRM webhook, an email provider or a server action
 * without the form changing.
 */
export type SubmitApplication = (input: Application) => Promise<SubmitResult>;

export const REQUIRED_FIELDS = [
  "nombre",
  "negocio",
  "telefono",
  "email",
] as const satisfies readonly (keyof Application)[];

export function validate(input: Application): boolean {
  const hasRequired = REQUIRED_FIELDS.every(
    (field) => String(input[field] ?? "").trim().length > 0,
  );
  return hasRequired && input.consentimiento === true;
}
