export const API_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://next13-blog-mu.vercel.app';

export const DARK_MODE = 'dark';
export const LIGHT_MODE = 'light';
export const MODE_COOKIE_NAME = 'mode';
