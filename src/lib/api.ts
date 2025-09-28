import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

// REPLACE YOUR EXISTING getPostBySlug FUNCTION WITH THIS ONE
export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post: Post = {
    slug: realSlug,
    content,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    coverImage: data.coverImage,
    imageCaption: data.imageCaption || null, // <-- ADDED THIS LINE
    author: data.author,
    ogImage: data.ogImage,
    nextPost: data.nextPost || null,
    previousPost: data.previousPost || null,
  };

  return post;
}

// REPLACE YOUR EXISTING getAllPosts FUNCTION WITH THIS ONE
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
