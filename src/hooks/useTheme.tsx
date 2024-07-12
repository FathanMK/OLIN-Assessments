import { useEffect, useState } from "react";

export default function useTheme() {
  const initialTheme = localStorage.getItem("theme") === "dark"
  const [isDark, setDark] = useState(initialTheme)

  useEffect(() => {
    const rootEl = document.documentElement;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      if (savedTheme === "dark") {
        rootEl.classList.add("dark");
        setDark(true);
      } else {
        rootEl.classList.remove("dark");
        setDark(false);
      }
    } else {
      // If there's no theme in localStorage, make it
      rootEl.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    const rootEl = document.documentElement;

    if (isDark) {
      rootEl.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      rootEl.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return { isDark, setDark }
}