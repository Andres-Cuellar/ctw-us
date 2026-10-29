"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import type { Locale } from "@/shared/config/site";

const BOOKING_URL = "https://api.gstf.us/widget/booking/NQD2GFsECX9HaRbxp081";

export function BookingDialog({ locale }: { locale: Locale }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [loaded, setLoaded] = useState(false);
  const isSpanish = locale === "es";

  useEffect(() => {
    const open = () => {
      setLoaded(true);
      dialogRef.current?.showModal();
    };
    window.addEventListener("open-booking", open);
    return () => window.removeEventListener("open-booking", open);
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label={isSpanish ? "Agendar asesoría" : "Book a consultation"}
      className="fixed inset-0 m-auto max-h-[92dvh] w-[min(96vw,1120px)] max-w-none overflow-y-auto rounded-2xl border border-bone/20 bg-night p-0 text-bone shadow-2xl backdrop:bg-black/75"
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}
    >
      <div className="flex items-center justify-between gap-4 border-b border-bone/15 px-5 py-4">
        <h2 className="text-lg font-semibold">{isSpanish ? "Agenda tu asesoría gratuita" : "Book your free consultation"}</h2>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label={isSpanish ? "Cerrar calendario" : "Close calendar"}
          className="rounded-lg px-3 py-1 text-2xl text-bone hover:bg-bone/10 focus-visible:outline-2 focus-visible:outline-gold"
        >
          ×
        </button>
      </div>
      {loaded && (
        <iframe
          src={BOOKING_URL}
          id="NQD2GFsECX9HaRbxp081_1793251102316"
          title={isSpanish ? "Calendario de asesoría" : "Consultation calendar"}
          allow="payment"
          scrolling="auto"
          className="block h-[min(76dvh,760px)] w-full border-0 bg-white"
        />
      )}
      {loaded && <Script src="https://api.gstf.us/js/form_embed.js" strategy="afterInteractive" />}
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-t border-bone/15 px-5 py-3 text-center text-sm text-gold underline underline-offset-4"
      >
        {isSpanish ? "Abrir calendario en otra pestaña" : "Open calendar in a new tab"}
      </a>
    </dialog>
  );
}
