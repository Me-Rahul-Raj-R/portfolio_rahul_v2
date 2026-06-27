import React from 'react';
import { personal } from '../data/portfolioData';

/* ── SVG Icons ─────────────────────────────── */
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-8.5 6.5H8v7h2.5v-7zm-1.25-2.25A1.375 1.375 0 108 8.625a1.375 1.375 0 001.25-1.375zm9.25 4.75c0-2.3-1.45-3.25-2.95-3.25-1.2 0-1.95.65-2.3 1.1v-.85H11v7h2.5v-3.8c0-1.05.5-1.7 1.4-1.7.85 0 1.35.55 1.35 1.65V18H18.5v-4z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.038-1.9l-2.609-2.519c-.756-.757-1.754-1.273-2.803-1.477V4.5a1.5 1.5 0 00-3 0v1.12c-1.05.204-2.048.72-2.803 1.477L4.275 11.46c-1.004 1.004-1.515 2.306-1.515 3.677 0 1.37.511 2.7 1.515 3.676l4.332 4.364c1.004 1.004 2.306 1.515 3.677 1.515 1.37 0 2.7-.511 3.677-1.515l2.697-2.607c.514-.514.496-1.366-.038-1.9-.535-.535-1.386-.552-1.518-.04zM18 9a1 1 0 100-2 1 1 0 000 2z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
  </svg>
);

const CONTACT_LINKS = [
  {
    label: 'Email',
    href: `mailto:${personal.email}`,
    icon: <EmailIcon />,
    display: personal.email,
  },
  {
    label: 'LinkedIn',
    href: personal.linkedin,
    icon: <LinkedInIcon />,
    display: 'rahul-raj-r',
    external: true,
  },
  {
    label: 'GitHub',
    href: personal.github,
    icon: <GitHubIcon />,
    display: 'Me-Rahul-Raj-R',
    external: true,
  },
  {
    label: 'LeetCode',
    href: personal.leetcode,
    icon: <LeetCodeIcon />,
    display: 'Rahul-Raj-R',
    external: true,
  },
];

const Contact = () => (
  <>
    {/* ── Contact Section ────────────────────────── */}
    <section className="contact" id="contact" aria-label="Contact">
      <div className="container">
        <div className="contact-inner observe">
          <span className="section-eyebrow">Let's Build Together</span>

          <h2 className="contact-heading">
            Open for{' '}
            <span className="gradient-text">high-impact</span>{' '}
            roles &amp; collaborations
          </h2>

          <p className="contact-sub">
            I&apos;m actively seeking Software Developer / Full Stack roles at leading
            MNCs. Whether it&apos;s a full-time opportunity, internship, or open-source
            collaboration — let&apos;s connect and build something remarkable.
          </p>

          {/* Social / contact grid */}
          <nav className="contact-links" aria-label="Contact links">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="contact-link"
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                aria-label={`${link.label}: ${link.display}`}
              >
                <div className="contact-link-icon">{link.icon}</div>
                <span className="contact-link-label">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Primary email CTA */}
          <div className="contact-email-cta">
            <a
              href={`mailto:${personal.email}`}
              className="btn btn-primary"
            >
              <EmailIcon />
              {personal.email}
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ── Footer ───────────────────────────────── */}
    <footer className="footer" aria-label="Site footer">
      <div className="container footer-inner">
        <span className="footer-logo">
          <span className="logo-bracket">&lt;</span>
          Rahul.dev
          <span className="logo-bracket"> /&gt;</span>
        </span>

        <p className="footer-copy">
          © {new Date().getFullYear()} Rahul Raj R — All rights reserved.
        </p>

        <p className="footer-tech">
          Built with <span>React</span> + <span>Pure CSS3</span>
        </p>
      </div>
    </footer>
  </>
);

export default Contact;
