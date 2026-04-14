"use client";

import Image from "next/image";

export default function Download() {
  return (
    <section
      id="download"
      style={{
        background: "var(--green-900)",
        padding: "100px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot texture */}
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

      <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Glowing logo medallion */}
        <div
          style={{
            marginBottom: "36px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 0 60px rgba(250,247,242,0.12), 0 0 120px rgba(42,92,64,0.4)",
              flexShrink: 0,
            }}
          >
            <Image
              src="/assets/golf_logo_C.png"
              alt="The Clubhouse"
              width={160}
              height={160}
              style={{
                objectFit: "cover",
                width: "160px",
                height: "160px",
                mixBlendMode: "screen",
              }}
            />
          </div>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 800,
            color: "var(--bg)",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Start your ranking.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "19px",
            color: "rgba(250,247,242,0.65)",
            lineHeight: 1.65,
            marginBottom: "40px",
          }}
        >
          Download The Clubhouse. Log your first round. Rank your first course.
          See where it lands.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "32px",
          }}
        >
          {/* iOS */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              color: "var(--green-900)",
              background: "var(--bg)",
              padding: "15px 32px",
              borderRadius: "10px",
              textDecoration: "none",
              boxShadow: "0 2px 16px rgba(0,0,0,0.35)",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--green-50)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--bg)";
              el.style.transform = "translateY(0)";
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download for iOS
          </a>

          {/* Android */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              color: "var(--bg)",
              background: "transparent",
              padding: "14px 32px",
              borderRadius: "10px",
              textDecoration: "none",
              border: "2px solid rgba(250,247,242,0.35)",
              transition: "border-color 0.2s, background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(250,247,242,0.7)";
              el.style.background = "rgba(250,247,242,0.06)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(250,247,242,0.35)";
              el.style.background = "transparent";
              el.style.transform = "translateY(0)";
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.064.612.019.898-.162L16.766 16.3l-3.222-3.244z"/>
            </svg>
            Get on Android
          </a>
        </div>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "13px",
            color: "rgba(250,247,242,0.3)",
          }}
        >
          Free to download. No credit card required.
        </p>
      </div>
    </section>
  );
}
