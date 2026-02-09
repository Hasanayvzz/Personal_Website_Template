"use client";

import { useEffect, useState } from "react";
import { useThemeStore } from "@/stores/themeStore";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, mounted]);

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return <>{children}</>;
}
