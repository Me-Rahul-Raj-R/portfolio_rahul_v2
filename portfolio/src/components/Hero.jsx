import React, { useState, useEffect, useRef } from 'react';
import { personal } from '../data/portfolioData';

const ROLES = personal.roles;
const TYPING_SPEED  = 110;
const DELETING_SPEED = 70;
const PAUSE_DURATION = 2400;

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex,   setRoleIndex]   = useState(0);
  const [charIndex,   setCharIndex]   = useState(0);
  const [isDeleting,  setIsDeleting]  = useState(false);
  const [isPaused,    setIsPaused]    = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (isPaused) {
      timerRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, PAUSE_DURATION);
      return;
    }

    timerRef.current = setTimeout(() => {
      if (!isDeleting) {
        const next = currentRole.slice(0, charIndex + 1);
        setDisplayText(next);
        if (charIndex + 1 === currentRole.length) {
          setIsPaused(true);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        const next = currentRole.slice(0, charIndex - 1);
        setDisplayText(next);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex(i => (i + 1) % ROLES.length);
          setCharIndex(0);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timerRef.current);
  }, [charIndex, isDeleting, isPaused, roleIndex]);

  const scrollTo = id => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" aria-label="Hero — Introduction">
      <div className="hero-orb-1" aria-hidden="true" />
      <div className="hero-orb-2" aria-hidden="true" />

      <div className="hero-content">

        {/* ── Profile Photo ── */}
        <div className="hero-avatar">
          <img
            src="/RAHUL_RAJ_R.jpg"
            alt="Rahul Raj R — Software Developer"
          />
        </div>

        {/* ── Name (large) ── */}
        <p className="hero-greeting">Hi, I&apos;m</p>
        <h1 className="hero-name gradient-text">Rahul Raj R</h1>

        {/* ── Typewriter role ── */}
        <div className="hero-typewriter" aria-live="polite">
          <span>{displayText}</span>
          <span className="cursor" aria-hidden="true" />
        </div>

        {/* ── Gradient headline ── */}
        <h2 className="hero-headline">
          Building robust full-stack applications<br />
          with architectural precision.
        </h2>

        {/* ── CTA Buttons (no summary) ── */}
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => scrollTo('#projects')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
            </svg>
            View Projects
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('#contact')}>
            Contact Me
          </button>
        </div>

      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span>scroll</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
};

export default Hero;
