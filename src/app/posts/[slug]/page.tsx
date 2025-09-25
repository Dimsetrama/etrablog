// src/app/posts/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import { format } from 'date-fns';

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{format(new Date(post.date), 'MMMM d, yyyy')}</p>
      <div
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}