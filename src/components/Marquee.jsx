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
  const doubled = [...items, ...items];
  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "18px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 60,
          animation: "marquee 25s linear infinite",
          whiteSpace: "nowrap",
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 14,
              letterSpacing: 4,
              color: "#5a5a5a",
              display: "flex",
              alignItems: "center",
              gap: 60,
            }}
          >
            {item}
            {i < doubled.length - 1 && (
              <span style={{ color: "#FF6B2B", fontSize: 18 }}>·</span>
            )}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
