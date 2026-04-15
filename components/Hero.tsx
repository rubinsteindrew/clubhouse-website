"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      const scrolled = window.scrollY;
      const phone = el.querySelector(".hero-phone") as HTMLElement;
      if (phone) {
        phone.style.transform = `translateY(${scrolled * 0.12}px) rotate(-4deg)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle texture / dot grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(42,92,64,0.06) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      {/* Gold accent arc */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-180px",
          right: "-180px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1.5px solid rgba(201,168,76,0.18)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1.5px solid rgba(201,168,76,0.12)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "64px",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Text column */}
        <div
          style={{
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
          className="hero-text"
        >
          {/* Wordmark logo */}
          <div style={{ marginBottom: "28px", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
            <Image
              src="/assets/Green_Logo_Trans.png"
              alt="The Clubhouse"
              width={96}
              height={96}
              style={{ objectFit: "contain", width: "96px", height: "96px" }}
              priority
            />
            <h1
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(26px, 4.5vw, 44px)",
                fontWeight: 800,
                color: "var(--green-700)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              The Clubhouse
            </h1>
          </div>

          {/* Tagline */}
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(42px, 7vw, 80px)",
              fontWeight: 800,
              color: "var(--green-800)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: "24px",
            }}
          >
            Your courses.{" "}
            <span
              style={{
                color: "var(--green-500)",
                position: "relative",
                display: "inline-block",
              }}
            >
              Ranked.
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: "2px",
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "var(--gold)",
                  borderRadius: "2px",
                }}
              />
            </span>
          </h2>

          {/* Sub-headline */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "clamp(17px, 2.5vw, 21px)",
              fontWeight: 400,
              color: "var(--text-secondary)",
              maxWidth: "520px",
              margin: "0 auto 40px",
              lineHeight: 1.65,
            }}
          >
            Log every round. Rank every course. Share the rounds that mattered.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#download"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "var(--bg)",
                background: "var(--green-600)",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
                boxShadow: "0 2px 8px rgba(42,92,64,0.25)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "var(--green-700)";
                el.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "var(--green-600)";
                el.style.transform = "translateY(0)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </a>
            <a
              href="#download"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "var(--green-600)",
                background: "transparent",
                padding: "13px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                border: "2px solid var(--green-600)",
                transition: "background 0.2s, color 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "var(--green-50)";
                el.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.transform = "translateY(0)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.064.612.019.898-.162L16.766 16.3l-3.222-3.244z"/>
              </svg>
              Get on Android
            </a>
          </div>

          {/* Social proof badge */}
          <div
            style={{
              marginTop: "48px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 18px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "100px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ display: "flex", gap: "-4px" }}>
              {["#2A5C40", "#3D7A56", "#5A9E73"].map((color, i) => (
                <div
                  key={i}
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: color,
                    border: "2px solid var(--surface)",
                    marginLeft: i > 0 ? "-8px" : 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#FAF7F2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
              ))}
            </div>
            <span
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--text-secondary)",
              }}
            >
              Golfers ranking their courses
            </span>
          </div>
        </div>

        {/* Phone mockup */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
          className="hero-phone-wrap"
        >
          <div
            className="hero-phone"
            style={{
              transform: "rotate(-4deg)",
              transition: "transform 0.1s linear",
              position: "relative",
              maxWidth: "280px",
              width: "100%",
            }}
          >
            {/* Phone shell */}
            <div
              style={{
                background: "var(--green-900)",
                borderRadius: "44px",
                padding: "12px",
                boxShadow:
                  "0 32px 80px rgba(10,31,20,0.35), 0 8px 20px rgba(10,31,20,0.2)",
              }}
            >
              {/* Screen area */}
              <div
                style={{
                  background: "var(--surface)",
                  borderRadius: "34px",
                  overflow: "hidden",
                  aspectRatio: "9/19.5",
                  position: "relative",
                }}
              >
                <Image
                  src="/assets/screenshots/Feed.jpg"
                  alt="The Clubhouse app feed"
                  fill
                  sizes="280px"
                  unoptimized
                  style={{ objectFit: "cover" }}
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.style.display = "none";
                  }}
                />
                {/* Placeholder if no screenshot */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "var(--green-50)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    padding: "24px",
                  }}
                >
                  <Image
                    src="/assets/Green_Logo_Trans.png"
                    alt="The Clubhouse"
                    width={64}
                    height={64}
                    style={{ objectFit: "contain", width: "52px", height: "52px" }}
                  />
                  <div
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "var(--green-700)",
                      textAlign: "center",
                    }}
                  >
                    The Clubhouse
                  </div>
                  <div style={{ width: "100%" }}>
                    {[
                      { label: "Pine Valley", rating: "10", rank: "1" },
                      { label: "Augusta National", rating: "9.88", rank: "2" },
                      { label: "Pebble Beach", rating: "9.76", rank: "3" },
                      { label: "Cypress Point", rating: "9.92", rank: "4" },
                    ].map((course) => (
                      <div
                        key={course.label}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "8px 0",
                          borderBottom: "1px solid var(--border)",
                        }}
                      >
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                          <span
                            style={{
                              fontFamily: "var(--font-dm-sans), sans-serif",
                              fontSize: "11px",
                              color: "var(--text-muted)",
                              fontWeight: 600,
                              minWidth: "24px",
                            }}
                          >
                            {course.rank}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-dm-sans), sans-serif",
                              fontSize: "11px",
                              fontWeight: 500,
                              color: "var(--text-primary)",
                            }}
                          >
                            {course.label}
                          </span>
                        </div>
                        <span
                          style={{
                            fontFamily: "var(--font-dm-sans), sans-serif",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "var(--gold)",
                          }}
                        >
                          {course.rating}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0.45,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "32px",
            background: "var(--text-muted)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-text {
            text-align: left !important;
          }
          .hero-text h2,
          .hero-text p {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .hero-text > div:first-child {
            justify-content: flex-start !important;
          }
          .hero-text > div:last-child {
            justify-content: flex-start !important;
          }
          .hero-text > div.social-proof {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
