export type IPropsChildren = {
  children: React.ReactNode;
};

export type PostIdPrevNext = {
  currentPostId?: string;
};

export type Post = PostIdPrevNext & {
  title: string;
  description: string;
  date: string;
};

export type IPropsNav = IPropsChildren & {
  href: string;
};
