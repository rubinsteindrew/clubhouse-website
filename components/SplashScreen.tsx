"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"splash" | "fading" | "done">("splash");

  useEffect(() => {
    // Show splash on every fresh page load of the homepage
    const hold = setTimeout(() => setPhase("fading"), 2200);
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
          {/* Decorative concentric rings */}
          <div
            style={{
              position: "absolute",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              border: "1px solid rgba(201,168,76,0.08)",
              animation: "splash-ring 3s ease-out both",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              border: "1px solid rgba(201,168,76,0.12)",
              animation: "splash-ring 3s ease-out 0.15s both",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              border: "1px solid rgba(201,168,76,0.18)",
              animation: "splash-ring 3s ease-out 0.3s both",
            }}
          />

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
            {/* Logo — large with glow */}
            <div
              style={{
                animation: "splash-logo 0.8s cubic-bezier(0.34,1.56,0.64,1) both",
                position: "relative",
              }}
            >
              {/* Glow behind logo */}
              <div
                style={{
                  position: "absolute",
                  inset: "-40px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
                  animation: "splash-glow 2s ease-in-out 0.6s both",
                }}
              />
              <Image
                src="/assets/Cream_Logo_Trans.png"
                alt="The Clubhouse"
                width={160}
                height={160}
                priority
                style={{
                  objectFit: "contain",
                  width: "160px",
                  height: "160px",
                  position: "relative",
                  zIndex: 1,
                  filter: "drop-shadow(0 0 40px rgba(201,168,76,0.2))",
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
                The Clubhouse
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
        @keyframes splash-logo {
          0% {
            opacity: 0;
            transform: scale(0.6) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
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
        @keyframes splash-ring {
          0% {
            opacity: 0;
            transform: scale(0.7);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes splash-glow {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
