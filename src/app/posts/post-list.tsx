"use client";

import { useState, useEffect } from "react";
import { PostPreview } from "@/app/_components/post-preview";
import { Post } from "@/interfaces/post";

type Props = {
  posts: Post[];
};

export function PostList({ posts }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery, posts]);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a post..."
        className="w-full p-4 mb-16 text-lg border border-neutral-300 rounded-md dark:bg-slate-800 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))
        ) : (
          <p>No posts found matching your search.</p>
        )}
      </div>
    </div>
  );
}