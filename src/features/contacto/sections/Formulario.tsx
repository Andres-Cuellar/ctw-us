"use client";

import { useId, useState, type FormEvent } from "react";
import type { FormContent, FormField } from "@/content/types";
import { site } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";
import { ANCHORS } from "@/shared/lib/routes";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import type { Application } from "../application/application";
import { submitApplication } from "../application/submitApplication";

interface FormularioProps {
  content: FormContent;
}

type Status = "idle" | "submitting" | "sent" | "error";

const FIELD_SHELL =
  "w-full rounded-[10px] border border-bone/20 bg-night px-4 py-3 text-bone transition-colors placeholder:text-bone/30 focus:border-cyan";

export function Formulario({ content }: FormularioProps) {
  const prefix = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const application: Application = {
      nombre: String(data.get("nombre") ?? ""),
      negocio: String(data.get("negocio") ?? ""),
      telefono: String(data.get("telefono") ?? ""),
      email: String(data.get("email") ?? ""),
      giro: String(data.get("giro") ?? ""),
      necesidades: data.getAll("necesidades").map(String),
      tieneWeb: String(data.get("tieneWeb") ?? ""),
      financiamiento: String(data.get("financiamiento") ?? ""),
      mensaje: String(data.get("mensaje") ?? ""),
      consentimiento: data.get("consentimiento") === "on",
    };

    setStatus("submitting");
    const result = await submitApplication(application);

    if (result.ok) {
      setStatus("sent");
      setMessage(content.confirmation);
      event.currentTarget.reset();
      return;
    }

    setStatus("error");
    setMessage(content.errorMessage);
  }

  return (
    <Panel surface="night" glow="gold" id={ANCHORS.application}>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-20">
        <div>
          <SectionTitle size="md" split={false}>{content.title}</SectionTitle>
          <p className="mt-6 max-w-[40ch] text-bone-70">
            Te respondemos el mismo día hábil. Si lo tuyo es urgente, llámanos
            al{" "}
            <a
              className="type-label text-bone underline decoration-1 underline-offset-4 hover:text-gold"
              href={site.phone.href}
              data-numeric
            >
              {site.phone.display}
            </a>
            .
          </p>
        </div>

        <form onSubmit={onSubmit} noValidate={false} className="flex flex-col gap-7">
          {content.fields.map((field) => (
            <Field key={field.id} field={field} prefix={prefix} />
          ))}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn btn-gold px-8 py-4 text-base disabled:cursor-not-allowed disabled:opacity-55"
            >
              {status === "submitting" ? content.submittingLabel : content.submitLabel}
            </button>

            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="type-label text-sm text-cyan underline decoration-1 underline-offset-4 hover:text-bone"
            >
              O escríbenos por WhatsApp
            </a>
          </div>

          <p
            role="status"
            aria-live="polite"
            className={cn(
              "text-base",
              status === "sent" &&
                "rounded-[10px] border border-cyan/45 bg-cyan/10 p-4 text-bone",
              status === "error" &&
                "rounded-[10px] border border-wine/60 bg-wine/20 p-4 text-bone",
            )}
          >
            {message}
          </p>
        </form>
      </div>
    </Panel>
  );
}

function Field({ field, prefix }: { field: FormField; prefix: string }) {
  const id = `${prefix}-${field.id}`;

  if (field.kind === "consent") {
    return (
      <div className="flex items-start gap-4 rounded-[10px] border border-bone/15 bg-night-2 p-5">
        <input
          id={id}
          name={field.id}
          type="checkbox"
          required={field.required}
          className="mt-1 size-5 shrink-0 accent-gold"
        />
        <label htmlFor={id} className="text-sm leading-relaxed text-bone-70">
          {field.label}
          {field.required && <RequiredMark />}
        </label>
      </div>
    );
  }

  if (field.kind === "checkboxGroup" || field.kind === "radio") {
    const type = field.kind === "radio" ? "radio" : "checkbox";
    return (
      <fieldset>
        <legend className="type-label text-base text-bone">
          {field.label}
          {field.required && <RequiredMark />}
        </legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {field.options?.map((option) => {
            const optionId = `${id}-${option}`;
            return (
              <div key={option} className="flex items-center gap-2">
                <input
                  id={optionId}
                  name={field.id}
                  type={type}
                  value={option}
                  className="size-4 accent-gold"
                />
                <label
                  htmlFor={optionId}
                  className="cursor-pointer rounded-full border border-bone/20 px-3.5 py-1.5 text-sm text-bone-70 transition-colors hover:border-cyan hover:text-bone"
                >
                  {option}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="type-label text-base text-bone">
        {field.label}
        {field.required && <RequiredMark />}
      </label>

      {field.kind === "textarea" && (
        <textarea
          id={id}
          name={field.id}
          rows={4}
          placeholder={field.placeholder}
          required={field.required}
          className={FIELD_SHELL}
        />
      )}

      {field.kind === "select" && (
        <select id={id} name={field.id} required={field.required} className={FIELD_SHELL}>
          <option value="">Selecciona una opción</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {(field.kind === "text" || field.kind === "tel" || field.kind === "email") && (
        <input
          id={id}
          name={field.id}
          type={field.kind === "text" ? "text" : field.kind}
          inputMode={field.kind === "tel" ? "tel" : undefined}
          placeholder={field.placeholder}
          autoComplete={field.autoComplete}
          required={field.required}
          className={FIELD_SHELL}
        />
      )}
    </div>
  );
}

function RequiredMark() {
  return (
    <>
      <span aria-hidden className="ml-1 text-gold">
        *
      </span>
      <span className="sr-only">(obligatorio)</span>
    </>
  );
}
