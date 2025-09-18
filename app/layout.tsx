import type { Metadata } from "next";
import { Noto_Sans_KR, Playfair_Display } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_KR({
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tllcmn.org"),
  title: {
    default: "TLLC Minnesota Church",
    template: "%s | TLLC Minnesota Church",
  },
  description:
    "Gospel-centered Korean church in Minnesota gathering to worship, equip, and serve the Twin Cities community.",
  openGraph: {
    title: "TLLC Minnesota Church",
    description:
      "Discover worship services, ministries, and community life at TLLC Minnesota Church serving the Korean-American community.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TLLC Minnesota Church",
    description:
      "Discover worship services, ministries, and community life at TLLC Minnesota Church serving the Korean-American community.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${playfair.variable} bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
