"use client";

export default function CtaBanner() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .cta-section {
          font-family: 'DM Sans', sans-serif;
          width: 100%;
          padding: 48px 40px;
        }

        /* Outer wrapper acts as the r-w (responsive-width) container */
        .cta-wrapper {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── Card ── */
        .cta-card {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          background: #2d55e0;
          padding: 48px 40px;
          text-align: center;

          /* Subtle radial shine on the left */
          background-image:
            radial-gradient(ellipse 60% 80% at 15% 50%, rgba(255,255,255,.07) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 85% 20%, rgba(255,255,255,.05) 0%, transparent 70%);
        }

        /* Decorative circle blobs — purely CSS, no images needed */
        .cta-card::before,
        .cta-card::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .cta-card::before {
          width: 320px;
          height: 320px;
          background: rgba(255,255,255,.04);
          top: -80px;
          left: -80px;
        }
        .cta-card::after {
          width: 220px;
          height: 220px;
          background: rgba(255,255,255,.04);
          bottom: -60px;
          right: -60px;
        }

        /* ── Heading ── */
        .cta-heading {
          margin: 0 0 18px;
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          position: relative;
          z-index: 1;
        }

        /* ── Enrollment badge ── */
        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border-radius: 999px;
          padding: 7px 20px;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        /* Pulsing green dot */
        .cta-badge-dot {
          position: relative;
          width: 9px;
          height: 9px;
          flex-shrink: 0;
        }
        .cta-badge-dot span {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #059669;
        }
        .cta-badge-dot span.ping {
          animation: ctaPing 1.5s cubic-bezier(0, 0, .2, 1) infinite;
          background: #34d399;
          opacity: .7;
        }
        @keyframes ctaPing {
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }

        .cta-badge-text {
          font-size: 14px;
          font-weight: 600;
          color: #059669;
          line-height: 1;
          white-space: nowrap;
        }

        /* ── CTA Button ── */
        .cta-btn-wrap {
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .cta-card .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 36px;
          border-radius: 999px;
          background: #ffffff;
          color: #1e3a8a;
          font-size: 17px;
          font-weight: 700;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background .18s, transform .15s, box-shadow .18s;
          box-shadow: 0 4px 20px rgba(0,0,0,.15);
          letter-spacing: .01em;
        }

        .cta-card .cta-btn:hover {
          background: #eff6ff;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,.2);
        }

        .cta-card .cta-btn:active {
          transform: translateY(0);
          box-shadow: 0 2px 10px rgba(0,0,0,.15);
        }

        /* Arrow icon inside button */
        .cta-btn-arrow {
          display: inline-flex;
          align-items: center;
          transition: transform .2s;
        }
        .cta-btn:hover .cta-btn-arrow {
          transform: translateX(3px);
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .cta-section {
            padding: 32px 20px;
          }
          .cta-card {
            padding: 36px 24px;
          }
          .cta-heading {
            font-size: 1.5rem;
          }
          .cta-badge-text {
            font-size: 11px;
          }
          .cta-btn {
            font-size: 15px;
            padding: 13px 28px;
          }
        }
      `}</style>

      <section className="cta-section" aria-label="Call to action">
        <div className="cta-wrapper">
          <div className="cta-card">

            {/* Heading */}
            <h2 className="cta-heading">
              Give Your Child the Education They Deserve
            </h2>

            {/* Enrollment badge */}
            <div>
              <span className="cta-badge">
                <span className="cta-badge-dot">
                  <span className="ping" />
                  <span />
                </span>
                <span className="cta-badge-text">
                  Enrolment Open Now | Limited Seats Available
                </span>
              </span>
            </div>

            {/* CTA Button */}
            <div className="cta-btn-wrap">
              <a href="#book-demo" className="cta-btn">
                Book Free Demo Today
                <span className="cta-btn-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}