'use client';

import { useEffect, useState } from 'react';
import SunnyIcon from './Icons/SunnyIcon';
import NightIcon from './Icons/NightIcon';

const changeColorScheme = (mode: string) => {
  const colorScheme = document.querySelector('meta[name="color-scheme"]');
  if (mode === 'dark') {
    colorScheme?.setAttribute('content', 'dark');
  } else if (mode === 'light') {
    colorScheme?.setAttribute('content', 'light');
  }
};

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    prefersDarkMode ? setIsDark(true) : setIsDark(false);

    changeColorScheme(prefersDarkMode ? 'dark' : 'light');
  }, []);

  const chageDarkMode = () => {
    const mode = document
      .querySelector('meta[name="color-scheme"]')
      ?.getAttribute('content');
    changeColorScheme(mode === 'dark' ? 'light' : 'dark');
    mode === 'dark' ? setIsDark(false) : setIsDark(true);
  };

  return (
    <>
      <button onClick={chageDarkMode}>
        {isDark ? <SunnyIcon color='white' /> : <NightIcon />}
      </button>
    </>
  );
}
