import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostHeader } from "@/app/_components/post-header";

export default function AboutPage() {
  const pageDetails = {
    title: "About Him",
    coverImage: "/assets/blog/about/stop-looking.jpg",
    date: "2025-09-18T05:35:07.322Z",
    author: {
      name: "Dim.",
      picture: "/assets/blog/authors/me.jpg",
    },
  };

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={pageDetails.title}
            coverImage={pageDetails.coverImage}
            date={pageDetails.date}
            author={pageDetails.author}
          />

          {/* This is the body of your page */}
          {/* Reverting this back to max-w-2xl */}
          <div className="max-w-2xl mx-auto"> 
            <div className="prose dark:prose-invert lg:prose-xl">

              <p className="mb-8">
                Reads Nietzsche once, still can’t spell his name. Visits 4chan to witness democracy’s final form (retarded), then hops to Reddit for the daily sermon on moral superiority (circlejerk). Both sides equally schizophrenic, but it’s cheaper than therapy.
              </p>

              <p className="mb-8">
               Goes to the gym to fix confidence issues. Didn’t work, but at least the lighting’s good. Muscle mass remains theoretical.
              </p>

              <p className="mb-8">
                Economically somewhere between Austrian school and delusion. Too much Mises, not enough money. Probably the only atheist who evangelizes harder than a priest.
              </p>

              <p className="mb-8">
                Claims to say the N-word only in rap songs, proudly cites a friend who once met a Black guy as legal precedent. Romantic in theory, emotionally unavailable in practice. Dreaming of love, doing absolutely nothing about it.
              </p>

              <p className="mb-8">
               Terrified of worms and geckos, but argues with strangers about liberty and the gold standard like life depends on it.
              </p>

              <p className="mb-8">
               A man of contradictions: preaches logic, lives on impulse. Thinks he’s rational, just severely sleep-deprived.
              </p>
              <p className="mb-8">
                A real human being.
              </p>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
