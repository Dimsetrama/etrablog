import { AnimatedLink } from "@/app/_components/animated-link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/api";
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

          {/* --- NEW: "ALL STORIES" LINK SECTION --- */}
          <div className="max-w-2xl mx-auto mt-24 pt-12 border-t border-neutral-200 dark:border-slate-800 text-center">
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
          
        </article>
      </Container>
    </main>
  );
}
// ... rest of the file (generateMetadata, etc.) stays the same
