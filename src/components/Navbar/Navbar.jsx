import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import centralLogo from '../../assets/central_logo_white.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const marqueeRef = useRef(null);
  const logoRef = useRef(null);
  const asteriskRef = useRef(null);
  const innerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const progress = Math.min(y / 50, 1); // 0 to 1 over 50px of scroll
      setScrolled(y > 10);

      // Banner slides up behind navbar
      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translateX(-50%) translateY(-${progress * 20}px)`;
        marqueeRef.current.style.opacity = 1 - progress;
      }

      // Wordmark slides up, asterisk slides in — synced to scroll
      if (logoRef.current) {
        logoRef.current.style.transform = `translateX(-50%) translateY(-${progress * 40}px)`;
      }
      if (asteriskRef.current) {
        asteriskRef.current.style.transform = `translateX(-50%) translateY(${(1 - progress) * 40}px)`;
      }

    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const handleScrollClose = () => {
      if (window.scrollY > 10) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScrollClose, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollClose);
  }, [menuOpen]);

  // Close menu on click outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const marqueeText = 'EXPLORE THE OSMO SHOWCASE';
  const marqueeItems = Array(8).fill(null);

  return (
    <>
    <nav ref={navRef} className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner" ref={innerRef}>
        <button className="navbar__menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}>
            <span></span>
            <span></span>
          </span>
          <span className="navbar__menu-text">Menu</span>
        </button>

        <a href="/" className="navbar__logo">
          <span className="navbar__asterisk" ref={asteriskRef}>✳</span>
          <img src={centralLogo} alt="Central" className="navbar__wordmark" ref={logoRef} />
        </a>

        <div className="navbar__actions">
          <button className="navbar__connect">Connect</button>
        </div>
      </div>

      <div className="navbar__expanded">
        <div className="navbar__expanded-content">
          <div className="navbar__grid">
            {/* Column 1 — Our Products */}
            <div className="navbar__col navbar__col--products">
              <p className="navbar__col-header">OUR PRODUCTS</p>
              <div className="navbar__col-links">
                <a href="#" className="navbar__link">The Vault</a>
                <a href="#" className="navbar__link">
                  Page Transition Course
                  <span className="navbar__badge navbar__badge--purple">WIP</span>
                </a>
                <a href="#" className="navbar__link">Icon Library</a>
                <a href="#" className="navbar__link">Community</a>
              </div>
              <div className="navbar__col-bottom">
                <a href="#" className="navbar__link navbar__link--small">
                  Easings
                  <span className="navbar__badge navbar__badge--muted">SOON</span>
                </a>
              </div>
            </div>

            {/* Column 2 — Explore */}
            <div className="navbar__col navbar__col--explore">
              <p className="navbar__col-header">EXPLORE</p>
              <div className="navbar__col-links">
                <a href="#" className="navbar__link">Osmo Showcase</a>
                <a href="#" className="navbar__link">
                  Collection<sup className="navbar__sup">152</sup>
                </a>
                <a href="#" className="navbar__link">Pricing</a>
              </div>
              <div className="navbar__col-bottom">
                <div className="navbar__socials">
                  <a href="#" className="navbar__social" aria-label="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="#" className="navbar__social" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="#" className="navbar__social" aria-label="X">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3 — Featured */}
            <div className="navbar__col navbar__col--featured">
              <div className="navbar__col-header-row">
                <p className="navbar__col-header">FEATURED</p>
                <span className="navbar__badge navbar__badge--purple">MILESTONE</span>
              </div>
              <div className="navbar__featured-content">
                <h3 className="navbar__featured-title">We hit 1800 Members!</h3>
                <button className="navbar__featured-btn">Join them</button>
                <div className="navbar__avatars">
                  <div className="navbar__avatar"></div>
                  <div className="navbar__avatar"></div>
                  <div className="navbar__avatar"></div>
                  <div className="navbar__avatar"></div>
                  <div className="navbar__avatar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div className={`navbar__overlay ${menuOpen ? 'navbar__overlay--visible' : ''}`} onClick={() => setMenuOpen(false)} />

    <div className="marquee" ref={marqueeRef}>
      <div className="marquee__inner">
        <div className="marquee__track">
          {marqueeItems.map((_, i) => (
            <span key={i} className="marquee__item">
              {marqueeText} <span className="marquee__separator">✳</span>
            </span>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
