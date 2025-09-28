import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { getAllPosts } from "@/lib/api";
import { PostList } from "./post-list";

export default function AllPostsPage() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Header />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mt-8 mb-8">
          All Stories
        </h1>
        <PostList posts={allPosts} />
      </Container>
    </main>
  );
}
