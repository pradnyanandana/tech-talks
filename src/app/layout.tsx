import { Metadata } from "next";
import { defaultMetadata } from "@/lib/metadata";
import AppHeader from "@/components/AppHeader";
import GSAPProvider from "@/components/GSAPProvider";

import "@/styles/globals.css";
import "@/styles/components.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = defaultMetadata;

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <GSAPProvider>
          <div className="app">
            <AppHeader />
            <main className="main">{children}</main>
          </div>
        </GSAPProvider>
      </body>
    </html>
  );
};

export default RootLayout;
