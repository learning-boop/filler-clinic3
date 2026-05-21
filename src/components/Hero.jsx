import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const LEFT_IMAGE = "/assets/left-herotr.webp";
const RIGHT_IMAGE = "/assets/right-herotr.webp";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handle);

    return () => window.removeEventListener("resize", handle);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: "96px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(ellipse 70% 90% at 50% 60%, #ead8cb 0%, #dfc8b5 40%, #cfb29b 100%)",
      }}
    >

      {/* TOP OVERLAY */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "120px",
          background:
            "linear-gradient(to bottom, rgba(60,35,25,0.28), transparent)",
          zIndex: 1,
        }}
      />

      {/* LEFT IMAGE */}
      <img
        src={LEFT_IMAGE}
        alt="Refined feminine profile — aesthetic medicine at Fillers Clinic Newcastle"
        fetchpriority="high"
        loading="eager"
        decoding="async"
        width="1024"
        height="1536"
        style={{
          position: "absolute",
          bottom: 0,
          left: isMobile ? "-4%" : "0%",
          width: isMobile ? "46%" : "28%",
          height: isMobile ? "42%" : "78%",
          objectFit: "contain",
          objectPosition: "bottom left",
          mixBlendMode: "multiply",
          opacity: 0.92,
          filter: "brightness(1.03) contrast(1.01) saturate(0.92)",
          zIndex: 2,
        }}
      />

      {/* RIGHT IMAGE */}
      <img
        src={RIGHT_IMAGE}
        alt="Sculpted jawline and natural lip definition — Fillers Clinic Newcastle"
        fetchpriority="high"
        loading="eager"
        decoding="async"
        width="1024"
        height="1536"
        style={{
          position: "absolute",
          bottom: 0,
          right: isMobile ? "-4%" : "0%",
          width: isMobile ? "46%" : "28%",
          height: isMobile ? "42%" : "78%",
          objectFit: "contain",
          objectPosition: "bottom right",
          mixBlendMode: "multiply",
          opacity: 0.92,
          filter: "brightness(1.03) contrast(1.01) saturate(0.92)",
          zIndex: 2,
        }}
      />

      {/* CENTER CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          width: "100%",
          padding: isMobile ? "0 8%" : "0 26%",
          paddingBottom: isMobile ? "260px" : "0",
          boxSizing: "border-box",
        }}
      >

        {/* DECORATIVE LINE */}
        <div
          style={{
            width: 30,
            height: 1,
            margin: "0 auto 18px",
            background:
              "linear-gradient(90deg, transparent, #b57a65, transparent)",
          }}
        />

        {/* TITLE */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: isMobile
              ? "clamp(42px, 11vw, 58px)"
              : "clamp(70px, 7vw, 110px)",
            lineHeight: 0.95,
            color: "#2a1812",
            margin: 0,
            letterSpacing: "-1px",
          }}
        >
          The Art of

          <em
            style={{
              display: "block",
              fontStyle: "italic",
              color: "#a06248",
              fontSize: isMobile
                ? "clamp(50px, 13vw, 70px)"
                : "clamp(90px, 8vw, 130px)",
              fontWeight: 300,
            }}
          >
            Refined
          </em>

          Presence
        </h1>

        {/* DESCRIPTION */}
        <p
          style={{
            marginTop: 20,
            color: "#6b4e43",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: isMobile ? "11px" : "13px",
            lineHeight: isMobile ? 1.85 : 2,
            fontWeight: 300,
            letterSpacing: 0.3,
          }}
        >
          Private aesthetic medicine for those who know
          the difference — bespoke treatments delivered
          with surgical precision and absolute discretion.
        </p>

        {/* TRUST SIGNALS */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: isMobile ? 12 : 20,
            marginTop: 18,
            flexWrap: "wrap",
          }}
        >
          {[
            "GMC Registered",
            "CQC Regulated",
            "By Appointment Only",
          ].map((label) => (
            <span
              key={label}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "7px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(107,78,67,0.60)",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <span
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: "50%",
                  background: "#b57a65",
                  display: "inline-block",
                }}
              />
              {label}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            marginTop: 22,
          }}
        >

          {/* BUTTON 1 */}
          <Link
            to="/contact"
            style={{
              width: "100%",
              maxWidth: 280,
            }}
          >
            <button
              style={{
                width: "100%",
                padding: "14px 24px",
                borderRadius: "60px",
                border: "none",
                background: "#2a1812",
                color: "#f7efe9",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: 3,
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Request Consultation
            </button>
          </Link>

          {/* BUTTON 2 */}
          <Link
            to="/treatments"
            style={{
              width: "100%",
              maxWidth: 280,
            }}
          >
            <button
              style={{
                width: "100%",
                padding: "14px 24px",
                borderRadius: "60px",
                border: "1px solid rgba(160,98,72,0.35)",
                background: "transparent",
                color: "#7a5a4d",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: 3,
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Our Treatments
            </button>
          </Link>

        </div>
      </div>

      {/* FOOTER LEFT */}
      <span
        style={{
          position: "absolute",
          bottom: 20,
          left: "5%",
          zIndex: 4,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "7px",
          letterSpacing: 3,
          color: "rgba(107,78,67,0.45)",
          textTransform: "uppercase",
        }}
      >
        Est. in pursuit of excellence
      </span>

      {/* FOOTER RIGHT */}
      <span
        style={{
          position: "absolute",
          bottom: 20,
          right: "5%",
          zIndex: 4,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "7px",
          letterSpacing: 3,
          color: "rgba(107,78,67,0.45)",
          textTransform: "uppercase",
        }}
      >
        By appointment only
      </span>

    </section>
  );
}