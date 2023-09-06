export type IPropsChildren = {
  children: React.ReactNode;
};

export type PostIdPrevNext = {
  currentPostId?: string;
  nextPostId?: string;
  prevPostId?: string;
};

export type Post = PostIdPrevNext & {
  title: string;
  subTitle: string;
  date: string;
};

export type IPropsNav = IPropsChildren & {
  href: string;
};
