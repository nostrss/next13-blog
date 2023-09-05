'use client';

import { useState } from 'react';
import SunnyIcon from './Icons/SunnyIcon';
import NightIcon from './Icons/NightIcon';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const chageDarkMode = () => {
    setIsDark(!isDark);

    if (!isDark) {
      document.documentElement.classList.add('darkmode');
    } else {
      document.documentElement.classList.remove('darkmode');
    }
  };

  return (
    <>
      <button onClick={chageDarkMode}>
        {isDark ? <SunnyIcon color='white' /> : <NightIcon />}
      </button>
    </>
  );
}
