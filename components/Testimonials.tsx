"use client";

const testimonials = [
  {
    name: "Jake Mitchell",
    handle: "28 courses played",
    avatar: "/assets/avatars/avatar_1.png",
    quote:
      "I had a running list in my Notes app for years. This replaced it in one afternoon. Being able to compare courses head-to-head instead of guessing a number out of thin air is a game changer.",
    course: "Bandon Dunes, OR",
  },
  {
    name: "Sarah Chen",
    handle: "54 courses played",
    avatar: "/assets/avatars/avatar_2.png",
    quote:
      "My husband and I use it to track every course from our golf trips. The map view alone is worth it — seeing all our pins across the country is incredibly satisfying.",
    course: "Whistling Straits, WI",
  },
  {
    name: "Ryan Donnelly",
    handle: "107 courses played",
    avatar: "/assets/avatars/avatar_3.png",
    quote:
      "I'm chasing the Golf Digest Top 100 and finally have a real way to track my progress. The fact that I can see my friends' lists too makes it competitive in the best way.",
    course: "Pebble Beach, CA",
  },
  {
    name: "Kevin Park",
    handle: "41 courses played",
    avatar: "/assets/avatars/avatar_4.png",
    quote:
      "Our Saturday foursome has a group chat in the app now. We share every round and argue about rankings all week. It's become part of the routine.",
    course: "TPC Sawgrass, FL",
  },
  {
    name: "Tom Whitfield",
    handle: "73 courses played",
    avatar: "/assets/avatars/avatar_5.png",
    quote:
      "Clean, fast, no bloat. It does one thing — rank courses — and it does it perfectly. The comparison system is so intuitive. My whole club is on it.",
    course: "Pinehurst No. 2, NC",
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        background: "var(--green-800)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(250,247,242,0.03) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--gold)",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          From the course
        </p>

        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(30px, 4.5vw, 50px)",
            fontWeight: 800,
            color: "var(--bg)",
            textAlign: "center",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          What golfers are saying.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "18px",
            color: "rgba(250,247,242,0.55)",
            textAlign: "center",
            maxWidth: "440px",
            margin: "0 auto 64px",
          }}
        >
          Real golfers. Real rankings. Real opinions.
        </p>

        {/* Testimonial grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: "rgba(250,247,242,0.04)",
                border: "1px solid rgba(250,247,242,0.08)",
                borderRadius: "20px",
                padding: "32px 28px",
                transition: "background 0.2s, transform 0.2s",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(250,247,242,0.07)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(250,247,242,0.04)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "18px" }}>
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="var(--gold)"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "15px",
                  color: "rgba(250,247,242,0.8)",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author + course */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                {/* Avatar */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                    border: "2px solid rgba(250,247,242,0.1)",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--bg)",
                      lineHeight: 1.3,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "12px",
                      color: "rgba(250,247,242,0.4)",
                      marginTop: "2px",
                    }}
                  >
                    {t.handle}
                  </div>
                </div>

                {/* Course pill */}
                <div
                  style={{
                    marginLeft: "auto",
                    padding: "4px 10px",
                    borderRadius: "100px",
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "var(--gold)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {t.course}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
