const stats = [
  { num: "4+", label: "Projects Shipped" },
  { num: "3", label: "Certifications" },
  { num: "99.9%", label: "Deployment Uptime" },
  { num: "100+", label: "Github Commits" },
];

const certs = [
  {
    name: "Full Stack Web Development",
    org: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org/certificate/ea598becc7733b700e3e236aa839a24b",
  },
  {
    name: "Git Version Control",
    org: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org/certificate/30a4c26644f737d6da8c713444ccfb67",
  },
  {
    name: "JavaScript (Basic)",
    org: "HackerRank",
    link: "https://www.hackerrank.com/certificates/cc8bbe6b6da2",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "clamp(60px,8vw,120px) clamp(20px,5vw,48px)",
        background: "#0f0f0f",
      }}
    >
      <div className="section-label">01 — About</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "clamp(40px,6vw,80px)",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div className="reveal">
          <div className="section-title">
            THE
            <br />
            DEVELOPER
          </div>
          <p
            style={{
              fontSize: 16,
              color: "rgba(240,237,232,0.65)",
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 20,
            }}
          >
            I'm{" "}
            <strong style={{ color: "#FF6B2B", fontWeight: 500 }}>
              Vivan Chauhan
            </strong>{" "}
            , a Full-Stack Developer driven by high-stakes engineering and
            scalable architecture.
          </p>
          <p
            style={{
              fontSize: 16,
              color: "rgba(240,237,232,0.65)",
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 20,
            }}
          >
            I specialize in the{" "}
            <strong style={{ color: "#FF6B2B", fontWeight: 500 }}>
              MERN stack
            </strong>{" "}
            , building end-to-end applications that bridge the gap between
            complex backend logic and seamless frontend experiences. My approach
            is defined by a competitive edge
          </p>
          <p
            style={{
              fontSize: 16,
              color: "rgba(240,237,232,0.65)",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            I don't just write code. I craft{" "}
            <strong style={{ color: "#FF6B2B", fontWeight: 500 }}>
              experiences
            </strong>{" "}
            — fast, clean, and built to scale.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              marginTop: 48,
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "#141414",
                  padding: "clamp(16px,2.5vw,28px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(36px,5vw,52px)",
                    color: "#FF6B2B",
                    lineHeight: 1,
                    letterSpacing: -1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#5a5a5a",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    marginTop: 6,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="reveal" style={{ transitionDelay: "0.2s" }}>
          {/* Education */}
          {[
            {
              year: "",
              school: "Galgotias College of Engineering",
              degree: "B.Tech in Computer Science",
            },
            {
              year: "Until 2021",
              school: "KV Sector-24, Noida",
              degree: "Senior Secondary · Science with CS",
            },
          ].map((e) => (
            <div
              key={e.school}
              style={{
                borderLeft: "1px solid rgba(255,255,255,0.07)",
                paddingLeft: 28,
                marginBottom: 40,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: -4,
                  top: 6,
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#FF6B2B",
                }}
              />
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: "#FF6B2B",
                  letterSpacing: 2,
                  marginBottom: 8,
                }}
              >
                {e.year}
              </div>
              <div
                style={{
                  fontSize: "clamp(15px,2vw,18px)",
                  fontWeight: 600,
                  marginBottom: 4,
                }}
              >
                {e.school}
              </div>
              <div style={{ fontSize: 13, color: "#5a5a5a" }}>{e.degree}</div>
            </div>
          ))}

          {/* Certifications */}
          <div style={{ marginTop: 48 }}>
            <div className="section-label" style={{ marginBottom: 20 }}>
              Certifications
            </div>
            {certs.map((c) => (
              <a
                key={c.name}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#FF6B2B",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ fontSize: 14 }}>{c.name}</div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#5a5a5a",
                      marginTop: 2,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {c.org}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
