"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"splash" | "fading" | "done">("splash");

  useEffect(() => {
    // Only show on first visit this session
    if (sessionStorage.getItem("splash-shown")) {
      setPhase("done");
      return;
    }

    // Hold the splash for 1.6s, then start the fade
    const hold = setTimeout(() => {
      setPhase("fading");
      sessionStorage.setItem("splash-shown", "1");
    }, 1600);

    return () => clearTimeout(hold);
  }, []);

  useEffect(() => {
    if (phase !== "fading") return;
    // After the fade-out transition completes, remove the overlay entirely
    const fade = setTimeout(() => setPhase("done"), 700);
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
            background: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: phase === "fading" ? 0 : 1,
            transition: "opacity 0.7s ease",
            pointerEvents: phase === "fading" ? "none" : "auto",
          }}
        >
          {/* Logo — fades in with a subtle scale */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              animation: "splash-enter 0.6s ease-out both",
            }}
          >
            <Image
              src="/assets/Green_Logo_Trans.png"
              alt="The Clubhouse"
              width={100}
              height={100}
              priority
              style={{ objectFit: "contain", width: "100px", height: "100px" }}
            />
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "28px",
                fontWeight: 800,
                color: "#163220",
                letterSpacing: "-0.02em",
              }}
            >
              The Clubhouse
            </span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes splash-enter {
          0% {
            opacity: 0;
            transform: scale(0.92);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
