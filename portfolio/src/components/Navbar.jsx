import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => {
      if (!e.target.closest('.navbar-inner')) setMenuOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Skills',      href: '#skills' },
    { label: 'Projects',    href: '#projects' },
    { label: 'Experience',  href: '#experience' },
    { label: 'Achievements',href: '#achievements' },
    { label: 'Contact',     href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
      <div className="container navbar-inner">
        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          aria-label="Rahul Raj R — Home"
        >
          <span className="logo-bracket">&lt;</span>
          Rahul.dev
          <span className="logo-bracket"> /&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className={`navbar-links${menuOpen ? ' open' : ''}`} role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar-cta">
          <a
            href="/Rahul_Raj_R_Resume_ATS95.docx"
            download="Rahul_Raj_R_Resume.docx"
            className="btn btn-primary btn-sm"
            title="Download Resume"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-7 4v-2h14v2H5z"/>
            </svg>
            Resume
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
