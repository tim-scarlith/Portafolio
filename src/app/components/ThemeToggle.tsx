'use client';

import { useState, useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs'; // You will need to install react-icons

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");  
  const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
    }
  }, []);

  // Cambiar tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-white bg-gray-700 dark:bg-gray-200 dark:text-gray-900 transition-colors"
    >
      {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
    </button>
  );
}
