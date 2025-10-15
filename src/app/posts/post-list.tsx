// C:\web\my-final-blog\src\app\posts\post-list.tsx

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

  // NEW: Add state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 4;

  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
    // Reset to the first page whenever the search query changes
    setCurrentPage(1);
  }, [searchQuery, posts]);

  // NEW: Calculate which posts to display on the current page
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a post..."
        className="w-full p-4 mb-16 text-lg border border-neutral-300 rounded-md dark:bg-slate-800 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
      />
      {/* MODIFIED: This grid now maps over `currentPosts` */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
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

       {/* NEW: Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-16">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="inline-block bg-black hover:bg-white hover:text-black border border-black text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white font-bold py-3 px-6 duration-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &larr; Previous
          </button>

          {/* MODIFIED: Replaced the plain text with a visual dot indicator */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                    currentPage === pageNumber
                      ? "bg-black dark:bg-white"
                      : "bg-neutral-300 dark:bg-slate-700 hover:bg-neutral-400 dark:hover:bg-slate-600"
                  }`}
                  aria-label={`Go to page ${pageNumber}`}
                />
              )
            )}
          </div>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="inline-block bg-black hover:bg-white hover:text-black border border-black text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white font-bold py-3 px-6 duration-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next &rarr;
          </button>
        </div>
      )}
    </div>
  );
}