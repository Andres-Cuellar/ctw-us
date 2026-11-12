"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import type { Locale } from "@/shared/config/site";
import { BookingCalendarFrame } from "./BookingCalendarFrame";

const BOOKING_CALENDARS = {
  general: {
    url: "https://api.gstf.us/widget/booking/NQD2GFsECX9HaRbxp081",
    embedId: "NQD2GFsECX9HaRbxp081_1793251102316",
  },
  newClients: {
    url: "https://api.gstf.us/widget/booking/uePrKolGek7CoVS1jAuP",
    embedId: "uePrKolGek7CoVS1jAuP_1794522308099",
  },
};

export function BookingDialog({ locale }: { locale: Locale }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [calendar, setCalendar] = useState(BOOKING_CALENDARS.general);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const isSpanish = locale === "es";

  useEffect(() => {
    const open = (event: Event) => {
      const detail = (event as CustomEvent<{ plan?: string; source?: string }>).detail;
      const requestedPlan = detail?.plan;
      const isNewClients = detail?.source === "nuevos-clientes" ||
        /\/nuevos-clientes\/?$/.test(window.location.pathname);
      setCalendar(isNewClients ? BOOKING_CALENDARS.newClients : BOOKING_CALENDARS.general);
      setSelectedPlan(requestedPlan && ["Esencial", "Crecimiento", "Expansión"].includes(requestedPlan) ? requestedPlan : null);
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
      {selectedPlan && (
        <p className="border-b border-bone/15 px-5 py-3 text-sm text-bone">
          {isSpanish ? "Plan de interés:" : "Selected plan:"} <strong>{selectedPlan}</strong>
          <span className="ml-2 text-bone-70">{isSpanish ? "Menciona este plan al reservar tu demostración." : "Mention this plan when booking your demo."}</span>
        </p>
      )}
      {loaded && (
        <BookingCalendarFrame
          key={calendar.embedId}
          url={calendar.url}
          embedId={calendar.embedId}
          isSpanish={isSpanish}
        />
      )}
      {loaded && <Script src="https://api.gstf.us/js/form_embed.js" strategy="afterInteractive" />}
      <a
        href={calendar.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-t border-bone/15 px-5 py-3 text-center text-sm text-gold underline underline-offset-4"
      >
        {isSpanish ? "Abrir calendario en otra pestaña" : "Open calendar in a new tab"}
      </a>
    </dialog>
  );
}
