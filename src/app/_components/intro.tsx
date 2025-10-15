// C:\web\my-final-blog\src\app\_components\intro.tsx

"use client"; // Keep this directive

// Import your new TextType component
import TextType from "./text-type";

// The list of quotes to be typed out
const quotes = [
  "Human existence is a brilliant accident on the way to oblivion.",
  "We are living in the lamest dystopia ever.",
  "No one entertains the thought that maybe God doesn't believe in you.",
  "May death be kinder than man.",
  "A man who chases perfection dies running.",
  "May we stop seeing ourselves through the eyes of people that never saw us.",
  "If familiarity mattered, water wouldn't boil a fish.",
  "The seats are empty, the theater is dark. Why do you keep acting?",
  "A great deal of my thoughts are basically unsharable with anyone.",
  "Gave her all the stars yet all she wanted was space.",
  "A fire that burns too bright won’t last till morning.",
  "The grass is greener when you water it.",
  "You wouldn't have learned to ride a bike if someone you trusted hadn't let you go.",
  "Ongoing repeated fuck-ups of monumental proportions.",
  "Not to value our lives based on our accomplishments, but on the time we spend living and enjoying life's simple pleasures.",
  "Treason is the reason for the season.",
  "God may judge you but His sins outnumber your own.",
  "No love however brief, is a waste of time.",
  "The guy who likes walking will walk further than the guy who likes the destination.",
  "Of all the people you get to be, and you chose this?",
  "If you put someone on a pedestal, you force them to look down on you.",
  "To fuck around is human, to find out is divine.",
  "A candle loses nothing by lighting another candle.",
  "That mountain you were carrying, you were only supposed to climb.",
  "Someone else's shine does not dim yours.",
  "Try not to regret growing older, it's a privilege denied to many.",
  "Done is better than perfect.",
  "Spoon in a knife block.",
  "There's no benefit of being right if you can't make people listen to the answer.",
  "How much can a heart bleed before it runs dry?",
  "Nothing time can't heal.",
  "No man is innocent by the morals of tomorrow.",
  "And now that you don't have to be perfect, you can be good.",
  "What have you got to lose that you haven't already lost?",
  "Night is the natural state of the universe. Day only exists because of the sun.",
  "Weep for men at their birth, not at their death.",
  "There is no lasting hope in violence, only temporary relief from hopelessness.",
  "At the end of the game the King and the Pawn go into the same box.",
  "Believe in the universe that doesn't care and people that do.",
  "How funny, yet sad is life's irony.",
  "The nail that sticks out gets hammered.",
  "The jester's cap affords one too many liberties.",
  "The only thing fair about life is how unfair it is to everyone.",
  "If you try to endlessly stack bricks, no matter how perfect you do it, they will fall over.",
  "Are we all not jesters in God's court?",
  "Don’t get your meat where you get your bread.",
  "People think they're exempt because they're self-aware.",
  "Struggle represents the normality of will.",
  "Patience is a wise man's virtue.",
  "He who makes a beast of himself gets rid the pain of being a man.",
  "Long shot but i can dream a dream.",
  "When elephants fight it's the grass that suffers.",
  "Never lay eggs on a burning nest.",
  "Writing is paradoxical, the best part of a story is the one you don't tell.",
  "Here be dragons.",
  "If there is a God above, He weeps.",
  "The world truly is the result of dice being thrown over and over.",
  "Nothing is more attractive than who you imagine someone is.",
  "We are what we repeatedly do. Excellence then, is not an act, but a habit.",
  "I'll put my coffin next to yours.",
  "Homesick for a place that doesn't exist.",
  "We truly had blurred the lines between reality and hell.",
  "Already picked from the tree, might as well eat the fruit. ",
  "God bless this perfect shitstorm, i hope that it takes me with it.",
  "We're all slaves to our biological imperative.",
  "Pain doesn't go until it teaches you what you need to know.",
  "In the kingdom of the blind, the one eyed man is king.",
  "What you lose in the fire, you will find amongst the ashes.",
  "Until such time as the world ends, we will act as though it intends to spin on.",
  "Do not light yourself on fire to keep others warm.",
  "Hell on earth is meeting the man you could have been.",
  "Those who can make you believe absurdities can make you commit atrocities.",
  "A ship is safe in harbor, but that's not what ships are for.",
  "Never make someone a priority when all you are to them is an option.",
  "Another day closer to the grave.",
  "Never attribute to malice that which is adequately explained by stupidity.",
  "The good die young, so i'm gonna be here for a while.",
  "It's always darkest just before the dawn.",
  "I learn from the mistakes of people who took my advice.",
  "Sometimes the cattle brand themselves.",
  "If there is a God, hit us with the same rock that ended the dinosaurs please.",
  "The magnitude of the necessity does not impact the morality of the violation.",
  "Your life is more about regret management than goal achievement, isn't it?",
  "In order to shit fire, one must first chew glass.",
  "You made life so hauntingly beautiful.",
  "You spend your whole life gathering guests for your funeral.",
  "If your presence doesn't make an impact, your absence won't make a difference.",
  "There is a tomorrow every single day.",
  "To suffer is the artist's true catalyst, the greatest agony is simply to exist.",
  "You'll find another life to live.",
  "Stay in the coffin of your comfort zone.",
  "Obedience to ignorance is the ultimate conceit.",
  "You can't change your past, but you can still fuck up your future.",
  "Be grateful for what you've got, because a lot of people don't have a lot.",
  "Bad choices make good memories.",
  "The world would still turn without you.",
  "Living is easy with eyes closed, misunderstanding all you see.",
  "I haven't killed myself yet so lets see how much further we can go.",
  "When it's over, leave. don't continue watering a dead flower.",
  "Just have to remember that we're all here for a purpose and universe picks its time.",
  "But a man is not made for defeated. A man can be destroyed but not defeated.",
]; 

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Etrama.
      </h1>
      {/* MODIFIED: Replaced the clickable h4 with the TextType component */}
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 min-h-[4.5rem] md:min-h-[3rem]">
        <TextType
          text={quotes}
          typingSpeed={50}
          pauseDuration={3000}
        />
      </h4>
    </section>
  );
}