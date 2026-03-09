const achievements = [
  {
    icon: "🏆",
    title: "Flipkart GRID 5.0 — Round 2",
    desc: "Advanced to the 2nd round among 20,000+ students nationwide in one of India's most competitive engineering challenges.",
  },
  {
    icon: "🥇",
    title: "BVP Hack 5.0 — Top 18",
    desc: "Ranked among the top 18 teams out of 70+ participating teams in the BVP Hackathon.",
  },
  {
    icon: "⚡",
    title: "GFG Coding Contest — Rank 12",
    desc: "Secured 12th rank in GeeksforGeeks Student Chapter Coding Contest among 60+ participants.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{
        padding: "clamp(60px,8vw,120px) clamp(20px,5vw,48px)",
        background: "#080808",
      }}
    >
      <div className="section-label">04 — Achievements</div>
      <div className="section-title reveal">
        WINS &<br />
        MILESTONES
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: 2,
        }}
      >
        {achievements.map((a, i) => (
          <div
            key={a.title}
            className="achievement-card reveal"
            style={{
              background: "#141414",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "clamp(24px,4vw,40px) clamp(20px,3vw,32px)",
              transition: "border-color 0.3s",
              transitionDelay: `${i * 0.1}s`,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,107,43,0.3)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")
            }
          >
            <div style={{ fontSize: 28, marginBottom: 20 }}>{a.icon}</div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 10,
                lineHeight: 1.4,
              }}
            >
              {a.title}
            </div>
            <div style={{ fontSize: 13, color: "#5a5a5a", lineHeight: 1.6 }}>
              {a.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
