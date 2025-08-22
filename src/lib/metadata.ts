import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: "Reality Check on Technology & Industry Insights | Tech Talks by Juicebox",
    template: "%s | Juicebox",
  },
  description:
    "Compare your thoughts on technology with current industry opinions. Get meaningful insights and a reality check in just a few minutes with Juicebox.",
  keywords: [
    "Juicebox",
    "Technology",
    "Industry Insights",
    "Reality Check",
    "Digital Transformation",
    "Tech Opinions",
  ],
  authors: [{ name: "Juicebox" }],
  creator: "Juicebox",
  publisher: "Juicebox",
  metadataBase: new URL("https://juicebox.com.au"),
  openGraph: {
    title: "Juicebox – Reality Check on Technology & Industry Insights",
    description:
      "Join professionals worldwide and see how your views on technology compare with industry sentiments. Quick, insightful, and impactful.",
    url: "https://juicebox.com.au",
    siteName: "Juicebox",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://juicebox.com.au/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juicebox – Reality Check on Technology & Industry Opinions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juicebox – Reality Check on Technology & Industry Insights",
    description:
      "Compare your thoughts on technology with current industry opinions. Get your reality check in 2–3 minutes.",
    images: ["https://juicebox.com.au/og-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "https://www.juicebox.com.au/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "https://www.juicebox.com.au/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "https://www.juicebox.com.au/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],
    apple: "https://www.juicebox.com.au/apple-touch-icon.png",
  },
  themeColor: "#000000",
  robots: {
    index: true,
    follow: true,
  },
};
