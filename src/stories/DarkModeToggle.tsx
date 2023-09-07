'use client';

import { useEffect, useState } from 'react';
import SunnyIcon from './Icons/SunnyIcon';
import NightIcon from './Icons/NightIcon';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (!getCookie('mode')) {
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      prefersDarkMode ? setIsDark(true) : setIsDark(false);
      changeColorScheme(prefersDarkMode ? 'dark' : 'light');
      setCookie('mode', prefersDarkMode ? 'dark' : 'light', 720);
    } else {
      const mode = getCookie('mode');
      mode === 'dark' ? setIsDark(true) : setIsDark(false);
      changeColorScheme(mode);
    }
  }, []);

  const chageDarkMode = () => {
    const mode = document
      .querySelector('meta[name="color-scheme"]')
      ?.getAttribute('content');
    changeColorScheme(mode === 'dark' ? 'light' : 'dark');
    mode === 'dark' ? setIsDark(false) : setIsDark(true);
    setCookie('mode', mode === 'dark' ? 'light' : 'dark', 720);
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

const setCookie = (
  cookieName: string,
  cookieValue: string,
  expiresHour: number
): void => {
  const expired = new Date();
  expired.setTime(expired.getTime() + expiresHour * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue}; path=/; Expires=${expired}`;
};

const getCookie = (cookieName: string): string => {
  let result = '';
  document.cookie.split(';').map((item) => {
    const cookieItem = item.trim();
    if (item.includes(cookieName)) {
      result = cookieItem.split('=')[1];
    }
  });
  return result;
};
