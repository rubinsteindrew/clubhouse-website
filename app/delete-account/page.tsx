import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Delete Your Account — Your Clubhouse",
  description:
    "How to permanently delete your Your Clubhouse account and all associated data.",
};

export default function DeleteAccount() {
  return (
    <LegalPage eyebrow="Legal" title="Deleting your Your Clubhouse account">
      <p>
        Your Clubhouse lets you permanently delete your account and all
        associated data at any time.
      </p>

      <h2>How to request deletion</h2>

      <ol>
        <li>Open the Your Clubhouse app.</li>
        <li>
          Go to <strong>Profile → Settings</strong>.
        </li>
        <li>
          Tap <strong>Delete Account</strong>, then confirm{" "}
          <strong>Delete Forever</strong>.
        </li>
      </ol>

      <p>
        Your account and data are deleted immediately and permanently. If you
        can&apos;t access the app, email{" "}
        <a href="mailto:support@yourclubhouse.net">support@yourclubhouse.net</a>{" "}
        from your account&apos;s email address and we&apos;ll delete your account
        within 30 days.
      </p>

      <h2>Data that is deleted</h2>

      <ul>
        <li>
          <strong>Profile:</strong> name, username, email, avatar, date of
          birth.
        </li>
        <li>Ranked courses, ratings, round logs, and reviews.</li>
        <li>Photos and uploads.</li>
        <li>Posts, captions, comments, and likes.</li>
        <li>Direct messages.</li>
        <li>Wishlist, follows, and followers.</li>
      </ul>

      <h2>Data that is kept</h2>

      <ul>
        <li>Nothing that identifies you is retained after deletion.</li>
        <li>
          Anonymous, aggregate data that can&apos;t identify you (e.g. a
          course&apos;s overall average rating) may remain.
        </li>
        <li>
          Limited records may be kept only where required by law, for the
          minimum period required.
        </li>
      </ul>
    </LegalPage>
  );
}
