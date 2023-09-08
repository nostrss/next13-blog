export type IPropsChildren = {
  children: React.ReactNode;
};

export type PostIdPrevNext = {
  currentPostId?: string;
};

export type ImgesArrayItem = {
  url: string | undefined;
};

export type Post = PostIdPrevNext & {
  title: string;
  description: string;
  date: string;
  tags: string;
  images: ImgesArrayItem[];
};

export type IPropsNav = IPropsChildren & {
  href: string;
};

export type IconProps = {
  size?: number;
  color?: string;
  url?: string;
};
