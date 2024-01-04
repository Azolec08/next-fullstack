export type linkProps = {
  title: string;
  path: string;
  style: string;
};

export type mongoType = {
  _id: any;
  id: number;
  title: string;
  image: string;
  author: string;
  userId: string;
  slug: string;
};

export type userType = {
  _id: any;
  id: number;
  username: string;
  image: string;
  password: any;
  userId: string;
};
