"use client";

import { usePathname, useRouter } from "next/navigation";
import { IconArrowLeft, IconLogo, IconReset } from "@/lib/icons";

const PATH_MAPPING = {
  "/walkthrough": "/",
  "/form": "/walkthrough",
  "/results": "/form",
} as const;

const AppHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleBack = () => {
    const previousPath = PATH_MAPPING[pathname as keyof typeof PATH_MAPPING];
    router.push(previousPath || "/");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {!isHomePage ? (
            <button
              className="back-button svg-button"
              aria-label="Back"
              onClick={handleBack}
            >
              <IconArrowLeft />
            </button>
          ) : (
            <div className="empty-svg-button"></div>
          )}

          <div className="logo">
            <IconLogo />
          </div>

          <button
            className="reset-button svg-button"
            aria-label="Reset"
            onClick={() => router.push("/")}
          >
            <IconReset />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
