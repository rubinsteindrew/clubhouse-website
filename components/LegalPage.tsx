"use client";

import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

type Props = {
  eyebrow: string;
  title: string;
  updated?: string;
  children: ReactNode;
};

export default function LegalPage({ eyebrow, title, updated, children }: Props) {
  return (
    <>
      <Nav />
      <main
        style={{
          background: "var(--bg)",
          paddingTop: "140px",
          paddingBottom: "100px",
          paddingLeft: "24px",
          paddingRight: "24px",
          minHeight: "70vh",
        }}
      >
        <article
          style={{
            maxWidth: "740px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--green-400)",
              marginBottom: "12px",
            }}
          >
            {eyebrow}
          </p>

          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(36px, 6vw, 60px)",
              fontWeight: 800,
              color: "var(--green-800)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: updated ? "16px" : "40px",
            }}
          >
            {title}
          </h1>

          {updated && (
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "14px",
                color: "var(--text-muted)",
                marginBottom: "48px",
              }}
            >
              Last updated: {updated}
            </p>
          )}

          <div
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "16px",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
            }}
            className="legal-body"
          >
            {children}
          </div>
        </article>
      </main>
      <Footer />

      <style>{`
        .legal-body h2 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 26px;
          font-weight: 700;
          color: var(--green-800);
          margin-top: 48px;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }
        .legal-body h2:first-child { margin-top: 0; }
        .legal-body h3 {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: var(--green-800);
          margin-top: 28px;
          margin-bottom: 10px;
        }
        .legal-body p {
          margin-bottom: 18px;
        }
        .legal-body ul {
          margin-bottom: 18px;
          padding-left: 22px;
        }
        .legal-body li {
          margin-bottom: 8px;
        }
        .legal-body a {
          color: var(--green-600);
          text-decoration: underline;
          text-decoration-color: var(--green-200);
          text-underline-offset: 3px;
        }
        .legal-body a:hover {
          text-decoration-color: var(--green-600);
        }
        .legal-body strong {
          color: var(--green-800);
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
