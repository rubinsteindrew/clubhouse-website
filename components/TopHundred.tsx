"use client";

export default function TopHundred() {
  return (
    <section
      id="top-100"
      style={{
        background: "var(--green-900)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          border: "1px solid rgba(201,168,76,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-160px",
          right: "-160px",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          border: "1px solid rgba(201,168,76,0.06)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
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
          Top 100
        </p>

        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(30px, 4.5vw, 52px)",
            fontWeight: 800,
            color: "var(--bg)",
            textAlign: "center",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Chase the classics.
          <br />
          <span style={{ color: "var(--gold)" }}>Build the new canon.</span>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "18px",
            color: "rgba(250,247,242,0.65)",
            textAlign: "center",
            maxWidth: "520px",
            margin: "0 auto 72px",
            lineHeight: 1.65,
          }}
        >
          The Clubhouse gives you two lists to benchmark against — a storied institution
          and a living, breathing community ranking.
        </p>

        {/* Two columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px",
          }}
          className="top100-grid"
        >
          {/* Golf Digest */}
          <div
            style={{
              background: "rgba(250,247,242,0.05)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "20px",
              padding: "40px 36px",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.background = "rgba(201,168,76,0.08)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.background = "rgba(250,247,242,0.05)";
              el.style.transform = "translateY(0)";
            }}
          >
            {/* Gold badge */}
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: "var(--gold-dim)",
                border: "1.5px solid rgba(201,168,76,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--gold)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>

            <div
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: "100px",
                background: "var(--gold-dim)",
                border: "1px solid rgba(201,168,76,0.3)",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--gold)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Gold Badge
            </div>

            <h3
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "24px",
                fontWeight: 700,
                color: "var(--bg)",
                marginBottom: "12px",
                lineHeight: 1.3,
              }}
            >
              Golf Digest&apos;s<br />America&apos;s 100 Greatest
            </h3>

            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "15px",
                color: "rgba(250,247,242,0.6)",
                lineHeight: 1.65,
                marginBottom: "28px",
              }}
            >
              The definitive benchmark since 1966. Every course on Golf Digest&apos;s
              official list earns a gold badge in The Clubhouse. How many have you played?
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                borderRadius: "8px",
                background: "var(--gold-dim)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--gold)",
                }}
              >
                Gold badge on every Top 100 course you&apos;ve played
              </span>
            </div>
          </div>

          {/* Clubhouse Top 100 */}
          <div
            style={{
              background: "rgba(250,247,242,0.05)",
              border: "1px solid rgba(93,158,115,0.25)",
              borderRadius: "20px",
              padding: "40px 36px",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.background = "rgba(42,92,64,0.15)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.background = "rgba(250,247,242,0.05)";
              el.style.transform = "translateY(0)";
            }}
          >
            {/* Green badge */}
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: "rgba(42,92,64,0.25)",
                border: "1.5px solid rgba(93,158,115,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-300)">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>

            <div
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: "100px",
                background: "rgba(42,92,64,0.25)",
                border: "1px solid rgba(93,158,115,0.3)",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--green-200)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Green Badge
            </div>

            <h3
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "24px",
                fontWeight: 700,
                color: "var(--bg)",
                marginBottom: "12px",
                lineHeight: 1.3,
              }}
            >
              The Clubhouse<br />Top 100
            </h3>

            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "15px",
                color: "rgba(250,247,242,0.6)",
                lineHeight: 1.65,
                marginBottom: "28px",
              }}
            >
              A live, community-driven list that updates every time someone rates a course.
              Not curated by editors — built by golfers. The new canon, in real time.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--green-300)",
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "rgba(250,247,242,0.5)",
                }}
              >
                Updates live with every new rating
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @media (max-width: 640px) {
          .top100-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
