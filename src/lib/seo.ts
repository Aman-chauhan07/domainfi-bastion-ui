import type { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export function generateSEOMetadata({
  title = "Bastion Protocol - Domain Investment Platform",
  description = "Professional Web3 domain investment platform built on Bastion Protocol",
  keywords = ["web3", "domain", "investment", "defi", "nft", "ethereum"],
  image = "/og-image.png",
  url = "https://bastion-protocol.com",
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords,
    authors: [{ name: "Bastion Protocol" }],
    creator: "Bastion Protocol",
    publisher: "Bastion Protocol",
    metadataBase: new URL(url),
    openGraph: {
      title,
      description,
      url,
      siteName: "Bastion Protocol",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
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
}