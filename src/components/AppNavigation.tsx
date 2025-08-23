"use client";

import { FC } from "react";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

interface AppNavigationProps {
  path?: string;
  title?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outlined";
}

const AppNavigation: FC<AppNavigationProps> = ({
  path = "/",
  title = "Get a reality check",
  onClick,
  variant = "primary",
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(path);
    }
  };

  return (
    <section className="navigation">
      <div className="container">
        <Button fullWidth onClick={handleClick} variant={variant}>
          {title}
        </Button>
      </div>
    </section>
  );
};

export default AppNavigation;
