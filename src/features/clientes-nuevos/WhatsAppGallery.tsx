"use client";

import Image from "next/image";
import { useState } from "react";

// Replace these image paths and alt text when approved customer captures arrive.
const captures = [
  { src: "/images/clientes-nuevos/whatsapp-sample-1.svg", alt: "Muestra de captura de WhatsApp sobre organización. No es un testimonio real." },
  { src: "/images/clientes-nuevos/whatsapp-sample-2.svg", alt: "Muestra de captura de WhatsApp sobre atención. No es un testimonio real." },
  { src: "/images/clientes-nuevos/whatsapp-sample-3.svg", alt: "Muestra de captura de WhatsApp sobre seguimiento. No es un testimonio real." },
];

export function WhatsAppGallery() {
  const [paused, setPaused] = useState(false);

  return (
    <section className={`cn-reviews cn-section${paused ? " cn-reviewsPaused" : ""}`} aria-labelledby="cn-reviews-title">
      <div className="cn-wrap cn-reviewsHeading">
        <div>
          <p className="cn-eyebrow">CONVERSACIONES POR WHATSAPP</p>
          <h2 id="cn-reviews-title">Las palabras de tus clientes,<br /><em>tal como las escriben.</em></h2>
          <p>Vista previa con imágenes de muestra. Aquí irán las capturas reales que compartas con autorización.</p>
        </div>
        <button type="button" className="cn-galleryControl" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
          {paused ? "Reanudar capturas" : "Pausar capturas"}
        </button>
      </div>
      <div className="cn-reviewsWindow">
        {[captures, [...captures].reverse()].map((row, rowIndex) => (
          <div key={rowIndex} className={`cn-captureTrack testimonial-track ${rowIndex === 0 ? "testimonial-track-right" : "testimonial-track-left"}`}>
            {[0, 1].map(copy => (
              <div className="cn-captureGroup" key={copy} aria-hidden={copy === 1 || rowIndex === 1}>
                {[...row, ...row, ...row].map((capture, index) => (
                  <figure className="cn-capture" key={`${capture.src}-${index}`}>
                    <Image src={capture.src} alt={copy === 0 && rowIndex === 0 && index < captures.length ? capture.alt : ""} width={390} height={700} sizes="(max-width: 640px) 200px, 220px" />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
