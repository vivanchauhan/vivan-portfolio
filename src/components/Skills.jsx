import { useState } from "react";

const categories = [
  { title: "Languages", tags: ["JavaScript ES6+", "C++", "Python", "C"] },
  {
    title: "Frontend",
    tags: [
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    tags: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    tags: ["Git", "GitHub", "VS Code", "Figma", "Canva", "Cloudinary"],
  },
];

export default function Skills() {
  const [hovered, setHovered] = useState(null);
  return (
    <section
      id="skills"
      style={{
        padding: "clamp(60px,8vw,120px) clamp(20px,5vw,48px)",
        background: "#080808",
      }}
    >
      <div className="section-label">02 — Skills</div>
      <div className="section-title reveal">
        THE
        <br />
        ARSENAL
      </div>
      <div
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: 2,
          transitionDelay: "0.1s",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.title}
            style={{
              background: "#141414",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "clamp(20px,3vw,32px)",
              transition: "border-color 0.3s, transform 0.3s",
              transform:
                hovered === cat.title ? "translateY(-4px)" : "translateY(0)",
              borderColor:
                hovered === cat.title
                  ? "rgba(255,107,43,0.3)"
                  : "rgba(255,255,255,0.07)",
            }}
            onMouseEnter={() => setHovered(cat.title)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: "#FF6B2B",
                letterSpacing: 3,
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              {cat.title}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {cat.tags.map((tag) => (
                <span
                  key={tag}
                  className="skill-tag"
                  style={{
                    fontSize: 12,
                    padding: "6px 12px",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 2,
                    color: "rgba(240,237,232,0.7)",
                    cursor: "default",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "#FF6B2B";
                    e.target.style.color = "#FF6B2B";
                    e.target.style.background = "rgba(255,107,43,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.07)";
                    e.target.style.color = "rgba(240,237,232,0.7)";
                    e.target.style.background = "transparent";
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
