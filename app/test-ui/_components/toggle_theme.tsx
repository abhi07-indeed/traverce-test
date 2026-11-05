"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { LightbulbIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Label } from "@/components/ui/label";

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
