export interface IPosts {
  _id?: string;
  id?: string;
  title: string;
  slug: { current: string; _type: string };
  publishedAt?: any;
  date?: any;
  snippet: [];
  body?: [];
  author?: IAuthor;
  categories?: ICategories[];
  mainImage?: IImage;
  image?: IImage;
  _createdAt?: any;
  _updatedAt?: Date;
}

export interface IAuthor {
  _ref: string;
  _type: string;
}
export interface ICategories {
  _key: string;
  _ref: string;
  _type: string;
}
export interface IImage {
  asset: IAsset[];
  _type: string;
}
export interface IAsset {
  _ref: string;
  _type: string;
}

export interface IFooter {
  name: string;
  links: IFooterLinks[];
}
export interface IFooterLinks {
  name: string;
  slug: string;
}
