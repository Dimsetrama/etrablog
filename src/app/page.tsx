import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";
import { HomePageClient } from "@/app/_components/home-page-client";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro />
        <HomePageClient allPosts={allPosts} />
      </Container>
    </main>
  );
}