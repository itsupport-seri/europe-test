"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Is the school internationally accredited?",
    answer:
      "Yes, International Schooling is fully accredited by the three most prestigious school accreditors - NEASC, WASC and Cognia, USA",
  },
  {
    question: "Is the diploma recognized across Europe and worldwide?",
    answer:
      "Yes, International Schooling offers the American Diploma which is recognized across Europe and worldwide.",
  },
  {
    question: "Which curriculum does the school follow?",
    answer:
      "International Schooling follows KG – Grade 12 American Curriculum.",
  },
  {
    question: "Are AP or Advanced Academic Courses available?",
    answer:
      "Yes, AP or Advanced Academic Courses are available.",
  },
  {
    question: "Can students transfer to European universities easily? ",
    answer:
      "Yes, student can easily apply to top universities across Europe with our globally accepted American High School Diploma.",
  },
  {
    question: "Are classes live, recorded, or self-paced?",
    answer:
      "All the classes are live both in One-to-One Learning Plan and Group Learning Plan. Besides we also offer Self-Study Learning Plan that allows students to learn at their own pace.",
  },
  {
    question: "Is the learning schedule flexible for different European time zones?",
    answer:
      "Yes, learning schedules are flexible according to different European time zones.",
  },
  {
    question: "Can students study while traveling across Europe?",
    answer:
      "Yes, International Schooling offers flexible schedules which allows students to study while traveling.",
  },
  {
    question: "Are teachers internationally certified and experienced?",
    answer:
      "Yes, all our teachers are internationally trained and certified.",
  },
  {
    question: "How do students interact with teachers and classmates online?",
    answer:
      "International schooling has a multicultural classroom where students and teachers interact through face to face live online classes.",
  },
  {
    question: "Is multilingual support available for international families?",
    answer:
      "Yes, International Schooling offers multilingual support with 600+ teachers speaking 40+ languages, besides translation tools on the Learning Management System.",
  },
  {
    question: "What technology or devices are required for online learning?",
    answer:
      "A tablet/ laptop with internet access and an active camera.",
  },
  {
    question: "Are books and study materials included?",
    answer:
      "Yes, the fee includes all the learning material with interactive audio-video curriculum all over an interactive and intuitive learning management system.",
  },
  {
    question: "How are assignments, exams, and grading managed?",
    answer:
      "Assignments, exams and grading are done manually by certified teachers over recorded calls.",
  },
  {
    question: "Can parents track attendance and academic progress?",
    answer:
      "Yes, parents can track attendance and academic progress through the official school application. Our teachers share daily, weekly and monthly academic progress with parents for effective academics.",
  },
  {
    question: "Is one-to-one academic support available?",
    answer:
      "Yes, one-to-one academic support is available for students, including administrative support as well.",
  },
  {
    question: "Does the school provide university counselling and career guidance?",
    answer:
      "Yes, International Schooling offers career counselling sessions with internationally certified career counselors, supporting students for university success globally.",
  },

  {
    question: "Are extracurricular activities and student clubs available?",
    answer:
      "Yes, International Schooling offers a plethora of extracurricular activities and student clubs including music, dance, theatres, arts, chess, fashion, book club etc.",
  },
  {
    question: "Is the school suitable for homeschooling and flexible learning families?",
    answer:
      "The school is perfect for students who want the benefits of a fully accredited flexible school, without compromising on the quality of education.",
  },
  {
    question: "Why should parents choose this school over traditional schools?",
    answer:
      "This school is a perfect blend of high-quality international curriculum, internationally qualified and certified teachers, with customized and personalized learning plans – all accredited and recognized over 190+ countries thus being a perfect fit for any student globally.",
  },

];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const answerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (i) => setActiveIndex((prev) => (prev === i ? null : i));

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#ffffff",
        padding: "72px 20px 80px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-dm), sans-serif",
      }}
    >
      {/* Subtle top accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "120px",
          height: "3px",
          borderRadius: "0 0 4px 4px",
          background: "linear-gradient(90deg, #1e6afb, #06b6d4)",
        }}
      />

      {/* Decorative faint circles */}
      <div
        style={{
          position: "absolute",
          top: -80,
          left: -80,
          width: 340,
          height: 340,
          borderRadius: "50%",
          border: "1px solid rgba(30,106,251,0.07)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          right: -60,
          width: 260,
          height: 260,
          borderRadius: "50%",
          border: "1px solid rgba(6,182,212,0.08)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
        {/* ── Header ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 52,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          


          <h2
            style={{
              fontSize: "clamp(1.85rem, 3.6vw, 2.75rem)",
              fontWeight: 800,
              color: "#5b5b5b",
              lineHeight: 1.15,
              margin: "0 0 12px",
              letterSpacing: "-0.02em",
            }}
          >
            Frequently
            <span style={{ color: "#1e6afb", position: "relative", display: "inline-block" }}>
               Ask Questions
              <svg
                style={{ position: "absolute", bottom: -4, left: 0, width: "100%" }}
                height="6"
                viewBox="0 0 200 6"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5 Q50 0 100 4 Q150 8 200 3"
                  stroke="#1e6afb"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 220,
                    strokeDashoffset: visible ? 0 : 220,
                    transition: "stroke-dashoffset 1.1s ease 0.5s",
                  }}
                />
              </svg>
              
            </span>
          </h2>

          <p
            style={{
              fontSize: "0.9rem",
              color: "#64748b",
              maxWidth: 460,
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Clear answers to help you understand our online schooling
            experience, accreditation, and student journey.
          </p>
        </div>

        {/* ── FAQ Items ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;
            const delay = 0.1 + i * 0.055;

            return (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid",
                  borderColor: isOpen ? "rgba(30,106,251,0.25)" : "#e8edf5",
                  borderRadius: 14,
                  overflow: "hidden",
                  boxShadow: isOpen
                    ? "0 4px 20px rgba(30,106,251,0.08)"
                    : "0 1px 3px rgba(0,0,0,0.04)",
                  transition:
                    "border-color 0.25s ease, box-shadow 0.25s ease",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transitionDelay: `${delay}s`,
                  transitionProperty:
                    "opacity, transform, border-color, box-shadow",
                  transitionDuration: "0.5s, 0.5s, 0.25s, 0.25s",
                  transitionTimingFunction: "ease, ease, ease, ease",
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "18px 22px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {/* Number + question */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      flex: 1,
                    }}
                  >
                    <span
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: isOpen ? "#1e6afb" : "#f0f4ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        fontWeight: 700,
                        color: isOpen ? "#fff" : "#1e6afb",
                        flexShrink: 0,
                        transition: "background 0.25s, color 0.25s",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: isOpen ? "#0a0f1e" : "#1e293b",
                        lineHeight: 1.45,
                        transition: "color 0.2s",
                      }}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Chevron */}
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: isOpen ? "#1e6afb" : "#f0f4ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "background 0.25s",
                    }}
                  >
                    <ChevronDown
                      size={16}
                      strokeWidth={2.2}
                      color={isOpen ? "#fff" : "#1e6afb"}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition:
                          "transform 0.35s cubic-bezier(.34,1.56,.64,1)",
                      }}
                    />
                  </div>
                </button>

                {/* Answer — animated */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.35s cubic-bezier(.4,0,.2,1)",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <div
                      style={{
                        padding: "0 22px 20px 62px",
                        fontSize: "0.83rem",
                        color: "#64748b",
                        lineHeight: 1.7,
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? "translateY(0)" : "translateY(-6px)",
                        transition: "opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s",
                      }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>

                {/* Bottom accent line when open */}
                <div
                  style={{
                    height: 2,
                    background: "linear-gradient(90deg, #1e6afb, #06b6d4)",
                    opacity: isOpen ? 0.6 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 44,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.55s ease 0.55s, transform 0.55s ease 0.55s",
          }}
        >
          <a
            href="https://internationalschooling.org/demo"
            target="_blank"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#1e6afb",
              color: "#fff",
              fontSize: "0.82rem",
              fontWeight: 700,
              padding: "13px 28px",
              borderRadius: 100,
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(30,106,251,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 22px rgba(30,106,251,0.38)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 14px rgba(30,106,251,0.3)";
            }}
          >
            Book Free Demo
            <ArrowRight size={15} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}