export default function Footer() {
  return (
    <footer
      style={{
        padding: "32px 48px",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 18,
          letterSpacing: 3,
          color: "#5a5a5a",
        }}
      >
        VIVAN CHAUHAN
      </div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: "#5a5a5a",
          letterSpacing: 1,
        }}
      >
        © 2026 — Built with MERN by Vivan Chauhan
      </div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: "#5a5a5a",
          letterSpacing: 1,
        }}
      >
        Galgotias College · B.Tech CS
      </div>
    </footer>
  );
}
