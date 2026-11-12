"use client";

import { useEffect, useState } from "react";
import "./booking-calendar.css";

interface BookingCalendarFrameProps {
  url: string;
  embedId: string;
  isSpanish: boolean;
}

/** Keep the iframe mounted while its document loads behind the placeholder. */
export function BookingCalendarFrame({ url, embedId, isSpanish }: BookingCalendarFrameProps) {
  const [ready, setReady] = useState(false);
  const [slow, setSlow] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (ready) return;
    const timer = window.setTimeout(() => setSlow(true), 12000);
    return () => window.clearTimeout(timer);
  }, [ready, attempt]);

  const retry = () => {
    setReady(false);
    setSlow(false);
    setAttempt(value => value + 1);
  };

  return (
    <div className="booking-calendar-frame" aria-busy={!ready}>
      {!ready && (
        <div className="booking-calendar-loading">
          <div className="booking-calendar-skeleton" aria-hidden="true">
            <div className="booking-calendar-summary"><span /><span /><span /><span /></div>
            <div className="booking-calendar-month">
              <div className="booking-calendar-month-title" />
              <div className="booking-calendar-days">{Array.from({ length: 35 }, (_, index) => <span key={index} />)}</div>
            </div>
          </div>
          <div className="booking-calendar-loading-card">
            <div className="booking-calendar-loading-icon" aria-hidden="true">
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 3v4m10-4v4M3 11h18m5 5 3 3 5-5" /></svg>
            </div>
            <div role="status" aria-live="polite">
              <p className="booking-calendar-loading-title">{slow
                ? (isSpanish ? "El calendario está tardando un poco" : "The calendar is taking a little longer")
                : (isSpanish ? "Preparando tu calendario" : "Preparing your calendar")}</p>
              <p className="booking-calendar-loading-description">{slow
                ? (isSpanish ? "Puedes reintentar o abrirlo en otra pestaña." : "You can retry or open it in a new tab.")
                : (isSpanish ? "Estamos cargando los horarios disponibles para tu asesoría." : "We’re loading available times for your consultation.")}</p>
            </div>
            <div className="booking-calendar-loading-bar" aria-hidden="true"><span /></div>
            {slow && <div className="booking-calendar-loading-actions">
              <button type="button" onClick={retry}>{isSpanish ? "Reintentar" : "Retry"}</button>
              <a href={url} target="_blank" rel="noopener noreferrer">{isSpanish ? "Abrir calendario ↗" : "Open calendar ↗"}</a>
            </div>}
          </div>
        </div>
      )}
      <iframe
        key={`${embedId}-${attempt}`}
        src={url}
        id={embedId}
        title={isSpanish ? "Calendario de asesoría" : "Consultation calendar"}
        allow="payment"
        scrolling="auto"
        onLoad={() => setReady(true)}
        tabIndex={ready ? 0 : -1}
        aria-hidden={!ready}
        className={`booking-calendar-embed${ready ? " booking-calendar-ready" : ""}`}
      />
    </div>
  );
}
