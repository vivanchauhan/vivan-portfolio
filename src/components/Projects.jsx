import { useState, useEffect, useRef } from "react";

const projects = [
  {
    num: "01",
    name: "Hidden Gems App",
    desc: "Full-stack CRUD platform for discovering hidden local places. RESTful APIs with Express & MongoDB, multi-image upload via Cloudinary.",
    tags: ["MERN Stack", "Cloudinary", "REST API"],
    github: "https://github.com/vivanchauhan/hidden-gems-app",
    live: "https://hidden-gems-app-nine.vercel.app/",
  },
  {
    num: "02",
    name: "Weather App",
    desc: "Real-time weather dashboard fetching live data from OpenWeather API. Dynamic UI updates, search functionality, and full error handling.",
    tags: ["React", "OpenWeather API", "JavaScript"],
    github: "https://github.com/vivanchauhan/Weather-app",
    live: "https://weather-app-woad-one-20.vercel.app/",
  },
  {
    num: "03",
    name: "User Management App",
    desc: "React CRUD app with full routing and API integration. Add, edit, view, delete with skeleton loaders, dark mode, and reusable components.",
    tags: ["React", "REST APIs", "Dark Mode"],
    github: "https://github.com/vivanchauhan/User-Management-App",
    live: "https://user-management-app-red.vercel.app/",
  },
  {
    num: "04",
    name: "Simon Says Game",
    desc: "Interactive memory game with increasing difficulty. Dynamic pattern generation, input validation, game progression and responsive animated UI.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/vivanchauhan/Simon-says-Game-",
    live: "https://simon-says-game-pearl.vercel.app/",
  },
];

function getCardState(el) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight;
  const visiblePx = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
  const isVisible = visiblePx >= rect.height * 0.25;
  if (isVisible) return "in";
  if (rect.top >= vh) return "left";
  return "right";
}

function ProjectItem({ p, i }) {
  const ref = useRef(null);
  const [pos, setPos] = useState("left");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setPos(getCardState(el));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const transform =
    pos === "in"
      ? "translateX(0)"
      : pos === "left"
        ? "translateX(-120px)"
        : "translateX(120px)";

  return (
    <div
      ref={ref}
      style={{
        opacity: pos === "in" ? 1 : 0,
        transform,
        transition: `opacity 0.65s ease ${i * 0.08}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s`,
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "grid",
          /* Desktop: num | info | links — Mobile: stacked */
          gridTemplateColumns: "clamp(48px,6vw,80px) 1fr",
          gridTemplateRows: "auto auto",
          alignItems: "start",
          gap: "clamp(16px,3vw,40px)",
          padding: "clamp(20px,3.5vw,36px) clamp(16px,3vw,40px)",
          background: hovered ? "rgba(255,107,43,0.04)" : "#141414",
          border: "1px solid rgba(255,255,255,0.07)",
          borderLeft: hovered ? "3px solid #FF6B2B" : "3px solid transparent",
          position: "relative",
          overflow: "hidden",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
          transition: "background 0.3s, border-color 0.3s, transform 0.3s ease",
          cursor: "default",
          marginBottom: 34,
        }}
      >
        {/* Number */}
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(28px,4vw,36px)",
            color: hovered ? "#FF6B2B" : "rgba(255,255,255,0.08)",
            letterSpacing: -1,
            transition: "color 0.3s",
            lineHeight: 1,
            paddingTop: 4,
          }}
        >
          {p.num}
        </div>

        {/* Info + Links */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 8,
            }}
          >
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(20px,3vw,28px)",
                letterSpacing: 1,
                color: hovered ? "#FF6B2B" : "#f0ede8",
                transition: "color 0.3s",
              }}
            >
              {p.name}
            </div>

            {/* Links — inline on desktop, wraps on mobile */}
            <div style={{ display: "flex", gap: 16, flexShrink: 0 }}>
              {[
                { label: "GitHub", href: p.github },
                { label: "Live", href: p.live },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: 11,
                    color: "#5a5a5a",
                    textDecoration: "none",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#FF6B2B")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#5a5a5a")
                  }
                >
                  {l.label} <span style={{ fontSize: 14 }}>↗</span>
                </a>
              ))}
            </div>
          </div>

          <div style={{ fontSize: 13, color: "#5a5a5a", lineHeight: 1.6 }}>
            {p.desc}
          </div>
          <div
            style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}
          >
            {p.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: "#FF6B2B",
                  border: "1px solid rgba(255,107,43,0.2)",
                  padding: "3px 8px",
                  borderRadius: 2,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "clamp(60px,8vw,120px) clamp(20px,5vw,48px) 400px",
        background: "#0f0f0f",
      }}
    >
      <div className="section-label">03 — Projects</div>
      <div className="section-title reveal">
        SELECTED
        <br />
        WORK
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {projects.map((p, i) => (
          <ProjectItem key={p.num} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
