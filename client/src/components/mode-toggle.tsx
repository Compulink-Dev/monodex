import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // or use any icons you like

const ModeToggler = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check stored preference or system preference
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";

    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 hover:bg-muted transition"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ModeToggler;
