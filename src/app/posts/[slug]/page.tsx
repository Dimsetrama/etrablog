import { Metadata } from "next";
import Link from "next/link"; // Make sure this is imported
import { AnimatedLink } from "@/app/_components/animated-link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            imageCaption={post.imageCaption}
          />
          <PostBody content={content} />
          {/* --- PREVIOUS / NEXT POST NAVIGATION --- */}
          {(post.previousPost || post.nextPost) && (
            <div className="max-w-2xl mx-auto mt-12 flex justify-between">
              <div>
                {post.previousPost && (
                  <AnimatedLink
                    href={`/posts/${post.previousPost}`}
                    className="inline-block bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-7 lg:px-8 duration-200 transition-colors"
                  >
                    &larr; Previous Part
                  </AnimatedLink>
                )}
              </div>
              <div>
                {post.nextPost && (
                  <AnimatedLink
                    href={`/posts/${post.nextPost}`}
                    className="inline-block bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-7 lg:px-8 duration-200 transition-colors"
                  >
                    Next Part &rarr;
                  </AnimatedLink>
                )}
              </div>
            </div>
          )}
          {/* --- END OF NAVIGATION --- */}
        </article>
      </Container>
    </main>
  );
}

// ... rest of the file (generateMetadata, etc.) stays the same
