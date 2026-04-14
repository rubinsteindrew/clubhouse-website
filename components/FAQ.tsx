"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is it free?",
    a: "Yes — free to download on iOS and Android. Core features including logging, ranking, the social feed, and messaging are all free.",
  },
  {
    q: "Do I need a handicap or GHIN account?",
    a: "No. The Clubhouse is not a handicap app. There is no GHIN integration required. You log courses and rank them — that's it.",
  },
  {
    q: "Does it work for international courses?",
    a: "We're actively expanding international support. US courses are fully covered, and many international courses are already available via Google Places. More countries are being added — if your country isn't supported yet, it's on the list.",
  },
  {
    q: "Can I make my rounds private?",
    a: "Yes. Every round has its own visibility setting: Friends only, Global (visible to everyone in the app), or Private (just you). You control what's shared.",
  },
  {
    q: "What happens to my data if I stop using the app?",
    a: "Your rankings and data are yours. You can export or delete your account at any time from within the app.",
  },
  {
    q: "Is it available on Android?",
    a: "An Android version is in development. Sign up for early access and we'll notify you when it launches.",
  },
  {
    q: "How is this different from 18Birdies or GolfNow?",
    a: "Those apps focus on booking tee times and tracking handicaps. The Clubhouse is about your personal ranking and social sharing — not scorecards or booking. Different use case entirely.",
  },
  {
    q: "How does the ranking system work exactly?",
    a: "You pick a sentiment tier (Spectacular, Ok, or Not a Fan) then answer a series of head-to-head comparisons — which do you prefer, Course A or Course B? After a few comparisons (roughly log₂ of your list size), the app slots the new course into its exact position and assigns a precise decimal rating like 8.75/10.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        background: "var(--elevated)",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
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
          FAQ
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
            marginBottom: "60px",
          }}
        >
          Questions, answered.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid var(--border)",
                ...(i === faqs.length - 1 ? { borderBottom: "1px solid var(--border)" } : {}),
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "22px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "var(--green-800)",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    flexShrink: 0,
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: open === i ? "var(--green-600)" : "var(--surface)",
                    border: `1.5px solid ${open === i ? "var(--green-600)" : "var(--border)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: open === i ? "var(--bg)" : "var(--green-600)",
                    transition: "all 0.2s",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  >
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </span>
              </button>

              {open === i && (
                <div
                  style={{
                    paddingBottom: "24px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "16px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      maxWidth: "620px",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
