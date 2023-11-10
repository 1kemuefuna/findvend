import React, { useState, useEffect } from "react";
import darkIcon from "../../assets/dark.svg";
import lightIcon from "../../assets/light.svg";

const ThemeToggler: React.FC = () => {
  const [theme, setTheme] = useState<string | null>(null);

  // Function to toggle the theme
  const toggleTheme = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      setTheme("light-mode");
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  };

  // Detect system theme and set it as the default
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark-mode");
      document.body.classList.add("dark-mode");
    } else {
      setTheme("light-mode");
      document.body.classList.add("light-mode");
    }
  }, []);

  return (
    <div>
      <img
        src={theme === "dark-mode" ? darkIcon : lightIcon}
        alt="Toggle Theme"
        onClick={toggleTheme}
        style={{ cursor: "pointer", width: "36px" }}
      />
    </div>
  );
};

export default ThemeToggler;
