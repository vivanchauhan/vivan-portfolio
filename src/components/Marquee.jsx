const items = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "REST APIs",
  "Tailwind CSS",
  "JavaScript ES6+",
  "Git & GitHub",
  "Full Stack Dev",
];

export default function Marquee() {
  // Triple the items so there's always enough content to fill any screen width
  const tripled = [...items, ...items, ...items];

  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "18px 0",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          willChange: "transform",
          animation: "marquee 40s linear infinite",
        }}
      >
        {tripled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 14,
                letterSpacing: 3,
                color: "#5a5a5a",
                padding: "0 28px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: "#FF6B2B",
                fontSize: 16,
                flexShrink: 0,
                lineHeight: 1,
              }}
            >
              ·
            </span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
