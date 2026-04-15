"use client";

import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--green-900)",
        padding: "60px 24px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap",
            marginBottom: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(250,247,242,0.08)",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: "280px" }}>
            <div style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                  border: "1px solid rgba(250,247,242,0.08)",
                }}
              >
                <Image
                  src="/assets/golf_emblem_black.png"
                  alt="The Clubhouse"
                  width={40}
                  height={40}
                  style={{ objectFit: "cover", width: "40px", height: "40px" }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--bg)",
                }}
              >
                The Clubhouse
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "14px",
                color: "rgba(250,247,242,0.45)",
                lineHeight: 1.65,
              }}
            >
              Your courses. Ranked.
              <br />
              The social app for golfers who care about the game.
            </p>
          </div>

          {/* Nav links */}
          <div
            style={{
              display: "flex",
              gap: "48px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "16px",
                }}
              >
                Product
              </div>
              {["Features", "How It Works", "Top 100", "Download"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  style={{
                    display: "block",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "14px",
                    color: "rgba(250,247,242,0.55)",
                    textDecoration: "none",
                    marginBottom: "10px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--bg)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(250,247,242,0.55)")
                  }
                >
                  {link}
                </a>
              ))}
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "16px",
                }}
              >
                Company
              </div>
              {[
                { label: "About", href: "/about" },
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
                { label: "Contact", href: "mailto:support@yourclubhouse.net?subject=Hello%20from%20The%20Clubhouse" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: "block",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "14px",
                    color: "rgba(250,247,242,0.55)",
                    textDecoration: "none",
                    marginBottom: "10px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--bg)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(250,247,242,0.55)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "13px",
              color: "rgba(250,247,242,0.3)",
            }}
          >
            &copy; {year} The Clubhouse. All rights reserved.
          </span>

          {/* Social links */}
          <div style={{ display: "flex", gap: "16px" }}>
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid rgba(250,247,242,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(250,247,242,0.4)",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(250,247,242,0.4)";
                el.style.color = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(250,247,242,0.12)";
                el.style.color = "rgba(250,247,242,0.4)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* X / Twitter */}
            <a
              href="#"
              aria-label="X (Twitter)"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid rgba(250,247,242,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(250,247,242,0.4)",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(250,247,242,0.4)";
                el.style.color = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(250,247,242,0.12)";
                el.style.color = "rgba(250,247,242,0.4)";
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
