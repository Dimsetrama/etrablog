import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  imageCaption?: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  nextPost?: string;
  previousPost?: string;
  preview?: boolean;
};
