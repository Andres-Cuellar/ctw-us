"use client";

import { useRef } from "react";
import type { FormSectionContent } from "@/content/types";
import type { Nicho } from "@/shared/lib/city";
import { useReveal } from "@/shared/motion/useReveal";
import { Eyebrow } from "@/shared/ui/atoms/Eyebrow";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

const DETAILING_FORM_ID = "s7p3SSjxG0oAP2wKkuB2";
const SPA_FORM_ID = "f1ujuliJoa0K2OTP7gX5";

interface FormNichoProps {
  nicho: Nicho;
  content: FormSectionContent;
}

/**
 * Inline LeadConnector/GSTF form.
 *
 * The provider's `form_embed.js` is deliberately NOT loaded: in this Next
 * setup it resizes the iframe to 0 until it receives a cross-origin message
 * that never arrives, leaving a blank block. The iframe alone renders the
 * form correctly, so we give it a fixed height.
 */
export function FormNicho({ nicho, content }: FormNichoProps) {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);

  const formId = nicho === "detailing" ? DETAILING_FORM_ID : SPA_FORM_ID;
  const id = `inline-${formId}`;
  const src = `https://api.gstf.us/widget/form/${formId}`;
  const title = nicho === "detailing" ? "Detailing" : "Spa";
  const hue = nicho === "detailing" ? "gold" : "wine";

  return (
    <section
      ref={scope}
      id="formulario"
      className="relative isolate scroll-mt-24 overflow-hidden bg-night"
    >
      <div className="mx-auto w-full max-w-[900px] px-5 pt-20 pb-24 sm:px-8 md:pt-24 md:pb-28 lg:px-12">
        <div className="mb-10 max-w-[60ch]" data-reveal>
          <Eyebrow hue={hue}>{content.eyebrow}</Eyebrow>
          <SectionTitle size="lg" split={false} className="mt-4 leading-tight">
            {content.title}
          </SectionTitle>
          {content.body && (
            <p className="mt-4 text-lg leading-relaxed text-bone-70">
              {content.body}
            </p>
          )}
        </div>

        <div
          className="overflow-hidden rounded-2xl border border-bone/10 bg-white shadow-2xl"
          data-reveal
        >
          <iframe
            id={id}
            src={src}
            title={title}
            loading="eager"
            style={{
              width: "100%",
              height: "745px",
              border: "none",
              display: "block",
            }}
            data-form-id={formId}
            data-layout-iframe-id={id}
            data-form-name={title}
            data-height="745"
          />
        </div>

        <p className="mt-4 text-xs text-bone-45" data-reveal>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-gold"
          >
            {content.fallbackLabel}
          </a>
        </p>
      </div>
    </section>
  );
}
