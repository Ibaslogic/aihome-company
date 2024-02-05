export type NavItem = {
  title: string;
  path: string;
  submenu?: boolean;
  subMenuItems?: NavItem[];
};

export type ChildBlock = {
  _key: string;
  marks: Array<string>;
  text: string;
  _type: 'span';
};

export type ImageBlock = {
  _type: 'image';
  _key: string;
  asset: {
    _ref: string;
    _type: 'reference';
  };
};

export type TextBlock = {
  _type: 'block';
  _key: string;
  style: 'normal';
  markDefs: Array<string>;
  children: Array<ChildBlock>;
};

export type ContentBlock = TextBlock | ImageBlock;

export type Author = {
  _id: string;
  name: string;
  slug: string;
  image: string;
};

export type Category = {
  _id: string;
  name: string;
};

export type Post = {
  slug: string;
  _updatedAt: string;
  _createdAt: string;
  publishedAt: string;
  content: Array<ContentBlock>;
  _id: string;
  title: string;
  featuredImage: string;
  body: string;
  author: Author;
  categories: Array<Category>;
};

export type PostsArray = Array<Post>;
