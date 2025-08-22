import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showHeader?: boolean;
}

export default function Layout({
  children,
  title = "Juicebox",
  showHeader = true,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Juicebox Assessment App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="app">
        {showHeader && (
          <header className="header">
            <div className="container">
              <div className="header-content">
                <h1 className="logo">juicebox</h1>
                <button className="menu-button" aria-label="Menu">
                  <span></span>
                </button>
              </div>
            </div>
          </header>
        )}

        <main className="main">{children}</main>
      </div>
    </>
  );
}
