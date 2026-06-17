import type { Metadata } from 'next';

type Props = { params: Promise<{ username: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username: raw } = await params;
  const username = decodeURIComponent(raw);
  return {
    title: `@${username} on Your Clubhouse`,
    description: `Track every round, rank every course. Open @${username}'s ranked golf course list on Your Clubhouse.`,
    openGraph: {
      title: `@${username} on Your Clubhouse`,
      description: `Track every round. Rank every course. Open in the app.`,
      type: 'profile',
    },
  };
}

const APP_STORE_URL = 'https://apps.apple.com/us/app/your-clubhouse/id6776061991';

export default async function UserProfilePage({ params }: Props) {
  const { username: raw } = await params;
  const username = decodeURIComponent(raw);

  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at 50% 30%, #103221 0%, #0A1F14 60%, #06150D 100%)',
        color: '#FAF7F2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 20px',
        fontFamily: 'Georgia, "Times New Roman", serif',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 420 }}>
        <div
          style={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: 11,
            color: '#C9A84C',
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          Your Clubhouse
        </div>

        <h1
          style={{
            fontSize: 42,
            fontWeight: 800,
            margin: '0 0 12px',
            letterSpacing: -1,
            lineHeight: 1.1,
          }}
        >
          @{username}
        </h1>

        <p
          style={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: 16,
            color: 'rgba(250,247,242,0.65)',
            margin: '0 0 32px',
            lineHeight: 1.5,
          }}
        >
          Open in Your Clubhouse to see their ranked courses and
          follow them.
        </p>

        <a
          href={APP_STORE_URL}
          style={{
            display: 'inline-block',
            background: '#FAF7F2',
            color: '#1A1A1A',
            textDecoration: 'none',
            padding: '14px 28px',
            borderRadius: 14,
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: 0.2,
          }}
        >
          Download on the App Store
        </a>

        <div
          style={{
            marginTop: 24,
            width: 48,
            height: 2,
            background: '#C9A84C',
            margin: '24px auto',
            borderRadius: 1,
          }}
        />

        <div
          style={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: 12,
            color: 'rgba(250,247,242,0.4)',
            letterSpacing: 1.5,
            textTransform: 'uppercase',
          }}
        >
          Your courses. Ranked.
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var ua = navigator.userAgent || '';
              var isiOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
              if (!isiOS) return;
              var u = ${JSON.stringify(username)};
              var deepLink = 'yourclubhouse://u/' + encodeURIComponent(u) + '?follow=1';
              var fallback = setTimeout(function() {
                window.location.replace(${JSON.stringify(APP_STORE_URL)});
              }, 1500);
              window.addEventListener('pagehide', function() { clearTimeout(fallback); });
              window.location.href = deepLink;
            })();
          `,
        }}
      />
    </main>
  );
}
