"use client";

import Image from "next/image";

const slides = [
  {
    src: "/assets/screenshots/feed_main.png",
    label: "Friends Feed",
    desc: "See every round your friends play",
  },
  {
    src: "/assets/screenshots/rank_comparison.png",
    label: "Rank Comparison",
    desc: "Head-to-head comparisons",
  },
  {
    src: "/assets/screenshots/my_list.png",
    label: "My List",
    desc: "Your personal ranked list",
  },
  {
    src: "/assets/screenshots/course_detail.png",
    label: "Course Detail",
    desc: "Deep dive on any course",
  },
  {
    src: "/assets/screenshots/map_view.png",
    label: "Map View",
    desc: "Every course you've played, pinned",
  },
  {
    src: "/assets/screenshots/discover.png",
    label: "Discover",
    desc: "Community Clubhouse Top 100",
  },
  {
    src: "/assets/screenshots/messages.png",
    label: "Messages",
    desc: "DMs and group chats",
  },
  {
    src: "/assets/screenshots/profile.png",
    label: "Profile",
    desc: "Your stats and rankings",
  },
];

// Duplicate for seamless infinite loop
const LOOP_SLIDES = [...slides, ...slides];

// Card geometry — keep in sync with the inline styles below
const CARD_W = 220;
const GAP = 24;
// Translate exactly one full set to the left to create the seamless loop
const ONE_SET_PX = slides.length * (CARD_W + GAP); // 8 × 244 = 1952

const PlaceholderScreen = ({ label, desc }: { label: string; desc: string }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "var(--green-50)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      gap: "8px",
    }}
  >
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "10px",
        background: "var(--green-200)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--green-600)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
    <div
      style={{
        fontFamily: "var(--font-playfair), serif",
        fontSize: "13px",
        fontWeight: 700,
        color: "var(--green-700)",
        textAlign: "center",
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontFamily: "var(--font-dm-sans), sans-serif",
        fontSize: "11px",
        color: "var(--text-muted)",
        textAlign: "center",
      }}
    >
      {desc}
    </div>
  </div>
);

export default function Screenshots() {
  return (
    <section
      style={{
        background: "var(--elevated)",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
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
          The App
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
          Built for the way golfers think.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "18px",
            color: "var(--text-secondary)",
            textAlign: "center",
            marginBottom: "52px",
          }}
        >
          Clean. Fast. Everything in its right place.
        </p>
      </div>

      {/* ── Infinite marquee track ── */}
      <div style={{ overflow: "hidden", paddingBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            gap: `${GAP}px`,
            width: "max-content",
            paddingLeft: `${GAP}px`,
            animation: `carousel ${slides.length * 4}s linear infinite`,
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")
          }
        >
          {LOOP_SLIDES.map((slide, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: `${CARD_W}px`,
              }}
            >
              {/* Phone shell */}
              <div
                style={{
                  background: "var(--green-900)",
                  borderRadius: "32px",
                  padding: "8px",
                  boxShadow:
                    "0 16px 40px rgba(10,31,20,0.22), 0 4px 12px rgba(10,31,20,0.12)",
                  marginBottom: "16px",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow =
                    "0 24px 56px rgba(10,31,20,0.28), 0 8px 20px rgba(10,31,20,0.16)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow =
                    "0 16px 40px rgba(10,31,20,0.22), 0 4px 12px rgba(10,31,20,0.12)";
                }}
              >
                <div
                  style={{
                    background: "var(--surface)",
                    borderRadius: "25px",
                    overflow: "hidden",
                    aspectRatio: "9/19.5",
                    position: "relative",
                  }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.label}
                    fill
                    style={{ objectFit: "cover" }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <PlaceholderScreen label={slide.label} desc={slide.desc} />
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--green-700)",
                    marginBottom: "2px",
                  }}
                >
                  {slide.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "12px",
                    color: "var(--text-muted)",
                  }}
                >
                  {slide.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes carousel {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${ONE_SET_PX}px); }
        }
      `}</style>
    </section>
  );
}
