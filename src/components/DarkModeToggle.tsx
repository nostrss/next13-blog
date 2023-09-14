'use client';

import { useEffect, useState } from 'react';
import SunnyIcon from './Icon/SunnyIcon';
import NightIcon from './Icon/NightIcon';
import { usePathname } from 'next/navigation';
import { DARK_MODE, LIGHT_MODE, MODE_COOKIE_NAME } from '@/constant';
import { COOKIE } from '@/util/cookie';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (!COOKIE.getCookie(MODE_COOKIE_NAME)) {
      const prefersDarkMode = window.matchMedia(
        `(prefers-color-scheme: ${DARK_MODE})`
      ).matches;
      prefersDarkMode ? setIsDark(true) : setIsDark(false);
      changeColorScheme(prefersDarkMode ? DARK_MODE : LIGHT_MODE);
      COOKIE.setCookie(
        MODE_COOKIE_NAME,
        prefersDarkMode ? DARK_MODE : LIGHT_MODE,
        720
      );
    } else {
      const mode = COOKIE.getCookie(MODE_COOKIE_NAME);
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
    COOKIE.setCookie(
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
