// C:\web\my-final-blog\src\app\_components\hero-post.tsx

import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
      {/* --- Left Column: Image (No changes here) --- */}
      <div className="mb-8 md:mb-0">
        <CoverImage title={title} src={coverImage} slug={slug} size="large" />
      </div>

      {/* --- Right Column: Text Content --- */}
      {/* MODIFIED: Added a border and more padding */}
      <div className="flex flex-col justify-center md:border-l-2 md:border-neutral-200 md:dark:border-slate-800 md:pl-16">
        <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="mb-4 text-lg">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-6">{excerpt}</p>
        <div className="flex justify-between items-center">
          <Avatar name={author.name} picture={author.picture} />
          {/* NEW: 'Read More' Link, styled like a button */}
          <Link
            href={`/posts/${slug}`}
            className="inline-block bg-black hover:bg-white hover:text-black border border-black text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white font-bold py-3 px-6 duration-200 transition-colors"
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}