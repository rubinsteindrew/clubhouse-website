import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — The Clubhouse",
  description: "The terms governing your use of The Clubhouse.",
};

export default function Terms() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="April 2026">
      <p>
        Welcome to The Clubhouse. These Terms of Service (the
        &ldquo;Terms&rdquo;) govern your access to and use of The Clubhouse
        mobile application, website, and related services (together, the
        &ldquo;Service&rdquo;). By using the Service, you agree to these Terms.
        If you do not agree, please do not use the Service.
      </p>

      <h2>1. Eligibility</h2>

      <p>
        You must be at least 13 years old to use The Clubhouse. By creating an
        account, you represent that you meet this age requirement and have the
        authority to agree to these Terms.
      </p>

      <h2>2. Your Account</h2>

      <p>
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activity that occurs under your account. Notify
        us immediately at{" "}
        <a href="mailto:support@yourclubhouse.net">support@yourclubhouse.net</a>{" "}
        if you suspect unauthorized access.
      </p>

      <h2>3. User Content</h2>

      <p>
        You retain ownership of the content you post — rounds, photos, ratings,
        comments, messages, and anything else (&ldquo;User Content&rdquo;). By
        posting User Content, you grant The Clubhouse a worldwide, non-exclusive,
        royalty-free license to host, display, and distribute that content as
        necessary to operate the Service.
      </p>

      <p>
        You are responsible for the User Content you post. Do not post content
        that:
      </p>
      <ul>
        <li>Infringes anyone else&apos;s intellectual property rights.</li>
        <li>Is unlawful, harassing, defamatory, obscene, or hateful.</li>
        <li>Contains spam, malware, or malicious links.</li>
        <li>Impersonates another person or misrepresents your identity.</li>
      </ul>

      <h2>4. Acceptable Use</h2>

      <p>You agree not to:</p>
      <ul>
        <li>
          Reverse-engineer, decompile, or attempt to extract source code from the
          Service.
        </li>
        <li>
          Scrape, harvest, or collect data from the Service through automated
          means.
        </li>
        <li>Use the Service to harass, threaten, or abuse other users.</li>
        <li>
          Interfere with or disrupt the Service, including by attempting to
          overload our servers.
        </li>
      </ul>

      <h2>5. Course Data &amp; Ratings</h2>

      <p>
        Course information displayed in The Clubhouse (including names,
        locations, photos, and Top 100 list membership) is compiled from public
        sources and user submissions. We make reasonable efforts to keep it
        accurate but cannot guarantee it is always complete or up to date.
      </p>

      <p>
        Individual ratings and rankings are a personal expression of preference
        by our users. The Clubhouse Top 100 reflects aggregate community ratings
        and does not represent an official endorsement by any golf association.
      </p>

      <h2>6. Termination</h2>

      <p>
        You may delete your account at any time. We may suspend or terminate your
        account if you violate these Terms. Upon termination, your right to use
        the Service ends immediately.
      </p>

      <h2>7. Disclaimers</h2>

      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
        without warranties of any kind. We do not warrant that the Service will be
        uninterrupted, error-free, or secure.
      </p>

      <h2>8. Limitation of Liability</h2>

      <p>
        To the fullest extent permitted by law, The Clubhouse shall not be liable
        for any indirect, incidental, special, consequential, or punitive damages
        arising out of or related to your use of the Service.
      </p>

      <h2>9. Changes to These Terms</h2>

      <p>
        We may update these Terms occasionally. If we make material changes, we
        will notify you through the Service or by email. Continued use of the
        Service after such changes constitutes acceptance of the updated Terms.
      </p>

      <h2>10. Contact</h2>

      <p>
        Questions about these Terms? Email us at{" "}
        <a href="mailto:support@yourclubhouse.net">support@yourclubhouse.net</a>.
      </p>
    </LegalPage>
  );
}
