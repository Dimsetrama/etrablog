// C:\web\my-final-blog\src\app\posts\[slug]\page.tsx

// Make sure getAllPosts is imported from your api
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { AnimatedLink } from "@/app/_components/animated-link";
// Import your new component
import { ExploreLinkWithTrail } from "@/app/_components/explore-link-with-trail";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Props) {
  const post = getPostBySlug(params.slug);
  // NEW: Fetch all posts
  const allPosts = getAllPosts();


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

{/* MODIFIED: Replace the old div with your new component */}
          <ExploreLinkWithTrail posts={allPosts} />
          
        </article>
      </Container>
    </main>
  );
}
// ... rest of the file (generateMetadata, etc.) stays the same
