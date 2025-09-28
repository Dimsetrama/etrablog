import Image from "next/image";
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

              <span className="text-xl italic">In order to shit fire, one must first eat glass.</span>
              <p className="mb-8"></p>

              <p className="mb-8">
                There are people who are born with names that sound like prophecies, but a name that basically translates into “young victorious sun” sounds hell of a heavy burden, isn’t it?
                Imagine being named after the eternal source of light, then spending your twenties arguing with yourself about whether matcha tastes like grass.
              </p>

              <p className="mb-8">
                He is the kind of person who takes the tragicomedy of life very seriously. When he cuts down his body fat, it’s not just about looking sharper in the mirror; it’s about slicing away the unnecessary illusions of comfort, burning them off like calories.
                The prick who will train to failure and then write an autistic caption about failure like it was preordained by the gods of schizophrenic anarchist. If Camus told us to imagine Sisyphus happy, this guy would probably reply, "Sisyphus would post gym pics too."
              </p>

              {/* Your middle image goes here (still within the narrower text column) */}
              <Image
                src="/assets/blog/about/i-said-stop-looking.jpg"
                alt=""
                width={1300}
                height={630}
                className="my-8 w-full h-auto"
              />

              <p className="mb-8">
                The gym is nothing more than a cathedral of overcompensation, iron plates clanging like church bells announcing the gospel of inadequacy. 
                Every rep is less about muscle and more about masking the invisible fractures of his life, bench-pressing the weight of unmet expectations and unreached childhood dreams. 
              </p>

              <p className="mb-8">
                Call it therapy, call it vanity, call it a ritual of pretending that biceps can substitute for emotional stability. 
                After all, some people go to confession, others chase enlightenment. He just deadlifts until his spine negotiates a truce with gravity.
              </p>

              {/* <Image
                src="/assets/blog/about/ur-weird-man.jpg"
                alt=""
                width={1300}
                height={630}
                className="my-8 w-full h-auto"
              /> */}

              <p className="mb-8">
                And then there's the matter of faith, or the absence of it. That guy, in a way, is devout in his atheism. Rationality is practically his version of a substitute, a place where one stops and thinks, "Should we really bow to Him?".
                If he is proven wrong, however, if a Creator exists, he'll shrug and say that perhaps no one ever considers the possibility that maybe God doesn't believe in us.
              </p>

              <p className="mb-8">
                But maybe that's the beauty of it. For all the laughter and undiagnosed autism, he is still profoundly human.
                Doubts, desires, and delusions. Plays hard games with harder lives, still looking for the small victories. His curse isn't that he doesn't
                believe in God, it's that he still believes in people, against better judgment.
              </p>

              <p className="mb-8">
                A real human being.
              </p>
            </div>
          </div>
          
          {/* THIS IS THE MOVED BOTTOM IMAGE */}
          {/* It's now outside the max-w-2xl div, but still within the <article> */}
          <div className="mt-8"> {/* Added margin top for spacing */}
            <Image
              src="/assets/blog/about/fine-if-u-insist.jpg"
              alt=""
              width={1300}
              height={630}
              className="w-full h-auto" // This will now stretch to the Container's width
            />
          </div>

        </article>
      </Container>
    </main>
  );
}
