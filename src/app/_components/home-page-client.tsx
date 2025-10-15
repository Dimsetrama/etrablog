"use client";

import { useState, useEffect } from "react";
import { Post } from "@/interfaces/post";
import { HeroPost } from "./hero-post";
import { MoreStories } from "./more-stories";
import { PostPreview } from "./post-preview";

type Props = {
  allPosts: Post[];
};

export function HomePageClient({ allPosts }: Props) {
  const [heroPost, setHeroPost] = useState<Post>(allPosts[0]);
  const [isFading, setIsFading] = useState(false); // New state for the animation

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true); // 1. Start fading out

      // 2. Wait for the fade-out to finish (500ms)
      setTimeout(() => {
        let newHeroPost;
        // Make sure the new post is different from the current one
        do {
          newHeroPost = allPosts[Math.floor(Math.random() * allPosts.length)];
        } while (newHeroPost.slug === heroPost.slug && allPosts.length > 1);
        
        setHeroPost(newHeroPost); // 3. Swap the post content
        setIsFading(false); // 4. Start fading back in
      }, 500); // This duration should match the CSS transition duration

    }, 10000);

    return () => clearInterval(timer);
  }, [allPosts, heroPost]); // Added heroPost to dependency array for the loop

  // MODIFIED: Added .slice(0, 4) to limit the posts to 4
  const morePosts = allPosts
    .filter((post) => post.slug !== heroPost.slug)
    .slice(0, 4);

  return (
    <>
      {/* --- ADDED ANIMATION CLASSES HERE --- */}
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
      </div>

      {morePosts.length > 0 && <MoreStories posts={morePosts} />}

      {/* --- THIS IS YOUR "ABOUT HIM" SECTION --- */}
      <section className="mt-16">
        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          About Him
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          <PostPreview
            title=""
            coverImage="/assets/blog/about/stop-looking.jpg"
            date="2025-09-18T05:35:07.322Z"
            author={{
              name: "Dim.",
              picture: "/assets/blog/authors/me.jpg",
            }}
            slug="/about"
            excerpt="If Nietzsche had Wi-Fi and a gym membership."
          />
        </div>
      </section>
    </>
  );
}
