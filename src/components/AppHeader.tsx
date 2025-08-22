"use client";

import { IconArrowLeft, IconLogo, IconReset } from "@/lib/icons";

const AppHeader = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <button className="back-button svg-button" aria-label="Back">
            <IconArrowLeft />
          </button>

          <div className="logo">
            <IconLogo />
          </div>

          <button className="reset-button svg-button" aria-label="Reset">
            <IconReset />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
