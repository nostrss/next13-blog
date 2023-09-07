'use client';

import { useEffect, useState } from 'react';
import SunnyIcon from '../stories/Icons/SunnyIcon';
import NightIcon from '../stories/Icons/NightIcon';
import { usePathname } from 'next/navigation';
import { DARK_MODE, LIGHT_MODE, MODE_COOKIE_NAME } from '@/constant';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (!getCookie(MODE_COOKIE_NAME)) {
      const prefersDarkMode = window.matchMedia(
        `(prefers-color-scheme: ${DARK_MODE})`
      ).matches;
      prefersDarkMode ? setIsDark(true) : setIsDark(false);
      changeColorScheme(prefersDarkMode ? DARK_MODE : LIGHT_MODE);
      setCookie(
        MODE_COOKIE_NAME,
        prefersDarkMode ? DARK_MODE : LIGHT_MODE,
        720
      );
    } else {
      const mode = getCookie(MODE_COOKIE_NAME);
      mode === DARK_MODE ? setIsDark(true) : setIsDark(false);
      changeColorScheme(mode);
    }
  }, [path]);

  const chageDarkMode = () => {
    const mode = document
      .querySelector('meta[name="color-scheme"]')
      ?.getAttribute('content');
    changeColorScheme(mode === DARK_MODE ? LIGHT_MODE : DARK_MODE);
    mode === DARK_MODE ? setIsDark(false) : setIsDark(true);
    setCookie(
      MODE_COOKIE_NAME,
      mode === DARK_MODE ? LIGHT_MODE : DARK_MODE,
      720
    );
  };

  return (
    <>
      <button
        onClick={chageDarkMode}
        title={isDark ? '일반모드로 변경' : '다크모드로 변경'}
      >
        {isDark ? <SunnyIcon color='white' /> : <NightIcon />}
      </button>
    </>
  );
}

const changeColorScheme = (mode: string) => {
  const colorScheme = document.querySelector('meta[name="color-scheme"]');
  if (mode === DARK_MODE) {
    colorScheme?.setAttribute('content', DARK_MODE);
    document.documentElement.classList.add(DARK_MODE);
  } else if (mode === LIGHT_MODE) {
    colorScheme?.setAttribute('content', LIGHT_MODE);
    document.documentElement.classList.remove('dark');
  } else {
    colorScheme?.setAttribute('content', LIGHT_MODE);
    document.documentElement.classList.remove('dark');
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
