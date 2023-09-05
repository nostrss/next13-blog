export type IPropsChildren = {
  children: React.ReactNode;
};

export type Post = {
  title: string;
  subTitle: string;
  date: string;
};

export type IPropsNav = IPropsChildren & {
  href: string;
};
