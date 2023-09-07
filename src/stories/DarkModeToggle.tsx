'use client';

import { useEffect, useState } from 'react';
import SunnyIcon from './Icons/SunnyIcon';
import NightIcon from './Icons/NightIcon';
import { usePathname } from 'next/navigation';
import { UTIL } from '@/util';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (!UTIL.getCookie('mode')) {
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      prefersDarkMode ? setIsDark(true) : setIsDark(false);
      changeColorScheme(prefersDarkMode ? 'dark' : 'light');
      UTIL.setCookie('mode', prefersDarkMode ? 'dark' : 'light', 720);
    } else {
      const mode = UTIL.getCookie('mode');
      mode === 'dark' ? setIsDark(true) : setIsDark(false);
      changeColorScheme(mode);
    }
  }, [path]);

  const chageDarkMode = () => {
    const mode = document
      .querySelector('meta[name="color-scheme"]')
      ?.getAttribute('content');
    changeColorScheme(mode === 'dark' ? 'light' : 'dark');
    mode === 'dark' ? setIsDark(false) : setIsDark(true);
    UTIL.setCookie('mode', mode === 'dark' ? 'light' : 'dark', 720);
  };

  return (
    <>
      <button onClick={chageDarkMode}>
        {isDark ? <SunnyIcon color='white' /> : <NightIcon />}
      </button>
    </>
  );
}

const changeColorScheme = (mode: string) => {
  const colorScheme = document.querySelector('meta[name="color-scheme"]');
  if (mode === 'dark') {
    colorScheme?.setAttribute('content', 'dark');
  } else if (mode === 'light') {
    colorScheme?.setAttribute('content', 'light');
  } else {
    colorScheme?.setAttribute('content', 'light');
  }
};
