import { Metadata } from "next";
import { defaultMetadata } from "@/lib/metadata";
import AppHeader from "@/components/layout/AppHeader";
import GSAPProvider from "@/components/providers/GSAPProvider";
import { AppProvider } from "@/context/AppContext";
import ScrollProvider from "@/components/providers/ScrollProvider";
import TransitionProvider from "@/components/providers/TransitionProvider";
import PageTransition from "@/components/providers/PageTransition";

import "@/styles/globals.css";
import "@/styles/components.css";

/**
 * Root layout interface
 */
interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = defaultMetadata;

/**
 * Root layout component
 * Provider hierarchy:
 * 1. GSAP - Animation system
 * 2. App - Global state
 * 3. Scroll - Smooth scrolling
 * 4. Transition - Route animations
 *
 * Features:
 * - Global state management
 * - Animation system
 * - Smooth scrolling
 * - Route transitions
 * - Mobile viewport handling
 */
const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Viewport meta for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {/* Animation Provider */}
        <GSAPProvider>
          {/* Global State Provider */}
          <AppProvider>
            {/* Smooth Scroll Provider */}
            <ScrollProvider>
              {/* Route Transition Provider */}
              <TransitionProvider>
                <AppHeader />
                <PageTransition>{children}</PageTransition>
              </TransitionProvider>
            </ScrollProvider>
          </AppProvider>
        </GSAPProvider>
      </body>
    </html>
  );
};

export default RootLayout;
