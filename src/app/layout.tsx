import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bastion Protocol - Domain Investment Platform",
  description: "Professional Web3 domain investment platform built on Bastion Protocol",
  keywords: ["web3", "domain", "investment", "defi", "nft", "ethereum"],
  authors: [{ name: "Bastion Protocol" }],
  creator: "Bastion Protocol",
  publisher: "Bastion Protocol",
  metadataBase: new URL("https://bastion-protocol.com"),
  openGraph: {
    title: "Bastion Protocol - Domain Investment Platform",
    description: "Professional Web3 domain investment platform built on Bastion Protocol",
    url: "https://bastion-protocol.com",
    siteName: "Bastion Protocol",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bastion Protocol",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bastion Protocol - Domain Investment Platform",
    description: "Professional Web3 domain investment platform built on Bastion Protocol",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
