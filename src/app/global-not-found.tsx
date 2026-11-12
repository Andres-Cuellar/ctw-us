import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Suspense } from "react";
import { NotFoundContent } from "@/shared/errors/NotFoundContent";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata: Metadata = {
  title: "404 | creamostuweb",
  robots: { index: false, follow: true },
  icons: { icon: "/icono.png" },
};

export default function GlobalNotFound() {
  return (
    <html lang="es" className={sora.variable}>
      <body>
        <main>
          <Suspense fallback={null}>
            <NotFoundContent standalone />
          </Suspense>
        </main>
      </body>
    </html>
  );
}
