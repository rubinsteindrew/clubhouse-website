"use client";


const slides = [
  {
    src: "/assets/screenshots/Feed.jpg",
    label: "Friends Feed",
    desc: "See every round your friends play",
  },
  {
    src: "/assets/screenshots/Rank_A_New_Course.jpg",
    label: "Log a Round",
    desc: "Add every course you play",
  },
  {
    src: "/assets/screenshots/Course_Picker.jpg",
    label: "Head-to-Head",
    desc: "Which do you prefer?",
  },
  {
    src: "/assets/screenshots/My_Profile_Top_10.jpg",
    label: "Top 10 List",
    desc: "Your personal ranked list",
  },
  {
    src: "/assets/screenshots/Friends_Post.jpg",
    label: "Friends Posts",
    desc: "See what your friends are playing",
  },
  {
    src: "/assets/screenshots/MyMap.jpg",
    label: "My Map",
    desc: "Every course you've played, pinned",
  },
  {
    src: "/assets/screenshots/Discover_Courses.jpg",
    label: "Discover",
    desc: "The live Clubhouse Top 100",
  },
  {
    src: "/assets/screenshots/Messages.jpg",
    label: "Messages",
    desc: "DMs and group chats",
  },
  {
    src: "/assets/screenshots/My_Profile.jpg",
    label: "Profile",
    desc: "Your stats and photos",
  },
];

// Duplicate for seamless infinite loop
const LOOP_SLIDES = [...slides, ...slides];

// Card geometry — integer dimensions for pixel-perfect rendering
// Screen area: 240w × 520h (exact 9:19.5 ratio, no fractional pixels)
// Phone shell padding 8px → outer card width = 240 + 16 = 256
const SCREEN_W = 240;
const SCREEN_H = 520;
const CARD_W = SCREEN_W + 16; // +16 for 8px padding on each side
const GAP = 24;
// Translate exactly one full set to the left to create the seamless loop
const ONE_SET_PX = slides.length * (CARD_W + GAP); // 9 × 280 = 2520

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

      {/* ── Infinite marquee track ──
          Use explicit pixel width (not max-content) and overflow: hidden
          for compat with older iOS/Android browsers. */}
      <div style={{ overflow: "hidden", paddingTop: "16px", paddingBottom: "32px", paddingLeft: `${GAP}px` }}>
        <div
          style={{
            display: "flex",
            gap: `${GAP}px`,
            width: `${LOOP_SLIDES.length * CARD_W + (LOOP_SLIDES.length - 1) * GAP}px`,
            animation: `carousel ${slides.length * 4}s linear infinite`,
            WebkitAnimation: `carousel ${slides.length * 4}s linear infinite`,
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
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
                    width: `${SCREEN_W}px`,
                    height: `${SCREEN_H}px`,
                    position: "relative",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {/* Placeholder renders first so the real screenshot sits on top */}
                  <PlaceholderScreen label={slide.label} desc={slide.desc} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.src}
                    alt={slide.label}
                    width={SCREEN_W}
                    height={SCREEN_H}
                    decoding="async"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: `${SCREEN_W}px`,
                      height: `${SCREEN_H}px`,
                      objectFit: "cover",
                      zIndex: 1,
                      imageRendering: "-webkit-optimize-contrast",
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                    }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
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
        @-webkit-keyframes carousel {
          0%   { -webkit-transform: translateX(0); transform: translateX(0); }
          100% { -webkit-transform: translateX(-${ONE_SET_PX}px); transform: translateX(-${ONE_SET_PX}px); }
        }
        @keyframes carousel {
          0%   { -webkit-transform: translateX(0); transform: translateX(0); }
          100% { -webkit-transform: translateX(-${ONE_SET_PX}px); transform: translateX(-${ONE_SET_PX}px); }
        }
      `}</style>
    </section>
  );
}
