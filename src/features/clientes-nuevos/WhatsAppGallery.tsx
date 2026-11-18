"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const captures = ["1.png", "2.png", "3.png", "4.png", "5.jpeg", "6.png", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg", "12.jpeg"].map((file, index) => ({
  src: `/images/clientes-nuevos/reviews/${file}`,
  alt: `Comentario de un cliente por WhatsApp, captura ${index + 1}`,
}));

function shuffledCaptures() {
  const row = [...captures];
  for (let index = row.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [row[index], row[other]] = [row[other], row[index]];
  }
  return row;
}

export function WhatsAppGallery() {
  const [paused, setPaused] = useState(false);
  const [rows, setRows] = useState([captures, [...captures].reverse()]);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setRows([shuffledCaptures(), shuffledCaptures()]));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className={`cn-reviews cn-section${paused ? " cn-reviewsPaused" : ""}`} aria-labelledby="cn-reviews-title">
      <div className="cn-wrap cn-reviewsHeading">
        <div>
          <p className="cn-eyebrow">CONVERSACIONES POR WHATSAPP</p>
          <h2 id="cn-reviews-title">Las palabras de tus clientes,<br /><em>tal como las escriben.</em></h2>

        </div>
        <button type="button" className="cn-galleryControl" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
          {paused ? "Reanudar capturas" : "Pausar capturas"}
        </button>
      </div>
      <div className="cn-reviewsWindow">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={`cn-captureTrack testimonial-track ${rowIndex === 0 ? "testimonial-track-right" : "testimonial-track-left"}`}>
            {[0, 1].map(copy => (
              <div className="cn-captureGroup" key={copy} aria-hidden={copy === 1 || rowIndex === 1}>
                {row.map((capture, index) => (
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
