import type { Metadata } from "next";
import { Zilla_Slab, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const zillaSlab = Zilla_Slab({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AmorPropio & SOS — Tu botón de auxilio y tu ritual de amor propio",
  description:
    "Calma una crisis de pánico en segundos y construye tu amor propio día a día, con un botón de auxilio inmediato y afirmaciones que sí se sienten personales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-theme="light"
      className={`${zillaSlab.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-dvh flex flex-col bg-surface-base text-txt-primary font-body">
        {children}
      </body>
    </html>
  );
}
