import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Lenis from "lenis";
import pattern from "../assets/pattern.svg";
import heroImage from "../assets/heroimage.webp";
import galleryWide from "../assets/image_2026-04-16_16-14-43.png";
import galleryPortraitA from "../assets/image_2026-04-16_16-11-55.png";
import galleryPortraitB from "../assets/image_2026-04-16_19-37-21.png";
import galleryPortraitC from "../assets/image_2026-04-16_19-38-28.png";
import galleryTallA from "../assets/photo_2026-04-16_19-36-08.jpg";
import galleryTallB from "../assets/photo_2026-04-16_19-39-498.jpg";
import capabilitiesImage from "../assets/capabilities_hero.png";
import homeHeroImage from "../assets/home_hero.png";
import { pageOrder, pages, primaryLinks, footerData } from "./siteData";

const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -18,
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
  },
};

const revealUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const goldPlaceholders = [
  {
    currency: "USD",
    value: "$154.80",
    trend: "up",
    note: "+1.6% today",
  },
  {
    currency: "ETB",
    value: "20,850 ETB",
    trend: "down",
    note: "-0.6% today",
  },
];

const homeGalleryImages = [
  {
    src: galleryWide,
    alt: "Armada Mining site image 1",
    layout: "is-wide",
  },
  {
    src: galleryTallA,
    alt: "Armada Mining site image 2",
    layout: "is-tall-a",
  },
  {
    src: galleryPortraitA,
    alt: "Armada Mining site image 3",
    layout: "is-portrait-a",
  },
  {
    src: galleryPortraitB,
    alt: "Armada Mining site image 4",
    layout: "is-portrait-b",
  },
  {
    src: galleryPortraitC,
    alt: "Armada Mining site image 5",
    layout: "is-small-tall",
  },
  {
    src: galleryTallB,
    alt: "Armada Mining site image 6",
    layout: "is-wide-low",
  },
];

function BrandMark() {
  return (
    <svg viewBox="0 0 136 188" aria-hidden="true">
      <g fill="currentColor">
        <polygon points="27.79 84.12 30.22 86.3 30.51 109.16 38.57 116.37 38.57 78.43 27.79 72.31 27.79 84.12" />
        <polygon points="107.34 84.12 104.9 86.3 104.61 109.16 96.55 116.37 96.55 78.43 107.34 72.31 107.34 84.12" />
        <path d="M122.58,14.1l-.84-2.38-2.29-.76c-1.05-.35-25.95-8.52-41.79-10.75l-1.55-.22-8.56,4.78L59.01,0l-1.55.22C41.62,2.44,16.72,10.62,15.67,10.96l-2.29.76-.84,2.38c-.64,1.83-15.66,45.15-11.95,83.27,3.05,31.32,22.98,53.82,34.89,67.26,2.87,3.24,10.96,11.74,12.38,13.76l.28-9.18,19.31,17.76v.21s.11-.11.11-.11l.12.11v-.21s19.31-17.76,19.31-17.76l.28,9.18c1.42-2.02,9.5-10.52,12.38-13.76,11.91-13.44,31.84-35.95,34.89-67.26,3.71-38.12-11.31-81.44-11.95-83.27ZM124.8,96.31c-2.47,25.31-17.99,44.89-29.1,57.62l-.58-7.3-27.55,27.57-27.55-27.57-.58,7.3c-11.12-12.74-26.64-32.31-29.1-57.62-3-30.84,7.58-66.76,10.6-76.23,6.31-2,24.01-7.42,36.29-9.38l10.34,4.49,10.34-4.49c12.28,1.96,29.98,7.39,36.29,9.38,3.03,9.47,13.61,45.39,10.6,76.23Z" />
        <polygon points="95.83 47.49 100.02 38.15 88.59 32.44 71.4 41.8 73.78 69.77 67.56 73.45 61.34 69.77 63.73 41.8 46.54 32.44 35.11 38.15 39.29 47.49 46.35 43.97 53.39 47.8 51.03 75.52 62.66 82.4 62.66 94.57 47.72 105.23 46.1 123.37 55.15 131.62 57.03 111.06 67.56 103.55 78.09 111.06 79.98 131.62 89.02 123.37 87.4 105.23 72.46 94.57 72.46 82.4 84.1 75.52 81.73 47.8 88.78 43.97 95.83 47.49" />
      </g>
    </svg>
  );
}

function normalizePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const trimmed = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return trimmed || "/";
}

function App() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navActionsRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.05,
      lerp: 0.085,
    });

    let frameId = 0;

    const frame = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(frame);
    };

    frameId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setPathname(normalizePath(window.location.pathname));
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useLayoutEffect(() => {
    const checkScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom <= 0);
      } else {
        setIsScrolled(window.scrollY > window.innerHeight * 0.9);
      }
    };
    // Defer by one frame so heroRef is guaranteed to be set
    const raf = requestAnimationFrame(checkScroll);
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", checkScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const page = pages[pathname] ?? pages["/"];
    document.title = `${page.title} | Armada Mining`;
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (navActionsRef.current && !navActionsRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const currentPath = pages[pathname] ? pathname : "/";
  const currentPage = pages[currentPath];

  const navigate = (targetPath) => {
    if (targetPath === currentPath) {
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.history.pushState({}, "", targetPath);
    setPathname(targetPath);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const onNavClick = (event, targetPath) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    navigate(targetPath);
  };

  return (
    <div className="site-shell">
      <div className="site-backdrop" aria-hidden="true">
        <div className="site-backdrop-glow site-backdrop-glow-left" />
        <div className="site-backdrop-glow site-backdrop-glow-right" />
      </div>

      <header className="site-header">
        <div className="shell">
          <div className={`navbar${isScrolled ? " is-scrolled" : ""}`}>
            <a
              className="brand-lockup"
              href="/"
              aria-label="Armada Mining home"
              onClick={(event) => onNavClick(event, "/")}
            >
              <BrandMark />
              <span className="brand-wordmark">
                <span>Armada</span>
                <span>Mining</span>
              </span>
            </a>

            <div className={`nav-market${isScrolled ? " is-visible" : ""}`} aria-label="Indicative gold price">
              <div className="nav-market-grid">
                {goldPlaceholders.map((item) => (
                  <article key={item.currency} className="nav-market-card">
                    <div className="nav-market-topline">
                      <span className="nav-market-value">
                        {item.currency} / gm: {item.value}
                      </span>
                    </div>
                    <p className={`nav-market-change trend-${item.trend}`}>
                      <i aria-hidden="true" />
                      <span>{item.note}</span>
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div ref={navActionsRef} className="nav-actions">
              <button
                type="button"
                className="menu-toggle"
                aria-expanded={menuOpen}
                aria-label="Toggle navigation"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span />
                <span />
                <span />
              </button>

              <nav className={`nav-panel${menuOpen ? " is-open" : ""}`} aria-label="Primary">
                <div className="nav-links">
                  {primaryLinks.map((link) => (
                    <a
                      key={link.path}
                      href={link.path}
                      className={currentPath === link.path ? "is-active" : ""}
                      onClick={(event) => onNavClick(event, link.path)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <a
                  className="button button-accent nav-button"
                  href="/contact"
                  onClick={(event) => onNavClick(event, "/contact")}
                >
                  Start a conversation
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={currentPath}
          className="page-frame"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
          <PageSection
            page={currentPage}
            currentPath={currentPath}
            onNavClick={onNavClick}
            revealUp={revealUp}
            heroRef={heroRef}
          />
        </motion.main>
      </AnimatePresence>

      <Footer onNavClick={onNavClick} />
    </div>
  );
}

function Footer({ onNavClick }) {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <a
              href="/"
              className="brand-lockup"
              onClick={(event) => onNavClick(event, "/")}
            >
              <BrandMark />
              <span className="brand-wordmark">
                <span>Armada</span>
                <span>Mining</span>
              </span>
            </a>
            <p className="footer-description">{footerData.brand.description}</p>
          </div>

          <div className="footer-columns">
            {footerData.columns.map((column) => (
              <div key={column.title} className="footer-column">
                <p className="card-label">{column.title}</p>
                {column.links ? (
                  <nav className="footer-nav">
                    {column.links.map((link) => (
                      <a
                        key={link.path}
                        href={link.path}
                        onClick={(event) => onNavClick(event, link.path)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                ) : (
                  <div className="footer-contact-details">
                    {column.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

function HomePageSection({ page, onNavClick, revealUp, heroRef }) {
  return (
    <>
      <section className="page-hero page-hero-home" ref={heroRef}>
        <div className="page-hero-media">
          <img src={page.heroImage || homeHeroImage} alt={page.heading} />
        </div>
        <div className="page-hero-overlay" />
        <div className="page-hero-pattern">
          <img src={pattern} alt="" aria-hidden="true" />
        </div>

        <div className="shell home-hero-layout">
          <motion.div
            className="home-hero-copy"
            initial="hidden"
            animate="show"
            variants={revealUp}
          >
            <p className="home-hero-kicker">{page.heroKicker}</p>
            <h1>{page.heading}</h1>
            <p className="lead-copy">{page.lead}</p>
            <div className="hero-actions">
              <a
                className="button button-accent"
                href={page.primaryAction.path}
                onClick={(event) => onNavClick(event, page.primaryAction.path)}
              >
                {page.primaryAction.label}
              </a>
              <a
                className="button button-ghost"
                href={page.secondaryAction.path}
                onClick={(event) => onNavClick(event, page.secondaryAction.path)}
              >
                {page.secondaryAction.label}
              </a>
            </div>
          </motion.div>


        </div>
      </section>

      <section className="home-intro-section">
        <div className="shell home-intro-layout">
          <motion.div
            className="home-section-heading home-intro-heading"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealUp}
          >
            <p className="eyebrow">{page.introTag}</p>
            <h2>{page.introHeading}</h2>
          </motion.div>

          <motion.div
            className="home-intro-copy"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.24 }}
            variants={revealUp}
          >
            {page.introBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            className="home-intro-panel"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.24 }}
            custom={0.08}
            variants={revealUp}
          >
            <p className="card-label">At a glance</p>
            <div className="home-intro-facts">
              {page.introFacts.map((fact, index) => (
                <article key={fact}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{fact}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="home-focus-section">
        <div className="shell">
          <motion.div
            className="home-section-heading"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealUp}
          >
            <p className="eyebrow">{page.focusTag}</p>
            <h2>{page.focusHeading}</h2>
          </motion.div>

          <div className="home-focus-grid">
            {page.focusAreas.map((item, index) => (
              <motion.article
                key={item.title}
                className={`home-focus-card${index === 1 ? " is-accent" : ""}`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.24 }}
                custom={index * 0.08}
                variants={revealUp}
              >
                <p className="card-label">{String(index + 1).padStart(2, "0")}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-philosophy-section shell">
        <div className="home-philosophy-layout">
          <motion.div
            className="home-philosophy-copy"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.24 }}
            variants={revealUp}
          >
            <p className="eyebrow">{page.philosophyTag}</p>
            <h2>{page.philosophyHeading}</h2>
            {page.philosophyBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            className="home-philosophy-panel"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.24 }}
            custom={0.08}
            variants={revealUp}
          >
            <p className="card-label">Core pillars</p>
            <div className="home-philosophy-points">
              {page.philosophyPoints.map((point, index) => (
                <motion.div
                  key={point}
                  className="home-philosophy-chip"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  custom={0.1 + index * 0.05}
                  variants={revealUp}
                >
                  {point}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="home-responsibility-section">
        <div className="home-responsibility-pattern" aria-hidden="true">
          <img src={pattern} alt="" />
        </div>
        <div className="shell home-responsibility-layout">
          <motion.div
            className="home-responsibility-copy"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.24 }}
            variants={revealUp}
          >
            <p className="eyebrow">{page.responsibilityTag}</p>
            <h2>{page.responsibilityHeading}</h2>
            {page.responsibilityBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            className="home-responsibility-panel"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.24 }}
            custom={0.08}
            variants={revealUp}
          >
            {page.responsibilityPoints.map((point, index) => (
              <motion.div
                key={point}
                className="home-responsibility-point"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                custom={0.12 + index * 0.05}
                variants={revealUp}
              >
                {point}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="home-gallery-section shell">
        <motion.div
          className="home-section-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealUp}
        >
          <p className="eyebrow">{page.galleryTag}</p>
          <h2>{page.galleryHeading}</h2>
          <p className="home-gallery-lead">{page.galleryLead}</p>
        </motion.div>

        <div className="home-gallery-grid">
          {homeGalleryImages.map((image, index) => (
            <motion.figure
              key={image.src}
              className={`home-gallery-tile ${image.layout}`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.16 }}
              custom={index * 0.05}
              variants={revealUp}
            >
              <img src={image.src} alt={image.alt} />
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="global-cta-section shell">
        <motion.div
          className="global-cta-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={revealUp}
        >
          <div className="global-cta-pattern" aria-hidden="true">
            <img src={pattern} alt="" />
          </div>
          <div className="global-cta-content">
            <p className="eyebrow">Next steps</p>
            <h2>{page.globalCTA.heading}</h2>
            <p>{page.globalCTA.body}</p>
            <div className="global-cta-actions">
              <a
                className="button button-accent"
                href={page.globalCTA.primaryAction.path}
                onClick={(event) => onNavClick(event, page.globalCTA.primaryAction.path)}
              >
                {page.globalCTA.primaryAction.label}
              </a>
              <a
                className="button button-ghost"
                href={page.globalCTA.secondaryAction.path}
                onClick={(event) => onNavClick(event, page.globalCTA.secondaryAction.path)}
              >
                {page.globalCTA.secondaryAction.label}
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

function ContactPageSection({ page, onNavClick, revealUp }) {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-media">
          <img src={heroImage} alt="Armada Contact" />
        </div>
        <div className="page-hero-overlay" />
        <div className="page-hero-pattern">
          <img src={pattern} alt="" aria-hidden="true" />
        </div>

        <div className="shell page-hero-grid">
          <motion.div
            className="page-hero-copy"
            initial="hidden"
            animate="show"
            variants={revealUp}
          >
            <h1>{page.heading}</h1>
            <p className="lead-copy">{page.lead}</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-main-section shell">
        <div className="contact-layout">
          <motion.div
            className="contact-info-panel"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealUp}
          >
            <p className="eyebrow">{page.introTag}</p>
            <h2>{page.introHeading}</h2>
            <p className="contact-intro-text">{page.introBody}</p>

            <div className="contact-methods">
              {page.cards.map((card, index) => (
                <motion.article
                  key={card.title}
                  className="contact-method-card"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index * 0.1}
                  variants={revealUp}
                >
                  <p className="card-label">{card.label}</p>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-panel"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            variants={revealUp}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="E.g. John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject">
                  <option value="">Select an option</option>
                  <option value="investment">Investment Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="operations">Operations</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="button button-accent">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function PageSection({ page, currentPath, onNavClick, revealUp, heroRef }) {
  if (page.slug === "home") {
    return <HomePageSection page={page} onNavClick={onNavClick} revealUp={revealUp} heroRef={heroRef} />;
  }

  if (page.slug === "contact") {
    return <ContactPageSection page={page} onNavClick={onNavClick} revealUp={revealUp} />;
  }

  const previousPath =
    pageOrder[Math.max(0, pageOrder.indexOf(currentPath) - 1)] ?? pageOrder[0];
  const nextPath =
    pageOrder[Math.min(pageOrder.length - 1, pageOrder.indexOf(currentPath) + 1)] ??
    pageOrder[pageOrder.length - 1];

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-media">
          <img src={page.heroImage || heroImage} alt={page.title} />
        </div>
        <div className="page-hero-overlay" />
        <div className="page-hero-pattern">
          <img src={pattern} alt="" aria-hidden="true" />
        </div>

        <div className="shell page-hero-grid">
          <motion.div
            className="page-hero-copy"
            initial="hidden"
            animate="show"
            variants={revealUp}
          >
            <h1>{page.heading}</h1>
            <p className="lead-copy">{page.lead}</p>
            <div className="hero-actions">
              {page.primaryAction ? (
                <a
                  className="button button-accent"
                  href={page.primaryAction.path}
                  onClick={(event) => onNavClick(event, page.primaryAction.path)}
                >
                  {page.primaryAction.label}
                </a>
              ) : null}
              {page.secondaryAction ? (
                <a
                  className="button button-ghost"
                  href={page.secondaryAction.path}
                  onClick={(event) => onNavClick(event, page.secondaryAction.path)}
                >
                  {page.secondaryAction.label}
                </a>
              ) : null}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="content-section shell">
        <motion.div
          className="content-intro"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealUp}
        >
          <p className="eyebrow">{page.introTag}</p>
          <h2>{page.introHeading}</h2>
          <p>{page.introBody}</p>
        </motion.div>

        <div className="content-grid">
          {page.cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="content-card"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.22 }}
              custom={index * 0.08}
              variants={revealUp}
            >
              <div className="card-accent" />
              <p className="card-label">{card.label}</p>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {page.details && page.details.length > 0 && (
        <section className="split-section">
          <div className="shell split-layout">
            <motion.div
              className="visual-panel"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={revealUp}
            >
              <div className="visual-panel-pattern">
                <img src={pattern} alt="" aria-hidden="true" />
              </div>
              <img className="visual-panel-image" src={page.detailImage || heroImage} alt={page.title + " visual"} />
              {page.visualQuote && (
                <div className="visual-panel-copy">
                  <p className="card-label">In our own words</p>
                  <strong>{page.visualQuote}</strong>
                </div>
              )}
            </motion.div>

            <motion.div
              className="detail-panel"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={0.1}
              variants={revealUp}
            >
              <p className="eyebrow">{page.detailTag}</p>
              <h2>{page.detailHeading}</h2>
              <div className="detail-list">
                {page.details.map((detail) => (
                  <article key={detail.title} className="detail-item">
                    <span>{detail.number}</span>
                    <div>
                      <h3>{detail.title}</h3>
                      <p>{detail.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="pager-section shell">
        <motion.div
          className="pager-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={revealUp}
        >
          <div>
            <p className="eyebrow">Continue exploring</p>
            <h2>{page.closerHeading}</h2>
            <p>{page.closerBody}</p>
          </div>

          <div className="pager-actions">
            <a
              className="button button-ghost"
              href={previousPath}
              onClick={(event) => onNavClick(event, previousPath)}
            >
              Previous page
            </a>
            <a
              className="button button-accent"
              href={nextPath}
              onClick={(event) => onNavClick(event, nextPath)}
            >
              Next page
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default App;
