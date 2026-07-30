/* ────────────────────────────────────────────────────────────
   The Clubhouse 100 — Top 10, as a manual tournament scoreboard.
   Static: no animation, no DB. Update COURSES by hand as the
   rankings change.  Each course:
     rank  – shown in the Pos column (1 = leader)
     name, loc
     score – rating out of 10 (two decimals), shown as tiles
     access – "public" or "private" (shown as a tag on the name plate)
   ──────────────────────────────────────────────────────────── */
type Course = {
  name: string;
  loc: string;
  score: number;
  access: "public" | "private";
};

// The current Clubhouse Top 100 — top 10. Update by hand as it changes.
const COURSES: Course[] = [
  { name: "Punta Espada Golf Club", loc: "Punta Cana, La Altagracia", score: 9.23, access: "public" },
  { name: "Quintero Golf and Country Club", loc: "Peoria, Arizona", score: 9.22, access: "public" },
  { name: "Congaree", loc: "Ridgeland, South Carolina", score: 9.10, access: "private" },
  { name: "Lost Rail Golf Club", loc: "Gretna, Nebraska", score: 9.08, access: "private" },
  { name: "Seminole Golf Club", loc: "Juno Beach, Florida", score: 9.04, access: "private" },
  { name: "Pinehurst CC – No. 2", loc: "Pinehurst, North Carolina", score: 9.04, access: "public" },
  { name: "Oakmont Country Club", loc: "Oakmont, Pennsylvania", score: 9.03, access: "private" },
  { name: "Pebble Beach Golf Links", loc: "Pebble Beach, California", score: 9.02, access: "public" },
  { name: "Pine Valley Golf Club", loc: "Pine Valley, New Jersey", score: 9.01, access: "private" },
  { name: "Kinloch Golf Club", loc: "Manakin-Sabot, Virginia", score: 9.01, access: "private" },
];

function Digits({ score }: { score: number }) {
  return (
    <>
      {score.toFixed(2).split("").map((ch, i) =>
        ch === "." ? (
          <span key={i} className="lb-digit lb-dot">.</span>
        ) : (
          <span key={i} className="lb-digit">{ch}</span>
        )
      )}
    </>
  );
}

export default function Leaderboard() {
  return (
    <section id="clubhouse-100" className="lb-scene">
      <div className="lb-intro">
        <span className="lb-kick">The Clubhouse 100</span>
        <h2 className="lb-h2">The leaderboard, for courses.</h2>
        <p className="lb-sub">
          A community ranking of every course, built by golfers — not editors.
          Here&apos;s the current top 10.
        </p>
      </div>

      <div className="lb-frame">
        <div className="lb-board">
          <div className="lb-crown">
            <div className="lb-lbl">Clubhouse 100</div>
            <div className="lb-title">LEADERS</div>
          </div>
          <div className="lb-ghead">
            <div>Pos</div>
            <div>Course</div>
            <div className="lb-r">Rating</div>
          </div>
          <div className="lb-body">
            {COURSES.map((c, i) => (
              <div
                key={c.name}
                className={`lb-row${i === 0 ? " lb-lead" : ""}${i < 3 ? " lb-t3" : ""}`}
              >
                <div className="lb-pos"><b>{i + 1}</b></div>
                <div className="lb-name">
                  <div className="lb-plate">
                    <div className="lb-cn">
                      {c.name}
                      <span className={`lb-badge ${c.access === "public" ? "lb-pub" : "lb-priv"}`}>
                        {c.access === "public" ? "Public" : "Private"}
                      </span>
                    </div>
                    {c.loc && <div className="lb-lo">{c.loc}</div>}
                  </div>
                </div>
                <div className="lb-rating"><Digits score={c.score} /></div>
              </div>
            ))}
          </div>
          <div className="lb-foot">
            <span>Ranked by community rating</span>
            <span>Top 10 · The Clubhouse 100</span>
          </div>
        </div>
        <div className="lb-posts"><span /><span /></div>
      </div>

      <style>{`
        .lb-scene {
          background:
            radial-gradient(120% 80% at 50% -10%, rgba(93,158,115,0.10), transparent 60%),
            var(--green-900);
          padding: 100px 20px 90px;
        }
        .lb-intro { text-align: center; max-width: 640px; margin: 0 auto 34px; }
        .lb-kick { font-family: ui-monospace, Menlo, monospace; font-size: 12px; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--gold); }
        .lb-h2 { font-family: var(--font-playfair), Georgia, serif; font-weight: 800; color: var(--bg);
          font-size: clamp(30px, 4.5vw, 48px); letter-spacing: -0.02em; line-height: 1.08; margin: 12px 0 0; }
        .lb-sub { font-family: var(--font-dm-sans), sans-serif; color: rgba(250,247,242,0.62);
          font-size: 17px; line-height: 1.6; margin: 14px auto 0; max-width: 50ch; }

        .lb-frame { max-width: 780px; margin: 0 auto; }
        .lb-board { background: #F1EEE4; border: 2px solid #15150F; border-radius: 14px 14px 6px 6px;
          overflow: hidden; box-shadow: 0 26px 55px rgba(0,0,0,0.4), inset 0 0 0 6px #F1EEE4, inset 0 0 0 7px #D8D3C4;
          position: relative; z-index: 2; }
        .lb-crown { text-align: center; padding: 20px 16px 12px; border-bottom: 2px solid #15150F;
          border-radius: 120px 120px 0 0 / 42px 42px 0 0; }
        .lb-lbl { font-family: ui-monospace, Menlo, monospace; font-size: 11px; letter-spacing: 0.34em;
          color: #1C6B39; font-weight: 700; }
        .lb-title { font-family: "Times New Roman", Georgia, serif; font-weight: 800; letter-spacing: 0.06em;
          font-size: clamp(30px, 5vw, 46px); color: #15150F; margin-top: 2px; }

        .lb-ghead { display: grid; grid-template-columns: 56px 1fr 128px; border-bottom: 2px solid #15150F; }
        .lb-ghead > div { padding: 9px 10px; font-family: ui-monospace, Menlo, monospace; font-size: 10.5px;
          letter-spacing: 0.14em; text-transform: uppercase; color: #4a473c; border-left: 1.5px solid #15150F; }
        .lb-ghead > div:first-child { border-left: none; text-align: center; }
        .lb-r { text-align: center; }

        .lb-row { display: grid; grid-template-columns: 56px 1fr 128px; align-items: stretch;
          border-bottom: 1.5px solid #15150F; background: #F1EEE4; }
        .lb-row:last-child { border-bottom: none; }
        .lb-row > div { border-left: 1.5px solid #15150F; display: flex; align-items: center; }
        .lb-row > div:first-child { border-left: none; }

        .lb-pos { justify-content: center; }
        .lb-pos b { font-family: ui-monospace, Menlo, monospace; font-weight: 700; font-size: 20px; color: #15150F;
          width: 34px; height: 38px; display: flex; align-items: center; justify-content: center; }
        .lb-t3 .lb-pos b { color: #C31F2B; }

        .lb-name { padding: 0 4px; }
        .lb-plate { background: #E7E2D2; border: 1px solid rgba(0,0,0,0.35); border-radius: 2px; margin: 6px 2px;
          padding: 9px 12px; width: 100%; box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -2px 3px rgba(0,0,0,0.10); }
        .lb-cn { font-family: "Times New Roman", Georgia, serif; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.03em; font-size: 15.5px; color: #17140D; line-height: 1.1; }
        .lb-lo { font-family: ui-monospace, Menlo, monospace; font-size: 10px; letter-spacing: 0.06em; color: #6a6656;
          margin-top: 3px; text-transform: uppercase; }
        .lb-badge { display: inline-block; font-family: ui-monospace, Menlo, monospace; font-size: 8.5px;
          letter-spacing: 0.06em; padding: 1px 4px; border: 1px solid; border-radius: 2px; margin-left: 6px;
          vertical-align: 1px; font-weight: 700; }
        .lb-pub { color: #1C6B39; border-color: #8bbf9c; }
        .lb-priv { color: #6a6656; border-color: #ccc6b5; }

        .lb-rating { justify-content: center; gap: 3px; padding: 6px; }
        .lb-digit { width: 24px; height: 40px; background: #F1EEE4; border: 1.5px solid #15150F; border-radius: 2px;
          display: flex; align-items: center; justify-content: center;
          font-family: ui-monospace, Menlo, monospace; font-weight: 700; font-size: 22px; color: #C31F2B; }
        .lb-dot { width: 12px; border: none; color: #15150F; align-items: flex-end; }
        .lb-row:not(.lb-t3) .lb-digit { color: #1C6B39; }

        .lb-foot { display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 11px 14px;
          border-top: 2px solid #15150F; font-family: ui-monospace, Menlo, monospace; font-size: 11px;
          letter-spacing: 0.06em; text-transform: uppercase; color: #4a473c; }

        .lb-posts { display: flex; justify-content: space-between; max-width: 640px; margin: -4px auto 0;
          padding: 0 44px; position: relative; z-index: 1; }
        .lb-posts span { width: 16px; height: 46px; background: var(--green-700); border: 2px solid rgba(0,0,0,0.3);
          border-top: none; border-radius: 0 0 3px 3px; }

        @media (max-width: 560px) {
          .lb-ghead, .lb-row { grid-template-columns: 40px 1fr 104px; }
          .lb-digit { width: 20px; height: 34px; font-size: 18px; }
          .lb-cn { font-size: 13.5px; }
        }
      `}</style>
    </section>
  );
}
