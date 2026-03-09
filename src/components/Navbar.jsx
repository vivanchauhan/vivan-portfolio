import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Achievements", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px clamp(20px,5vw,48px)",
          background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 22,
            letterSpacing: 3,
            color: "#f0ede8",
            textDecoration: "none",
            zIndex: 101,
          }}
        >
          VC<span style={{ color: "#FF6B2B" }}>.</span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: 40,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="nav-desktop"
        >
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#5a5a5a",
                  cursor: "none",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#FF6B2B")}
                onMouseLeave={(e) => (e.target.style.color = "#5a5a5a")}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop resume button */}
        <a
          href="/vivan_resume.pdf"
          download
          className="btn-outline nav-desktop"
          style={{ fontSize: 11, padding: "10px 20px", letterSpacing: 2 }}
        >
          Resume ↓
        </a>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            zIndex: 101,
          }}
          className="hamburger"
        >
          <span
            style={{
              display: "block",
              width: 24,
              height: 1.5,
              background: "#f0ede8",
              transition: "all 0.3s",
              transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 1.5,
              background: "#f0ede8",
              transition: "all 0.3s",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 1.5,
              background: "#f0ede8",
              transition: "all 0.3s",
              transform: menuOpen
                ? "translateY(-6.5px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(8,8,8,0.98)",
          zIndex: 99,
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
        }}
      >
        {links.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            style={{
              background: "none",
              border: "none",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 42,
              letterSpacing: 3,
              color: "#f0ede8",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#FF6B2B")}
            onMouseLeave={(e) => (e.target.style.color = "#f0ede8")}
          >
            {l}
          </button>
        ))}
        <a
          href="/vivan_resume.pdf"
          download
          className="btn-outline"
          style={{
            fontSize: 11,
            padding: "12px 28px",
            letterSpacing: 2,
            marginTop: 16,
          }}
        >
          Resume ↓
        </a>
      </div>

      {/* CSS for hamburger show/hide */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
    </>
  );
}
