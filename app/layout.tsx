import type { Metadata, Viewport } from "next";
import { Zilla_Slab, Plus_Jakarta_Sans } from "next/font/google";
import { MotionProvider } from "@/components/app/MotionProvider";
import { THEME_COLOR } from "./theme-color";
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
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "AmorPropio & SOS",
  },
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
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
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
