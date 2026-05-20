"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./hero.module.css";

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
    fallbackBg: "linear-gradient(135deg, #2d4c43 0%, #10b981 100%)",
  },
  {
    src: "/slider/1.webp",
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
    let intervalId;
    const delayId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setActiveIndex((current) => (current + 1) % SLIDES.length);
      }, 4500);
    }, 15000);

    return () => {
      window.clearTimeout(delayId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, []);

  const handleImgError = (index) => {
    setImgErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <>
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

      <section className={styles["hero-section"]} aria-label="Hero">
        <div className={styles["hero-inner"]}>

          {/* ── LEFT COPY ── */}
          <div className={styles["hero-copy"]}>
            <div className={styles["hero-badge"]}>
              <div className={styles["hero-badge-dot"]}>
                <span className={styles["ping"]} />
                <span />
              </div>
              <span className={styles["hero-badge-text"]}>Trusted Online School Since 2014</span>
            </div>

            <h1 className={`${styles["hero-heading"]} ${styles["line1"]}`}>
              The Freedom to Learn From Anywhere.
            </h1>
            <h1 className={`${styles["hero-heading"]} ${styles["line2"]}`}>
              With the Best American Online School{" "}
              <span className={styles["em-green"]}>in Europe.</span>
            </h1>
            <h1 className={`${styles["hero-heading"]} ${styles["line2"]}`}>
              <span className={styles["em-blue"]}>Flexible. Accredited. <br /> Future-Ready.</span>
            </h1>

            <p className={styles["hero-sub"]}>
              <span>KG-Grade 12</span> American Curriculum
            </p>
            <p className={styles["hero-accred-row"]}>
              Fully Accredited by NEASC, WASC &amp; Cognia, USA
            </p>

            <div className={styles["accred-logos"]}>
              <div className={styles["accred-logo-wrapper"]}>
                <Image
                  src="/new-strip.avif"
                  alt="NEASC, WASC, Cognia accreditation logos"
                  width={220}
                  height={55}
                  className={styles["accred-logo-image"]}
                  priority={true}
                  decoding="async"
                  quality={75}
                />
              </div>
            </div>

            <div className={styles["hero-ctas"]}>
              <a href="https://internationalschooling.org/demo" className={styles["btn-primary"]}>
                Book Demo
              </a>
              <a href="https://internationalschooling.org/callback" className={styles["btn-outline"]}>
                Book Callback
              </a>
              <a href="https://internationalschooling.org/download-brochure" className={styles["btn-amber"]}>
                Get Brochure
              </a>
            </div>
          </div>

          {/* ── RIGHT MEDIA — SWIPER SLIDER ── */}
          <div className={styles["hero-media"]}>
            <p className={styles["media-caption"]}>Happy Students &amp; Satisfied Parents from 190+ Countries</p>

            <div className={styles["hero-swiper-outer"]}>

              {/* Prev / Next buttons */}
              <button className={styles["swiper-btn-prev"]} aria-label="Previous slide" onClick={() => setActiveIndex((current) => (current - 1 + SLIDES.length) % SLIDES.length)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className={styles["swiper-btn-next"]} aria-label="Next slide" onClick={() => setActiveIndex((current) => (current + 1) % SLIDES.length)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <div className={styles["swiper"]}>
                <div className={styles["swiper-wrapper"]}>
                  {SLIDES.map((slide, i) => (
                    <div
                      className={`${styles["swiper-slide"]}${activeIndex === i ? ` ${styles["active"]}` : ""}`}
                      key={i}
                    >
                      {!imgErrors[i] ? (
                        <div className={styles["slide-img"]}>
                          <Image
                            src={slide.src}
                            alt={slide.label}
                            fill
                            sizes="(max-width: 768px) 100vw, 520px"
                            quality={i === 0 ? 75 : 70}
                            priority={i === 0}
                            loading={i === 0 ? undefined : "lazy"}
                            decoding="async"
                            style={{ objectFit: "cover" }}
                            onError={() => handleImgError(i)}
                          />
                        </div>
                      ) : (
                        <div
                          className={styles["slide-fallback"]}
                          style={{ background: slide.fallbackBg }}
                        >
                          <svg
                            className={styles["slide-fallback-icon"]}
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

                      <div className={styles["slide-overlay"]} />

                      <span className={styles["slide-counter"]}>
                        {i + 1} / {SLIDES.length}
                      </span>

                      <div className={styles["slide-label"]}>{slide.label}</div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className={styles["swiper-pagination"]} role="tablist">
                  {SLIDES.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      role="tab"
                      aria-selected={activeIndex === index}
                      className={`${styles["swiper-pagination-bullet"]}${activeIndex === index ? ` ${styles["swiper-pagination-bullet-active"]}` : ""}`}
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Progress bar tabs */}
            <div className={styles["thumb-row"]} role="tablist" aria-label="Slide navigation">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles["thumb-dot"]}${activeIndex === i ? ` ${styles["active"]}` : ""}`}
                  role="tab"
                  aria-selected={activeIndex === i}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>

            {/* Stats row */}
            <div className={styles["stats-row"]}>
              {STATS.map((s, i) => (
                <span key={s.label} style={{ display: "flex", alignItems: "center" }}>
                  {i > 0 && <span className={styles["stat-sep"]}>•</span>}
                  <span className={styles["stat-item"]}>
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