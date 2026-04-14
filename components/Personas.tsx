"use client";

const personas = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: "The Serious Recreational Golfer",
    subtitle: "20–60 rounds a year",
    bullets: [
      "Has a mental bucket list but no good way to track it",
      "Already posts course photos — just loses them over time",
      "Has 3–10 friends who want to argue about which course is better",
      "Needs one definitive app for ranking, not a pile of spreadsheets",
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: "The Bucket List Chaser",
    subtitle: "Chasing Top 100 lists",
    bullets: [
      "Tracking Golf Digest Top 100, state lists, and dream courses",
      "Wants a beautiful way to show progress (14 of 100 checked off)",
      "Shares trip photos on Instagram but loses context later",
      "The Clubhouse Top 100 gives them a second list to chase",
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "The Regular Group",
    subtitle: "The Saturday foursome",
    bullets: [
      "Member at one or two clubs, guest at more",
      "Plays with the same crew every week",
      "Wants a group chat for the trip crew, separate from iMessage",
      "Loves the country-club aesthetic — the app feels right",
    ],
  },
];

export default function Personas() {
  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
          Who It&apos;s For
        </p>

        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(30px, 4.5vw, 50px)",
            fontWeight: 800,
            color: "var(--green-800)",
            textAlign: "center",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Built for golfers who care about their courses.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "18px",
            color: "var(--text-secondary)",
            textAlign: "center",
            maxWidth: "520px",
            margin: "0 auto 72px",
          }}
        >
          Not for scorecard grinders. Not for pros. For people who travel for golf,
          argue about courses, and remember every round.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "28px",
          }}
        >
          {personas.map((p, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                borderRadius: "20px",
                padding: "36px 32px",
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: "var(--green-800)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold)",
                    flexShrink: 0,
                  }}
                >
                  {p.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "var(--green-800)",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "13px",
                      color: "var(--gold)",
                      fontWeight: 500,
                      marginTop: "2px",
                    }}
                  >
                    {p.subtitle}
                  </div>
                </div>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {p.bullets.map((b, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "var(--green-50)",
                        border: "1.5px solid var(--green-200)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--green-500)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
