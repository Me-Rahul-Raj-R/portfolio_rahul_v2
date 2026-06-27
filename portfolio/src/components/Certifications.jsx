import React from 'react';
import { certifications } from '../data/portfolioData';

const Certifications = () => (
  <section className="certifications" id="certifications" aria-label="Certifications">
    <div className="container">
      <div className="section-header observe">
        <span className="section-eyebrow">Continuous Learning</span>
        <h2 className="section-title">Certifications</h2>
        <div className="section-divider" />
      </div>

      <div className="certs-grid stagger-children">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="cert-card observe"
            data-color={cert.color}
          >
            <div className="cert-year">{cert.year}</div>
            <div className="cert-name">{cert.name}</div>
            <div className="cert-issuer">{cert.issuer}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
