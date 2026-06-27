import React from 'react';
import { achievements } from '../data/portfolioData';

const Achievements = () => (
  <section className="achievements" id="achievements" aria-label="Achievements & Hackathons">
    <div className="container">
      <div className="section-header observe">
        <span className="section-eyebrow">Recognition</span>
        <h2 className="section-title">Achievements &amp; Hackathons</h2>
        <div className="section-divider" />
      </div>

      <div className="achievements-grid stagger-children">
        {achievements.map((a) => (
          <div key={a.id} className="achievement-card observe">
            <div className="achievement-icon" aria-hidden="true">{a.icon}</div>
            <div className="achievement-highlight">{a.highlight}</div>
            <h3 className="achievement-title">{a.title}</h3>
            <p className="achievement-desc">{a.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
