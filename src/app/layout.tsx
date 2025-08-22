import { Metadata } from "next";
import { defaultMetadata } from "@/lib/metadata";
import AppHeader from "@/components/AppHeader";

import "@/styles/globals.css";
import "@/styles/components.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <AppHeader />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
