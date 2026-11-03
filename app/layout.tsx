import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/utils/Footer";
import { Metadata } from "next";
import StickyContactBar from "./StickyContactBar";

const almaraiFont = localFont({
  src: [
    {
      path: "./fonts/Almarai-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/Almarai-Bold.woff2",
      weight: "700",
    },
    {
      path: "./fonts/Almarai-ExtraBold.woff2",
      weight: "800",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-almarai",
});

export const metadata: Metadata = {
  applicationName: "شركة الزايد نقل اثاث",
  robots: {
    "max-image-preview": "large",
    follow: true,
    googleBot: {
      notranslate: true,
      "max-image-preview": "large",
      index: true,
      follow: true,
    },
    index: true,
    notranslate: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-32x32.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar-AE"
      dir="rtl"
      className={`${almaraiFont.variable} ${almaraiFont.className} h-full antialiased`}
    >
      <body className="relative">
        {children}
        <StickyContactBar />
        <Footer />
      </body>
    </html>
  );
}
