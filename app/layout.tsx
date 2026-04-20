import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yourclubhouse.net"),
  title: "The Clubhouse — Your Courses. Ranked.",
  description:
    "The Clubhouse is a social app for golfers to log every round, rank every course, and share with friends. Binary-comparison rankings, two Top 100 lists, social feed, and messaging.",
  keywords: [
    "golf app",
    "golf course tracker",
    "rank golf courses",
    "golf social app",
    "golf course ranking",
    "Beli for golf",
  ],
  openGraph: {
    type: "website",
    title: "The Clubhouse — Your Courses. Ranked.",
    description:
      "Log every round. Rank every course. Share the rounds that mattered.",
    siteName: "The Clubhouse",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Clubhouse — Your Courses. Ranked.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Clubhouse — Your Courses. Ranked.",
    description:
      "Log every round. Rank every course. Share the rounds that mattered.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
      style={{ fontFamily: "var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif" }}
    >
      <body className="flex flex-col antialiased">{children}</body>
    </html>
  );
}
