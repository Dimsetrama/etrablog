import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "../../_components/container"; // Corrected path
import Header from "../../_components/header"; // Corrected path
import { PostBody } from "../../_components/post-body"; // Corrected path
import { PostHeader } from "../../_components/post-header"; // Corrected path
import { type Post } from "@/interfaces/post";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Props) {
  const post: Post = getPostBySlug(params.slug);

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
          {(post.previousPost || post.nextPost) && (
            <div className="max-w-2xl mx-auto mt-12 flex justify-between">
              <div>
                {post.previousPost && (
                  <Link
                    href={`/posts/${post.previousPost}`}
                    className="inline-block bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-7 lg:px-8 duration-200 transition-colors"
                  >
                    &larr; Previous Part
                  </Link>
                )}
              </div>
              <div>
                {post.nextPost && (
                  <Link
                    href={`/posts/${post.nextPost}`}
                    className="inline-block bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-7 lg:px-8 duration-200 transition-colors"
                  >
                    Next Part &rarr;
                  </Link>
                )}
              </div>
            </div>
          )}
        </article>
      </Container>
    </main>
  );
}

// ... The rest of your file (generateMetadata, etc.) does not need to change.