import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL || ""}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 3000);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "16px 20px",
    background: "#141414",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 2,
    color: "#f0ede8",
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.3s",
    marginBottom: 12,
  };

  return (
    <section
      id="contact"
      style={{
        padding: "clamp(60px,8vw,120px) clamp(20px,5vw,48px)",
        background: "#0f0f0f",
      }}
    >
      <div className="section-label" style={{ marginBottom: 40 }}>
        05 — Contact
      </div>

      {/* 2-col desktop → 1-col mobile */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "clamp(48px,6vw,80px)",
          alignItems: "start",
        }}
      >
        {/* Left — heading, email, links */}
        <div className="reveal">
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(56px,8vw,120px)",
              lineHeight: 0.9,
              letterSpacing: -2,
              marginBottom: 40,
            }}
          >
            LET'S
            <br />
            <span style={{ color: "#FF6B2B" }}>BUILD</span>
            <br />
            TOGETHER
          </div>

          <a
            href="mailto:vivanchauhan@zohomail.in"
            style={{
              display: "inline-block",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(12px,1.5vw,16px)",
              color: "#f0ede8",
              textDecoration: "none",
              borderBottom: "1px solid #FF6B2B",
              paddingBottom: 4,
              marginBottom: 48,
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#FF6B2B")}
            onMouseLeave={(e) => (e.target.style.color = "#f0ede8")}
          >
            vivanchauhan@zohomail.in
          </a>

          {/* Social Links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {[
              { label: "GitHub", href: "https://github.com/vivanchauhan" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/vivan-chauhan-b3259a15b/",
              },
              { label: "+91 8368487124", href: "tel:+918368487124" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#5a5a5a",
                  textDecoration: "none",
                  fontSize: 13,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B2B")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5a5a5a")}
              >
                → {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="reveal" style={{ transitionDelay: "0.15s" }}>
          <div className="section-label" style={{ marginBottom: 32 }}>
            Send a Message
          </div>

          <input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#FF6B2B")}
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(255,255,255,0.07)")
            }
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#FF6B2B")}
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(255,255,255,0.07)")
            }
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            rows={5}
            style={{ ...inputStyle, resize: "vertical", marginBottom: 20 }}
            onFocus={(e) => (e.target.style.borderColor = "#FF6B2B")}
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(255,255,255,0.07)")
            }
          />

          <button
            onClick={handleSubmit}
            className="btn-fill"
            style={{
              width: "100%",
              fontSize: 14,
              padding: "16px",
              letterSpacing: 2,
              opacity: status === "sending" ? 0.7 : 1,
            }}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
                ? "✓ Message Sent!"
                : "Send Message"}
          </button>

          {status === "error" && (
            <p
              style={{
                color: "#ef4444",
                fontSize: 13,
                marginTop: 12,
                textAlign: "center",
              }}
            >
              Something went wrong. Email me directly at
              vivanchauhan@zohomail.in
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
