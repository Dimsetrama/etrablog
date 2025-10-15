// C:\web\my-final-blog\src\app\_components\explore-link-with-trail.tsx

"use client";

import { useState } from "react";
import ImageTrail from "./image-trail";
import { Post } from "@/interfaces/post";
import { AnimatedLink } from "./animated-link";

type Props = {
  posts: Post[];
};

export function ExploreLinkWithTrail({ posts }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const imageUrls = posts.map((p) => p.coverImage);

  return (
    // This parent provides the positioning context and is the hover target.
    <div
      className="relative mt-24 pt-12 pb-12 border-t border-neutral-200 dark:border-slate-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* This wrapper stretches the ImageTrail to fill the entire section. */}
      {isHovered && (
        <div className="absolute inset-0">
          <ImageTrail items={imageUrls} />
        </div>
      )}

      {/* This container centers the text and places it on top of the trail's container. */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <AnimatedLink
          href="/posts"
          className="text-2xl font-bold tracking-tight hover:underline"
        >
          Explore All Stories
        </AnimatedLink>
        <p className="text-neutral-500 mt-2 italic">
          Or return to the void.
        </p>
      </div>
    </div>
  );
}