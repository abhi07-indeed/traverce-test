"use client";

import { Button } from "@/components/ui/button";
import { LightbulbIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <>
          <LightbulbIcon></LightbulbIcon>
          Light
        </>
      ) : (
        <>
          <MoonIcon></MoonIcon>
          Dark
        </>
      )}
    </Button>
  );
}
