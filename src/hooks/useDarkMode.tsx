import { useEffect, useState, useCallback } from 'react';

const useDarkMode = () => {
  console.log("dddd")
  // Determine initial theme state
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  // Effect to apply the theme and save preference
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Memoized toggle function
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode);
  }, []);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;