import vivanImg from "../images/me.jpg";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "100px clamp(20px,5vw,48px) 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(255,107,43,0.07) 0%, transparent 70%)",
          top: -100,
          right: -100,
          pointerEvents: "none",
        }}
      />

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, #080808 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Giant bg text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(120px, 20vw, 280px)",
          color: "rgba(255,255,255,0.02)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: -4,
        }}
      >
        VC
      </div>

      {/* ── Main content: left text + right photo ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(32px,5vw,80px)",
          flexWrap: "wrap",
        }}
      >
        {/* ── LEFT: text ── */}
        <div style={{ flex: "1 1 300px", minWidth: 0 }}>
          {/* Tag */}
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: "#FF6B2B",
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 12,
              animation: "fadeUp 1s 0.2s ease both",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "block",
                width: 40,
                height: 1,
                background: "#FF6B2B",
                flexShrink: 0,
              }}
            />
            MERN Stack Developer · B.Tech CS
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(64px,10vw,180px)",
              lineHeight: 0.9,
              letterSpacing: -2,
              marginBottom: 32,
            }}
          >
            <span style={{ display: "block", overflow: "hidden" }}>
              <span
                style={{
                  display: "block",
                  animation: "slideUp 1s cubic-bezier(0.16,1,0.3,1) both",
                }}
              >
                VIVAN
              </span>
            </span>
            <span style={{ display: "block", overflow: "hidden" }}>
              <span
                style={{
                  display: "block",
                  color: "#FF6B2B",
                  animation: "slideUp 1s 0.1s cubic-bezier(0.16,1,0.3,1) both",
                }}
              >
                CHAUHAN
              </span>
            </span>
          </h1>

          {/* Description */}
          <p
            style={{
              maxWidth: 420,
              fontSize: 15,
              color: "rgba(240,237,232,0.6)",
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: 36,
              animation: "fadeUp 1s 0.4s ease both",
            }}
          >
            Building fast, scalable, and beautifully crafted web applications.
            From pixel-perfect frontends to robust backend systems — I ship
            products that work.
          </p>
          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              animation: "fadeUp 1s 0.5s ease both",
              marginTop: 24,
            }}
          >
            <a
              href="#projects"
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Work
            </a>
            <a
              href="#contact"
              className="btn-fill"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me
            </a>
          </div>
          {/* Scroll indicator */}
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: "#5a5a5a",
              letterSpacing: 2,
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginTop: 48,
              animation: "fadeUp 1s 0.6s ease both",
            }}
          >
            <div
              style={{
                width: 1,
                height: 50,
                background: "linear-gradient(to bottom, #FF6B2B, transparent)",
                animation: "scrollDrop 2s ease infinite",
              }}
            />
            Scroll
          </div>
        </div>

        {/* ── RIGHT: photo ── */}
        <div
          style={{
            flex: "0 0 auto",
            width: "clamp(160px, 28vw, 340px)",
            animation: "fadeUp 1s 0.3s ease both",
            position: "relative",
            margin: "0 auto",
          }}
        >
          <img
            src={vivanImg}
            alt="Vivan Chauhan"
            style={{
              width: "100%",
              aspectRatio: "3/4",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
              filter: "grayscale(15%)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderBottom: "3px solid #FF6B2B",
            }}
          />
          {/* Orange accent square behind photo */}
          <div
            style={{
              position: "absolute",
              bottom: -10,
              right: -10,
              width: 48,
              height: 48,
              background: "#FF6B2B",
              zIndex: -1,
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(110%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollDrop {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
          50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: top; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
