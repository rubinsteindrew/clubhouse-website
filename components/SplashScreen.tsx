"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"splash" | "fading" | "done">("splash");

  useEffect(() => {
    // Show splash on every fresh page load of the homepage
    const hold = setTimeout(() => setPhase("fading"), 2600);
    return () => clearTimeout(hold);
  }, []);

  useEffect(() => {
    if (phase !== "fading") return;
    const fade = setTimeout(() => setPhase("done"), 900);
    return () => clearTimeout(fade);
  }, [phase]);

  return (
    <>
      {children}

      {phase !== "done" && (
        <div
          aria-hidden
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "var(--green-900, #0A1F14)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: phase === "fading" ? 0 : 1,
            transform: phase === "fading" ? "scale(1.04)" : "scale(1)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
            pointerEvents: phase === "fading" ? "none" : "auto",
            overflow: "hidden",
          }}
        >
          {/* Center content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "28px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Logo — pieces assemble (ring from left, green from bottom),
                then the ball flies in from the right and bounces onto the green */}
            <div
              style={{
                position: "relative",
                width: "160px",
                height: "160px",
              }}
            >
              {/* C-ring — slides in from the left */}
              <Image
                src="/assets/logo_main.png"
                alt=""
                width={320}
                height={320}
                priority
                unoptimized
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 24px rgba(201,168,76,0.18))",
                  animation: "splash-ring-in 0.65s cubic-bezier(0.22,1,0.36,1) 0.05s both",
                }}
              />

              {/* Green + flag — rises into place from the bottom */}
              <Image
                src="/assets/logo_swoosh.png"
                alt=""
                width={320}
                height={320}
                priority
                unoptimized
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 24px rgba(201,168,76,0.18))",
                  animation: "splash-green-in 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both",
                }}
              />

              {/* Ball — flies in from the right and bounces onto the green */}
              <Image
                src="/assets/logo_ball.png"
                alt="Your Clubhouse"
                width={320}
                height={320}
                priority
                unoptimized
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 16px rgba(201,168,76,0.25))",
                  animation: "splash-ball-in 0.95s 0.85s both",
                }}
              />
            </div>

            {/* Wordmark */}
            <div
              style={{
                animation: "splash-text 0.7s ease-out 0.3s both",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(32px, 7vw, 48px)",
                  fontWeight: 800,
                  color: "#FAF7F2",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Your Clubhouse
              </div>

              {/* Gold divider */}
              <div
                style={{
                  width: "48px",
                  height: "2px",
                  background: "var(--gold, #C9A84C)",
                  borderRadius: "1px",
                  margin: "18px auto 14px",
                  animation: "splash-line 0.6s ease-out 0.7s both",
                }}
              />

              {/* Tagline */}
              <div
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "clamp(14px, 3vw, 17px)",
                  fontWeight: 400,
                  color: "rgba(250,247,242,0.5)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Your courses. Ranked.
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes splash-ring-in {
          0% {
            opacity: 0;
            transform: translateX(-120px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes splash-green-in {
          0% {
            opacity: 0;
            transform: translateY(110px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes splash-ball-in {
          0% {
            opacity: 0;
            transform: translate(360px, -150px);
            animation-timing-function: ease-in;
          }
          18% {
            opacity: 1;
          }
          46% {
            transform: translate(0, 14px);
            animation-timing-function: ease-out;
          }
          62% {
            transform: translate(0, -22px);
            animation-timing-function: ease-in;
          }
          76% {
            transform: translate(0, 9px);
            animation-timing-function: ease-out;
          }
          88% {
            transform: translate(0, -5px);
            animation-timing-function: ease-in;
          }
          100% {
            transform: translate(0, 0);
          }
        }
        @keyframes splash-text {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes splash-line {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 48px;
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
