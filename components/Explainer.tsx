"use client";

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    headline: "Track",
    body: "Log every round you play — course, date, score, photos, notes, and playing partners. Your history, always with you.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    headline: "Rank",
    body: "Answer simple head-to-head comparisons and watch every course find its exact place in your personal definitive list — rated to the hundredth.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
    headline: "Share",
    body: "Post rounds to your friends' feeds. Comment, like, or fire a post straight into a DM. Every course has a story — tell it.",
  },
];

export default function Explainer() {
  return (
    <section
      style={{
        background: "var(--elevated)",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section label */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--green-400)",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          What is The Clubhouse
        </p>

        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 800,
            color: "var(--green-800)",
            textAlign: "center",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
            maxWidth: "680px",
            margin: "0 auto 16px",
          }}
        >
          The social home for every round you&apos;ll ever play.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "18px",
            color: "var(--text-secondary)",
            textAlign: "center",
            maxWidth: "520px",
            margin: "0 auto 72px",
            lineHeight: 1.65,
          }}
        >
          Not a scorecard app. Not just a photo dump. A personal ranking of every course
          you&apos;ve played — shared with the friends who actually care.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.headline}
              style={{
                background: "var(--surface)",
                borderRadius: "16px",
                padding: "40px 36px",
                border: "1px solid var(--border)",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 8px 32px rgba(42,92,64,0.10)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: "var(--green-50)",
                  border: "1px solid var(--green-100)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--green-500)",
                  marginBottom: "24px",
                }}
              >
                {p.icon}
              </div>

              {/* Gold divider */}
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  background: "var(--gold)",
                  borderRadius: "1px",
                  marginBottom: "20px",
                }}
              />

              <h3
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "var(--green-800)",
                  marginBottom: "12px",
                }}
              >
                {p.headline}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
