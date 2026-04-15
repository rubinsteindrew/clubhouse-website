import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "About — The Clubhouse",
  description:
    "The Clubhouse is a social app for golfers to log, rank, and share every course they've played.",
};

export default function About() {
  return (
    <LegalPage eyebrow="About" title="The story behind The Clubhouse">
      <p>
        <strong>The Clubhouse</strong> was built for golfers who actually care about
        the courses they play. Not scorecards. Not handicaps. The courses themselves —
        the design, the greens, the views, the story of the day, the friends you
        played with.
      </p>

      <p>
        For years, the best way to remember a round was a blurry Instagram post and a
        scorecard tucked in a drawer. For years, the best way to argue with your
        buddies about which course was better was just shouting over dinner. There
        wasn&apos;t a definitive list. There wasn&apos;t a way to show progress toward
        the classics. There wasn&apos;t a place where your golf life lived.
      </p>

      <p>So we built one.</p>

      <h2>What it is</h2>

      <p>
        The Clubhouse is a social app for logging, ranking, and sharing every round of
        golf you play. The core insight is simple: humans are bad at absolute ratings
        (&ldquo;is this a 7 or an 8?&rdquo;) but great at comparisons (&ldquo;which
        did you prefer — Pebble or Cypress?&rdquo;). We let you answer those
        head-to-head comparisons and slot every course into its exact right spot in
        your personal ranking.
      </p>

      <p>
        You get a feed of your friends&apos; rounds. Group chats for your foursome.
        A map of every course you&apos;ve played, pinned. Two Top 100 lists to
        chase — Golf Digest&apos;s and the Clubhouse&apos;s own live community list.
        Everything your golf life needs, nothing it doesn&apos;t.
      </p>

      <h2>Who built it</h2>

      <p>
        The Clubhouse is built by golfers, for golfers. We play the game, we chase
        the lists, and we argue about the courses. If we wouldn&apos;t use a feature,
        it doesn&apos;t go in the app.
      </p>

      <h2>Get in touch</h2>

      <p>
        Questions, feedback, feature requests, bug reports, or a course that&apos;s
        missing from the database? Drop us a line at{" "}
        <a href="mailto:support@yourclubhouse.net">support@yourclubhouse.net</a>.
        We read every message.
      </p>
    </LegalPage>
  );
}
