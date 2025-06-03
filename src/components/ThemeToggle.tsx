import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="outline"
      onClick={toggleTheme}
      className="w-full justify-start gap-2"
    >
      <Icon name={theme === "light" ? "Moon" : "Sun"} size={16} />
      {theme === "light" ? "Темная тема" : "Светлая тема"}
    </Button>
  );
};

export default ThemeToggle;
