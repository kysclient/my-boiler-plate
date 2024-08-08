"use client";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  const Icon = useMemo(() => {
    return theme === "dark" ? (
      <MoonIcon className="h-4 w-4" />
    ) : (
      <SunIcon className="h-4 w-4" />
    );
  }, [theme]);

  if (!isMount) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      {Icon}
    </Button>
  );
};

export default ToggleThemeButton;
