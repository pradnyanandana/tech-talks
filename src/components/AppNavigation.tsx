"use client";

import { FC } from "react";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

interface AppNavigationProps {
  path: string;
}

const AppNavigation: FC<AppNavigationProps> = ({ path = "/" }) => {
  const router = useRouter();

  return (
    <section className="navigation">
      <div className="container">
        <Button fullWidth onClick={() => router.push(path)}>
          Get a reality check
        </Button>
      </div>
    </section>
  );
};

export default AppNavigation;
