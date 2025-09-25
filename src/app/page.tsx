// src/app/page.tsx
import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import { format } from 'date-fns';

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-12">My Blog</h1>
      <div className="space-y-10">
        {allPosts.map((post) => (
          <div key={post.slug}>
            <h2 className="text-3xl font-bold">
              <Link href={`/posts/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mt-2">{format(new Date(post.date), 'MMMM d, yyyy')}</p>
            <p className="mt-4">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  );
}