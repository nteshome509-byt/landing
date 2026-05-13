import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Lenis from "lenis";
import pattern from "../assets/pattern.svg";
import heroImage from "../assets/about_bakground.jpg";
import heroImage2 from "../assets/gold_wash.jpg";
import galleryWide from "../assets/home_pic1.png";
import galleryPortraitB from "../assets/home_pic2.png";
import galleryTallB from "../assets/home_pic3.png";
import homeHeroImage from "../assets/home_hero.png";
import logo from "../assets/Logo.svg";
import {
  getFooterData,
  getPages,
  getPrimaryLinks,
  getUiText,
  pageOrder,
  supportedLanguages,
} from "./siteData";

const GOLD_STORAGE_KEY = "armada_gold_prices";

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

const homeGalleryImages = [
  { src: galleryWide, alt: "Armada Mining site image 1", layout: "is-wide" },
  { src: galleryPortraitB, alt: "Armada Mining site image 2", layout: "is-portrait-b" },
  { src: galleryTallB, alt: "Armada Mining site image 3", layout: "is-wide-low" },
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

  // Remove .html extension and index.html if present
  let normalized = pathname.replace(/\.html$/, "").replace(/\/index$/, "");
  
  // Ensure it starts with /
  if (!normalized.startsWith("/")) {
    normalized = "/" + normalized;
  }

  const trimmed = normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
  return trimmed || "/";
}

function getStoredLanguage() {
  const savedLanguage = window.localStorage.getItem("armada-language");
  return supportedLanguages.some((item) => item.code === savedLanguage) ? savedLanguage : "en";
}

function App() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));
  const [language, setLanguage] = useState(getStoredLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [goldRateSnapshot, setGoldRateSnapshot] = useState(null);
  const navActionsRef = useRef(null);
  const heroRef = useRef(null);
  const navPanelRef = useRef(null);

  const primaryLinks = getPrimaryLinks(language);
  const pages = getPages(language);
  const footerData = getFooterData(language);
  const uiText = getUiText(language);

const [goldPrices, setGoldPrices] = useState(() => {
  try {
    const saved = localStorage.getItem(GOLD_STORAGE_KEY);

    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});

useEffect(() => {
  if (!goldRateSnapshot) return;

const updatedPrices = {
  date: goldRateSnapshot.date,

  items: [
    {
      currency: "USD/gm",
      value: `$${Number(goldRateSnapshot.usd).toFixed(2)}`,
      trend: "up",
    },
    {
      currency: "ETB/gm",
      value: `${Number(goldRateSnapshot.birr).toLocaleString()} ETB`,
      trend: "down",
    },
  ],
};
  

  setGoldPrices(updatedPrices);

  localStorage.setItem(
    GOLD_STORAGE_KEY,
    JSON.stringify(updatedPrices)
  );

}, [goldRateSnapshot]);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    let rafId = 0;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const fetchGoldPrices = async () => {
      try {
        const response = await fetch("https://api.nbe.gov.et/api/filter-gold-rates");
        const apiResult = await response.json();
        const rates = Array.isArray(apiResult.data) ? apiResult.data : [];
        const primaryRate = rates.find((item) => item.gold_type?.karat === "24") || rates[0];

        if (!primaryRate) {
          return;
        }

        setGoldRateSnapshot({
          usd: primaryRate.price_usd,
          birr: primaryRate.price_birr,
          date: primaryRate.date,
        });
      } catch (error) {
        console.error("Failed to fetch gold prices:", error);
      }
    };

    fetchGoldPrices();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("armada-language", language);
    document.documentElement.lang = language === "am" ? "am" : "en";
  }, [language]);

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
      setShowScrollTop(window.scrollY > 320);
    };

    const rafId = requestAnimationFrame(checkScroll);
    window.addEventListener("scroll", checkScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", checkScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const currentLocalizedPage = pages[pathname] ?? pages["/"];
    document.title =
      currentLocalizedPage.slug === "home"
        ? uiText.baseTitle
        : `${uiText.baseTitle} - ${currentLocalizedPage.title}`;
  }, [language, pages, pathname, uiText.baseTitle]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      const target = event.target;
      if (
        (navActionsRef.current && navActionsRef.current.contains(target)) ||
        (navPanelRef.current && navPanelRef.current.contains(target))
      ) {
        return;
      }
      setMenuOpen(false);
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
    <div className="site-shell" data-language={language}>
      <div className="site-backdrop" aria-hidden="true">
        <div className="site-backdrop-glow site-backdrop-glow-left" />
        <div className="site-backdrop-glow site-backdrop-glow-right" />
      </div>

      <header className="site-header">

        {/* TOP MARKET BAR */}
        <div className="market-bar">
          <div className="shell">
      <div className="market-bar-inner">

        {goldPrices?.items?.length > 0 && (
          <>

            <div className="market-date-global">
              Date: {goldPrices.date}
            </div>

            <div className="market-price-group">

              {goldPrices.items.map((item) => (
                <div key={item.currency} className="market-item">

                  <span className="market-currency">
                    {item.currency}
                  </span>

                  <span className="market-price">
                    {item.value}
                  </span>

                </div>
              ))}

            </div>

          </>
        )}

      </div>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <div className="shell">
          <div className={`navbar${isScrolled ? " is-scrolled" : ""}`}>

            <a
              className="brand-lockup"
              href="/"
              onClick={(event) => onNavClick(event, "/")}
            >
              <img src={logo} alt="Armada Mining" className="brand-logo" />
            </a>

            <nav
              ref={navPanelRef}
              className={`nav-panel${menuOpen ? " is-open" : ""}`}
            >
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
            </nav>

            <div ref={navActionsRef} className="nav-actions">

              <div className="language-toggle desktop-language-toggle">
                {supportedLanguages.map((item) => (
                  <button
                    key={item.code}
                    className={`language-toggle-button${language === item.code ? " is-active" : ""}`}
                    onClick={() => setLanguage(item.code)}
                  >
                    {item.toggleLabel}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="menu-toggle"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span />
                <span />
                <span />
              </button>

            </div>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={`${currentPath}-${language}`}
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
            uiText={uiText}
          />
        </motion.main>
      </AnimatePresence>

      <button
        type="button"
        className={`scroll-top-button${showScrollTop ? " is-visible" : ""}`}
        aria-label={uiText.scrollToTopAria}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="scroll-top-icon" aria-hidden="true" />
      </button>

      <Footer onNavClick={onNavClick} footerData={footerData} uiText={uiText} />
    </div>
  );
}

function Footer({ onNavClick, footerData, uiText }) {
  const [hoveredDetail, setHoveredDetail] = useState(null);
  const [copiedDetail, setCopiedDetail] = useState(null);

  const handleCopy = async (detail) => {
    await navigator.clipboard.writeText(detail);
    setCopiedDetail(detail);
    window.setTimeout(() => setCopiedDetail(null), 2000);
  };

  const handleGo = (detail) => {
    const isEmail = detail.includes("@");
    const isPhone = detail.includes("+") || /^\d/.test(detail);

    if (isEmail) {
      window.location.href = `mailto:${detail}`;
      return;
    }

    if (isPhone) {
      window.location.href = `tel:${detail}`;
    }
  };

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="brand-lockup" onClick={(event) => onNavClick(event, "/")}>
              <BrandMark />
              <span className="brand-wordmark">
                <span>Armada</span>
                <span>Mining</span>
              </span>
            </a>
            <p className="footer-description">{footerData.brand.description}</p>
            <div className="footer-social">
              <p className="card-label">{uiText.footerFollow}</p>
              <div className="footer-social-links">
                <a className="footer-social-link" href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.9h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.55v1.87h2.78l-.44 2.9h-2.34V22C18.34 21.12 22 16.99 22 12Z" />
                  </svg>
                </a>
                <a className="footer-social-link" href="https://t.me" target="_blank" rel="noreferrer" aria-label="Telegram">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                  </svg>
                </a>
                <a className="footer-social-link" href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-columns">
            {footerData.columns.map((column) => (
              <div key={column.title} className="footer-column">
                <p className="card-label">{column.title}</p>
                {column.links ? (
                  <nav className="footer-nav">
                    {column.links.map((link) => (
                      <a key={link.path} href={link.path} onClick={(event) => onNavClick(event, link.path)}>
                        {link.label}
                      </a>
                    ))}
                  </nav>
                ) : (
                  <div className="footer-contact-details">
                    {column.details.map((detail) => (
                      <div
                        key={detail}
                        className="footer-contact-item"
                        onMouseEnter={() => setHoveredDetail(detail)}
                        onMouseLeave={() => setHoveredDetail(null)}
                      >
                        <p>{detail}</p>
                        {hoveredDetail === detail && (
                          <div className="footer-contact-actions">
                            <button type="button" onClick={() => handleCopy(detail)}>
                              {copiedDetail === detail ? uiText.copied : uiText.copy}
                            </button>
                            {(detail.includes("@") || detail.includes("+")) && (
                              <button type="button" onClick={() => handleGo(detail)}>
                                {uiText.go}
                              </button>
                            )}
                          </div>
                        )}
                      </div>
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

function HomePageSection({ page, onNavClick, revealUp, heroRef, uiText }) {
  const [selectedImg, setSelectedImg] = useState(null);
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
          <motion.div className="home-hero-copy" initial="hidden" animate="show" variants={revealUp}>
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
            <p className="card-label">{uiText.atAGlance}</p>
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
                className={`home-focus-card${index === 1 || index === 2 ? " is-accent" : ""}`}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ stiffness: 300 }}
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
            <p className="card-label">{uiText.corePillars}</p>
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
              // 3. ADD THE CLICK HANDLER HERE
              onClick={() => setSelectedImg(image.src)}
              style={{ cursor: 'zoom-in' }}
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
            <p className="eyebrow">{uiText.nextSteps}</p>
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
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <span className="close" onClick={() => setSelectedImg(null)}>&times;</span>
            <motion.img 
              src={selectedImg} 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ContactPageSection({ page, revealUp, uiText }) {

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-media">
          <img src={heroImage} alt={page.heading} />
        </div>
        <div className="page-hero-overlay" />
        <div className="page-hero-pattern">
          <img src={pattern} alt="" aria-hidden="true" />
        </div>

        <div className="shell page-hero-grid">
          <motion.div className="page-hero-copy" initial="hidden" animate="show" variants={revealUp}>
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
            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">{uiText.form.fullName}</label>
                  <input type="text" id="name" placeholder={uiText.form.fullNamePlaceholder} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{uiText.form.emailAddress}</label>
                  <input type="email" id="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">{uiText.form.subject}</label>
                <select id="subject">
                  <option value="">{uiText.form.selectOption}</option>
                  <option value="investment">{uiText.form.subjectOptions.investment}</option>
                  <option value="partnership">{uiText.form.subjectOptions.partnership}</option>
                  <option value="operations">{uiText.form.subjectOptions.operations}</option>
                  <option value="other">{uiText.form.subjectOptions.other}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{uiText.form.message}</label>
                <textarea id="message" rows="5" placeholder={uiText.form.messagePlaceholder} />
              </div>
              <button type="submit" className="button button-accent">
                {uiText.form.sendMessage}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ESGPageSection({ page, revealUp }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-media">
          <img src={heroImage2} alt={page.heading} />
        </div>
        <div className="page-hero-overlay" />
        <div className="page-hero-pattern">
          <img src={pattern} alt="" aria-hidden="true" />
        </div>

        <div className="shell page-hero-grid">
          <motion.div className="page-hero-copy" initial="hidden" animate="show" variants={revealUp}>
            <h1>{page.heading}</h1>
            <p className="lead-copy">{page.lead}</p>
          </motion.div>
        </div>
      </section>

      <section className="esg-section shell">
        <div className="section-intro reveal">
          <p className="eyebrow">{page.introTag}</p>
          <h2>{page.introHeading}</h2>
          <p className="description-text">{page.introBody}</p>
        </div>

        <div className="esg-grid reveal reveal-stagger">
          {page.esgPrinciples.map((item) => (
            <article key={item.category} className="service-card service-card--icon">
              <div className="service-icon">{item.icon}</div>
              <h3>{item.category}</h3>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function LegalPageSection({ page, revealUp }) {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-media">
          <img src={heroImage} alt={page.heading} />
        </div>
        <div className="page-hero-overlay" />
        <div className="page-hero-pattern">
          <img src={pattern} alt="" aria-hidden="true" />
        </div>

        <div className="shell page-hero-grid">
          <motion.div className="page-hero-copy" initial="hidden" animate="show" variants={revealUp}>
            <h1>{page.heading}</h1>
            <p className="lead-copy">{page.lead}</p>
          </motion.div>
        </div>
      </section>

      <section className="legal-content-section shell">
        <div className="legal-layout">
          <motion.div
            className="legal-intro"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealUp}
          >
            <p className="eyebrow">{page.introTag}</p>
            <h2>{page.introHeading}</h2>
            <p className="description-text">{page.introBody}</p>
          </motion.div>

          <div className="legal-articles">
            {page.sections.map((section, index) => (
              <motion.article
                key={section.title}
                className="legal-article"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                custom={index * 0.05}
                variants={revealUp}
              >
                <h3>{section.title}</h3>
                {section.body.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PageSection({ page, currentPath, onNavClick, revealUp, heroRef, uiText }) {
  if (page.slug === "home") {
    return (
      <HomePageSection
        page={page}
        onNavClick={onNavClick}
        revealUp={revealUp}
        heroRef={heroRef}
        uiText={uiText}
      />
    );
  }

  if (page.slug === "contact") {
    return <ContactPageSection page={page} revealUp={revealUp} uiText={uiText} />;
  }

  if (page.slug === "esg") {
    return <ESGPageSection page={page} revealUp={revealUp} />;
  }

  if (page.slug === "legal") {
    return <LegalPageSection page={page} revealUp={revealUp} />;
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
          <motion.div className="page-hero-copy" initial="hidden" animate="show" variants={revealUp}>
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
  // Add this line:
  whileHover={{ scale: 1.05 }} 
  transition={{ 
    duration: 0.25, 
    ease: "easeOut" // or [0.25, 0.1, 0.25, 1.0] for a custom cubic-bezier
  }}
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
              <img className="visual-panel-image" src={page.detailImage || heroImage} alt={`${page.title} visual`} />
              {page.visualQuote && (
                <div className="visual-panel-copy">
                  <p className="card-label">{uiText.inOurOwnWords}</p>
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
            <p className="eyebrow">{uiText.continueExploring}</p>
            <h2>{page.closerHeading}</h2>
            <p>{page.closerBody}</p>
          </div>

          <div className="pager-actions">
            <a className="button button-ghost" href={previousPath} onClick={(event) => onNavClick(event, previousPath)}>
              {uiText.previousPage}
            </a>
            <a className="button button-accent" href={nextPath} onClick={(event) => onNavClick(event, nextPath)}>
              {uiText.nextPage}
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default App;
