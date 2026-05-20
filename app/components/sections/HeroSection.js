"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const STATS = [
  { value: "15,000+", label: "Students" },
  { value: "190+",    label: "Countries" },
  { value: "600+",    label: "Teachers" },
];

const ACCREDS = ["NEASC", "WASC", "Cognia", "College Board"];

const SLIDES = [
  {
    src: "/new-collage.avif",
    label: "Happy Students from 190+ Countries",
  },
  {
    src: "/uae-main.avif",
    label: "World-Class American Curriculum",
    fallbackBg: "linear-gradient(135deg, #047857 0%, #10b981 100%)",
  },
  {
    src: "/slider/1.jpeg",
    label: "Live Interactive Classes Daily",
    fallbackBg: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)",
  },
  {
    src: "/slider/2.webp",
    label: "Fully Accredited & Globally Recognized",
    fallbackBg: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
  },
  {
    src: "/slider/3.webp",
    label: "Satisfied Parents Worldwide",
    fallbackBg: "linear-gradient(135deg, #0f766e 0%, #2dd4bf 100%)",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState({});

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleImgError = (index) => {
    setImgErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <style>{`
        .hero-section {
          width: 100%;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 50%, #ffffff 100%);
          border-bottom: 1px solid #e8ecf4;
          font-family: 'DM Sans', sans-serif;
        }

        .hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 48px 40px 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        /* ── LEFT COPY ── */
        .hero-copy {
          flex: 1;
          min-width: 0;
          max-width: 560px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 999px;
          padding: 6px 16px 6px 10px;
          margin-bottom: 20px;
        }
        .hero-badge-dot {
          position: relative;
          width: 8px;
          height: 8px;
          flex-shrink: 0;
        }
        .hero-badge-dot span {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #2563eb;
        }
        .hero-badge-dot span.ping {
          animation: ping 1.4s cubic-bezier(0, 0, .2, 1) infinite;
          background: #60a5fa;
          opacity: .75;
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .hero-badge-text {
          font-size: 13px;
          font-weight: 600;
          color: #1e40af;
          line-height: 1;
        }

        .hero-heading {
          font-family: 'DM Sans', sans-serif;
          margin: 0 0 6px;
          line-height: 1.06;
        }
        .hero-heading.line1 {
          font-size: clamp(1rem, 2.6vw, 1.4rem);
          font-weight: 700;
          color: #1e293b;
        }
        .hero-heading.line2 {
          font-size: clamp(1.7rem, 3.2vw, 2.45rem);
          font-weight: 800;
          color: #1e293b;
        }
        .hero-heading .em-green { color: #047857; }
        .hero-heading .em-blue  { color: #1d4ed8; }

        .hero-sub {
          margin: 14px 0 6px;
          font-size: 15px;
          font-weight: 600;
          color: #374151;
        }
        .hero-sub span { color: #1d4ed8; }

        .hero-accred-row {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 14px;
        }

        .accred-logos {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .accred-logo-wrapper {
          width: 320px;
          max-width: 100%;
          min-width: 160px;
          min-height: 44px;
        }
        .accred-logo-image {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
        .accred-logo-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 5px 13px;
          border: 1px solid rgba(0, 0, 0, .12);
          border-radius: 999px;
          background: rgba(0, 0, 0, .03);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: #374151;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 26px;
          border-radius: 999px;
          background: #2563eb;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: background .18s, transform .15s;
          border: none;
          cursor: pointer;
        }
        .btn-primary:hover { background: #1d4ed8; transform: translateY(-1px); }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 24px;
          border-radius: 999px;
          border: 2px solid #2563eb;
          background: #fff;
          color: #1d4ed8;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: background .18s, transform .15s;
          cursor: pointer;
        }
        .btn-outline:hover { background: #eff6ff; transform: translateY(-1px); }
        .btn-amber {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 26px;
          border-radius: 999px;
          background: #d97706;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: background .18s, transform .15s;
          border: none;
          cursor: pointer;
        }
        .btn-amber:hover { background: #b45309; transform: translateY(-1px); }

        /* ── RIGHT MEDIA ── */
        .hero-media {
          flex: 0 0 auto;
          width: min(44%, 520px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .media-caption {
          font-size: 13px;
          font-weight: 600;
          color: #92400e;
          text-align: center;
        }

        /* ── SWIPER WRAPPER ── */
        .hero-swiper-outer {
          width: 100%;
          position: relative;
        }

        .hero-swiper-outer .swiper {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          box-shadow:
            0 4px 6px rgba(0,0,0,.04),
            0 12px 40px rgba(0,0,0,.12),
            0 0 0 1px rgba(0,0,0,.05);
        }

        .hero-swiper-outer .swiper {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .hero-swiper-outer .swiper-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .hero-swiper-outer .swiper-slide {
          height: 340px;
          position: absolute;
          inset: 0;
          opacity: 0;
          visibility: hidden;
          overflow: hidden;
          transition: opacity .7s ease, visibility .7s ease;
        }
        .hero-swiper-outer .swiper-slide.active {
          opacity: 1;
          visibility: visible;
          position: relative;
        }

        /* Real image */
        .slide-img {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: block;
          transition: transform .7s ease;
        }
        .hero-swiper-outer .swiper-slide.active:hover .slide-img {
          transform: scale(1.04);
        }

        /* Fallback gradient bg */
        .slide-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .slide-fallback-icon {
          width: 64px;
          height: 64px;
          opacity: .45;
        }

        /* Gradient overlay */
        .slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0) 40%,
            rgba(0,0,0,.62) 100%
          );
          pointer-events: none;
        }

        /* Top-right counter badge */
        .slide-counter {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(0,0,0,.45);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 999px;
          padding: 4px 11px;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          letter-spacing: .04em;
          pointer-events: none;
        }

        /* Bottom label */
        .slide-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 14px 18px;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .02em;
          text-shadow: 0 1px 6px rgba(0,0,0,.5);
          pointer-events: none;
        }

        /* ── Pagination bullets ── */
        .hero-swiper-outer .swiper-pagination {
          bottom: 10px !important;
        }
        .hero-swiper-outer .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background: rgba(255,255,255,.55);
          opacity: 1;
          transition: background .25s, width .25s;
        }
        .hero-swiper-outer .swiper-pagination-bullet-active {
          background: #fff;
          width: 22px;
          border-radius: 4px;
        }

        /* ── Nav arrows ── */
        .swiper-btn-prev,
        .swiper-btn-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,.88);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(0,0,0,.08);
          box-shadow: 0 2px 12px rgba(0,0,0,.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background .18s, transform .18s, box-shadow .18s;
          color: #1e293b;
        }
        .swiper-btn-prev { left: -16px; }
        .swiper-btn-next { right: -16px; }
        .swiper-btn-prev:hover,
        .swiper-btn-next:hover {
          background: #fff;
          box-shadow: 0 4px 20px rgba(0,0,0,.2);
          transform: translateY(-50%) scale(1.08);
        }
        .swiper-btn-prev svg,
        .swiper-btn-next svg {
          width: 16px;
          height: 16px;
          stroke-width: 2.5;
        }

        /* ── Thumbnail dots row ── */
        .thumb-row {
          display: flex;
          gap: 6px;
          width: 100%;
          justify-content: center;
        }
        .thumb-dot {
          flex: 1;
          max-width: 80px;
          height: 5px;
          border-radius: 3px;
          background: #e2e8f0;
          transition: background .3s;
          cursor: pointer;
        }
        .thumb-dot.active {
          background: #2563eb;
        }

        /* ── Stats row ── */
        .stats-row {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 6px 0 2px;
          width: 100%;
          justify-content: center;
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
        }
        .stat-item strong { color: #1e293b; }
        .stat-sep {
          margin: 0 10px;
          color: #94a3b8;
          font-size: 13px;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .hero-inner {
            flex-direction: column;
            padding: 28px 20px 36px;
            gap: 28px;
          }
          .hero-copy { max-width: 100%; text-align: center; }
          .hero-media { width: 100%; }
          .hero-heading.line1 { font-size: 1.2rem; }
          .hero-heading.line2 { font-size: 2rem; }
          .accred-logos { gap: 10px;, justify-content: end; }
          .hero-ctas { gap: 10px; justify-content: center; }
          .btn-primary, .btn-amber { padding: 11px 20px; font-size: 13px; }
          .btn-outline { padding: 10px 18px; font-size: 13px; }
          .hero-swiper-outer .swiper-slide { height: 260px; }
          .swiper-btn-prev { left: 8px; }
          .swiper-btn-next { right: 8px; }
        }
      `}</style>

      {/* Announcement bar */}
      <div style={{
        background: "#064e3b",
        color: "#d1fae5",
        textAlign: "center",
        padding: "8px 16px",
        fontSize: "13px",
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 600,
        letterSpacing: ".02em",
      }}>
        Limited Seats Available for July &amp; September 2026 Intake
      </div>

      <section className="hero-section" aria-label="Hero">
        <div className="hero-inner">

          {/* ── LEFT COPY ── */}
          <div className="hero-copy">
            <div className="hero-badge">
              <div className="hero-badge-dot">
                <span className="ping" />
                <span />
              </div>
              <span className="hero-badge-text">Trusted Online School Since 2014</span>
            </div>

            <h1 className="hero-heading line1">
              The Freedom to Learn From Anywhere.
            </h1>
            <h1 className="hero-heading line2">
              With the Best American Online School{" "}
              <span className="em-green">in Europe.</span>
            </h1>
            <h1 className="hero-heading line2">
              <span className="em-blue">Flexible. Accredited. <br /> Future-Ready.</span>
            </h1>

            <p className="hero-sub">
              <span>KG-Grade 12</span> American Curriculum
            </p>
            <p className="hero-accred-row">
              Fully Accredited by NEASC, WASC &amp; Cognia, USA
            </p>

            <div className="accred-logos justify-center md:justify-start">
              <div className="accred-logo-wrapper">
                <Image
                  src="/new-strip.avif"
                  alt="NEASC, WASC, Cognia accreditation logos"
                  width={220}
                  height={55}
                  className="accred-logo-image"
                  loading="eager"
                  decoding="async"
                />
              </div>
              {/* {ACCREDS.map(a => (
                <span key={a} className="accred-logo-pill">{a}</span>
              ))} */}
            </div>

            <div className="hero-ctas">
              <a href="https://internationalschooling.org/demo" className="btn-primary">
                Book Demo
              </a>
              <a href="https://internationalschooling.org/callback" className="btn-outline">
                Book Callback
              </a>
              <a href="https://internationalschooling.org/download-brochure" className="btn-amber">
                Get Brochure
              </a>
            </div>
          </div>

          {/* ── RIGHT MEDIA — SWIPER SLIDER ── */}
          <div className="hero-media">
            <p className="media-caption">Happy Students &amp; Satisfied Parents from 190+ Countries</p>

            <div className="hero-swiper-outer">

              {/* Prev / Next buttons (outside swiper so they overlap border-radius) */}
              <button className="swiper-btn-prev" aria-label="Previous slide" onClick={() => setActiveIndex((current) => (current - 1 + SLIDES.length) % SLIDES.length)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="swiper-btn-next" aria-label="Next slide" onClick={() => setActiveIndex((current) => (current + 1) % SLIDES.length)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <div className="swiper">
                <div className="swiper-wrapper">
                  {SLIDES.map((slide, i) => (
                    <div
                      className={`swiper-slide${activeIndex === i ? " active" : ""}`}
                      key={i}
                    >
                      {!imgErrors[i] ? (
                        <div className="slide-img">
                          <Image
                            src={slide.src}
                            alt={slide.label}
                            fill
                            sizes="(max-width: 768px) 100vw, 520px"
                            quality={80}
                            priority={i === 0}
                            loading={i === 0 ? "eager" : "lazy"}
                            decoding="async"
                            style={{ objectFit: "cover" }}
                            onError={() => handleImgError(i)}
                          />
                        </div>
                      ) : (
                        <div
                          className="slide-fallback"
                          style={{ background: slide.fallbackBg }}
                        >
                          {/* Generic school/globe icon as fallback */}
                          <svg
                            className="slide-fallback-icon"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="32" cy="32" r="28" stroke="white" strokeWidth="3" />
                            <ellipse cx="32" cy="32" rx="12" ry="28" stroke="white" strokeWidth="3" />
                            <line x1="6" y1="24" x2="58" y2="24" stroke="white" strokeWidth="3" />
                            <line x1="6" y1="40" x2="58" y2="40" stroke="white" strokeWidth="3" />
                          </svg>
                        </div>
                      )}

                      {/* Gradient overlay */}
                      <div className="slide-overlay" />

                      {/* Counter badge */}
                      <span className="slide-counter">
                        {i + 1} / {SLIDES.length}
                      </span>

                      {/* Label */}
                      <div className="slide-label">{slide.label}</div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="swiper-pagination" role="tablist">
                  {SLIDES.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`swiper-pagination-bullet${activeIndex === index ? " swiper-pagination-bullet-active" : ""}`}
                      aria-label={`Go to slide ${index + 1}`}
                      aria-pressed={activeIndex === index}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Progress bar tabs */}
            <div className="thumb-row" role="tablist" aria-label="Slide navigation">
              {SLIDES.map((_, i) => (
                <div
                  key={i}
                  className={`thumb-dot${activeIndex === i ? " active" : ""}`}
                  role="tab"
                  aria-selected={activeIndex === i}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>

            {/* Stats row */}
            <div className="stats-row">
              {STATS.map((s, i) => (
                <span key={s.label} style={{ display: "flex", alignItems: "center" }}>
                  {i > 0 && <span className="stat-sep">•</span>}
                  <span className="stat-item">
                    <strong>{s.value}</strong> {s.label}
                  </span>
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}