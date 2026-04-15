import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — The Clubhouse",
  description: "How The Clubhouse handles your personal data.",
};

export default function Privacy() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="April 2026">
      <p>
        This Privacy Policy explains how The Clubhouse (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;) collects, uses, and protects your personal information
        when you use our mobile application and related services (the
        &ldquo;Service&rdquo;). By using The Clubhouse, you agree to the practices
        described here.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>Information you provide</h3>
      <ul>
        <li>
          <strong>Account information:</strong> email address, username, display
          name, and profile photo.
        </li>
        <li>
          <strong>Round data:</strong> courses you log, ratings you assign, scores,
          dates played, notes, tags, photos, and playing partners.
        </li>
        <li>
          <strong>Messages:</strong> direct messages and group-chat content you send
          through the app.
        </li>
      </ul>

      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Usage data:</strong> device type, operating system, app version,
          crash reports, and basic analytics about how you interact with the Service.
        </li>
        <li>
          <strong>Approximate location:</strong> only when you explicitly use
          location-based features like course search. We do not track your precise
          location in the background.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>

      <p>We use your information to:</p>
      <ul>
        <li>Operate, maintain, and improve the Service.</li>
        <li>
          Display your rounds, rankings, and profile according to your visibility
          settings.
        </li>
        <li>Power the Clubhouse Top 100 list using anonymous aggregated ratings.</li>
        <li>
          Communicate with you about account activity, product updates, and support
          requests.
        </li>
        <li>Prevent fraud, abuse, and violations of our Terms of Service.</li>
      </ul>

      <h2>3. Sharing Your Information</h2>

      <p>
        We <strong>do not sell</strong> your personal information. We may share
        information only in these limited cases:
      </p>
      <ul>
        <li>
          <strong>With other users:</strong> based on the per-round visibility
          settings you choose (Friends, Global, or Private).
        </li>
        <li>
          <strong>Service providers:</strong> trusted vendors who help us operate the
          Service (e.g. hosting, analytics, email delivery).
        </li>
        <li>
          <strong>Legal requirements:</strong> if required by law or to protect the
          rights, safety, or property of The Clubhouse or our users.
        </li>
      </ul>

      <h2>4. Your Choices &amp; Rights</h2>

      <p>You can, at any time:</p>
      <ul>
        <li>Edit or delete any round, photo, or comment you&apos;ve posted.</li>
        <li>
          Change the visibility of individual rounds between Friends, Global, and
          Private.
        </li>
        <li>Request a copy of your data or delete your entire account.</li>
        <li>Opt out of non-essential marketing emails.</li>
      </ul>

      <p>
        To exercise any of these rights, email us at{" "}
        <a href="mailto:support@yourclubhouse.net">support@yourclubhouse.net</a>.
      </p>

      <h2>5. Data Retention</h2>

      <p>
        We retain your data for as long as your account is active. If you delete
        your account, we delete your personal information within 30 days, except
        where retention is required by law.
      </p>

      <h2>6. Security</h2>

      <p>
        We take reasonable technical and organizational measures to protect your
        information from unauthorized access, alteration, or destruction. However,
        no method of transmission over the internet is 100% secure — we cannot
        guarantee absolute security.
      </p>

      <h2>7. Children&apos;s Privacy</h2>

      <p>
        The Clubhouse is not intended for users under 13. We do not knowingly
        collect personal information from children under 13.
      </p>

      <h2>8. Changes to This Policy</h2>

      <p>
        We may update this Privacy Policy from time to time. If we make material
        changes, we will notify you through the Service or by email. The
        &ldquo;Last updated&rdquo; date at the top of this page reflects the most
        recent revision.
      </p>

      <h2>9. Contact Us</h2>

      <p>
        Questions about this Privacy Policy? Email us at{" "}
        <a href="mailto:support@yourclubhouse.net">support@yourclubhouse.net</a>.
      </p>
    </LegalPage>
  );
}
