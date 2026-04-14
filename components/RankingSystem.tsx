"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Cypress Point is the course being added.
// Wins against Pinehurst and Merion, loses to Pebble → slots into high 9s.
const comparisons = [
  { courseA: "Cypress Point", courseB: "Pinehurst No. 2", pick: "a" },
  { courseA: "Cypress Point", courseB: "Merion",           pick: "a" },
  { courseA: "Cypress Point", courseB: "Pine Valley",      pick: "b" },
];

// phase "asking"  — question shown, no winner yet
// phase "answered" — winner highlighted, loser dimmed
type Phase = "asking" | "answered";

export default function RankingSystem() {
  const [step, setStep]       = useState(0);
  const [phase, setPhase]     = useState<Phase>("asking");
  const [visible, setVisible] = useState(true);   // drives fade-in/out
  const [done, setDone]       = useState(false);

  // asking → answered after 1.8 s
  useEffect(() => {
    if (done || phase !== "asking") return;
    const t = setTimeout(() => setPhase("answered"), 1800);
    return () => clearTimeout(t);
  }, [step, phase, done]);

  // answered → next question (or done) after 1.4 s
  useEffect(() => {
    if (done || phase !== "answered") return;
    const t = setTimeout(() => {
      // fade out
      setVisible(false);
      const advance = setTimeout(() => {
        if (step >= comparisons.length - 1) {
          setDone(true);
        } else {
          setStep((s) => s + 1);
          setPhase("asking");
        }
        setVisible(true);  // fade back in
      }, 350);
      return () => clearTimeout(advance);
    }, 1400);
    return () => clearTimeout(t);
  }, [step, phase, done]);

  // result shown → restart loop after 4 s
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => {
      setVisible(false);
      const restart = setTimeout(() => {
        setStep(0);
        setPhase("asking");
        setDone(false);
        setVisible(true);
      }, 350);
      return () => clearTimeout(restart);
    }, 4000);
    return () => clearTimeout(t);
  }, [done]);

  const current = comparisons[step];
  const aWins = phase === "answered" && current.pick === "a";
  const bWins = phase === "answered" && current.pick === "b";

  return (
    <section
      id="how-it-works"
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

      {/* Watermark logo */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-40px",
          right: "-40px",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/assets/Green_Logo_Trans.png"
          alt=""
          width={320}
          height={320}
          style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
        />
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "64px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="ranking-grid"
      >
        {/* Text */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "16px",
            }}
          >
            The Ranking System
          </p>

          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(30px, 4.5vw, 52px)",
              fontWeight: 800,
              color: "var(--bg)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              marginBottom: "24px",
            }}
          >
            Not scores. Not stars.
            <br />
            <span style={{ color: "var(--gold)" }}>Head-to-head comparisons.</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "18px",
              color: "rgba(250,247,242,0.75)",
              lineHeight: 1.7,
              maxWidth: "480px",
              marginBottom: "32px",
            }}
          >
            Humans are bad at absolute ratings — is this a 7 or an 8? But we&apos;re
            excellent at relative comparisons. The Clubhouse asks one question at a time:{" "}
            <em style={{ color: "var(--bg)", fontStyle: "italic" }}>
              which do you prefer?
            </em>{" "}
            Then it slots each course into your definitive personal ranking, precise to
            the hundredth.
          </p>

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              {
                num: "01",
                title: "Pick a sentiment",
                desc: "Spectacular, Ok, or Not a Fan — sets the rating tier.",
              },
              {
                num: "02",
                title: "Answer comparisons",
                desc: "A handful of head-to-head questions. No numbers needed.",
              },
              {
                num: "03",
                title: "Get a precise rating",
                desc: "Every course lands at exactly the right spot — e.g. 9.82 / 10.",
              },
            ].map((s) => (
              <div key={s.num} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "var(--gold)",
                    minWidth: "28px",
                    paddingTop: "2px",
                  }}
                >
                  {s.num}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "var(--bg)",
                      marginBottom: "2px",
                    }}
                  >
                    {s.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "14px",
                      color: "rgba(250,247,242,0.6)",
                    }}
                  >
                    {s.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive comparison card */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              background: "var(--surface)",
              borderRadius: "24px",
              padding: "32px",
              width: "100%",
              maxWidth: "420px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
            }}
          >
            {/* Fade wrapper — opacity + slight lift on enter/exit */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
            >
            {!done ? (
              <>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                >
                  Which do you prefer?
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {/* Course A */}
                  <div
                    style={{
                      padding: "18px 20px",
                      borderRadius: "12px",
                      border: `2px solid ${aWins ? "var(--green-500)" : "var(--border)"}`,
                      background: aWins ? "var(--green-50)" : "var(--elevated)",
                      opacity: bWins ? 0.38 : 1,
                      transition: "border-color 0.45s ease, background 0.45s ease, opacity 0.45s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "18px",
                            fontWeight: 700,
                            color: "var(--green-800)",
                          }}
                        >
                          {current.courseA}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-dm-sans), sans-serif",
                            fontSize: "12px",
                            color: "var(--text-muted)",
                            marginTop: "2px",
                          }}
                        >
                          Currently adding
                        </div>
                      </div>
                      {/* Winner checkmark */}
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          background: "var(--green-500)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: aWins ? 1 : 0,
                          transform: aWins ? "scale(1)" : "scale(0.4)",
                          transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* VS divider */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--text-muted)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      VS
                    </span>
                    <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
                  </div>

                  {/* Course B */}
                  <div
                    style={{
                      padding: "18px 20px",
                      borderRadius: "12px",
                      border: `2px solid ${bWins ? "var(--green-500)" : "var(--border)"}`,
                      background: bWins ? "var(--green-50)" : "var(--elevated)",
                      opacity: aWins ? 0.38 : 1,
                      transition: "border-color 0.45s ease, background 0.45s ease, opacity 0.45s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "18px",
                            fontWeight: 700,
                            color: "var(--green-800)",
                          }}
                        >
                          {current.courseB}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-dm-sans), sans-serif",
                            fontSize: "12px",
                            color: "var(--text-muted)",
                            marginTop: "2px",
                          }}
                        >
                          Already ranked
                        </div>
                      </div>
                      {/* Winner checkmark */}
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          background: "var(--green-500)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: bWins ? 1 : 0,
                          transform: bWins ? "scale(1)" : "scale(0.4)",
                          transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress dots */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "6px",
                    marginTop: "20px",
                  }}
                >
                  {comparisons.map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: i === step ? "20px" : "6px",
                        height: "6px",
                        borderRadius: "3px",
                        background:
                          i < step
                            ? "var(--green-400)"
                            : i === step
                            ? "var(--green-600)"
                            : "var(--border)",
                        transition: "width 0.4s cubic-bezier(0.4,0,0.2,1), background 0.4s ease",
                      }}
                    />
                  ))}
                </div>
              </>
            ) : (
              /* Result card */
              <div style={{ textAlign: "center", padding: "8px 0" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "var(--green-50)",
                    border: "2px solid var(--green-200)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "var(--green-800)",
                    marginBottom: "6px",
                  }}
                >
                  Cypress Point
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "52px",
                    fontWeight: 800,
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  9.92
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    marginBottom: "20px",
                  }}
                >
                  ranked #2 in your list
                </div>

                <div
                  style={{
                    display: "inline-block",
                    padding: "6px 14px",
                    borderRadius: "100px",
                    background: "var(--green-50)",
                    border: "1px solid var(--green-100)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--green-600)",
                  }}
                >
                  Spectacular
                </div>
              </div>
            )}
            </div>{/* end fade wrapper */}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .ranking-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
