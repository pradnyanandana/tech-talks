import { Metadata } from "next";
import { defaultMetadata } from "@/lib/metadata";
import AppHeader from "@/components/layout/AppHeader";
import GSAPProvider from "@/components/providers/GSAPProvider";
import { AppProvider } from "@/context/AppContext";
import ScrollProvider from "@/components/providers/ScrollProvider";

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
          <AppProvider>
            <ScrollProvider>
              <div className="app">
                <AppHeader />
                <main className="main">{children}</main>
              </div>
            </ScrollProvider>
          </AppProvider>
        </GSAPProvider>
      </body>
    </html>
  );
};

export default RootLayout;
