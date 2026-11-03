import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/utils/Footer";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar-AE"
      dir="rtl"
      className={`${almaraiFont.variable} ${almaraiFont.className} h-full antialiased`}
    >
      <body className="relative">
        {children}
        <Footer />
      </body>
    </html>
  );
}
