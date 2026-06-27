import React from 'react';
import { experience } from '../data/portfolioData';

// Render bullet text with <strong> for bold metric highlights
const BulletText = ({ html }) => (
  <span dangerouslySetInnerHTML={{ __html: html }} />
);

const TimelineItem = ({ item, index }) => (
  <div
    className="timeline-item observe"
    style={{ transitionDelay: `${index * 0.12}s` }}
  >
    {/* Glowing dot on the timeline line */}
    <div className="timeline-dot-wrap">
      <div className="timeline-dot" aria-hidden="true" />
    </div>

    {/* Content card */}
    <div className="timeline-content">
      <div className="timeline-meta">
        <div>
          <div className="timeline-role">{item.role}</div>
          <div className="timeline-company">{item.company}</div>
          <span className="timeline-type">{item.type}</span>
        </div>
        <div className="timeline-period">{item.period}</div>
      </div>

      <ul className="timeline-bullets" aria-label={`Responsibilities at ${item.company}`}>
        {item.bullets.map((b, i) => (
          <li key={i} className="timeline-bullet">
            <BulletText html={b} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => (
  <section className="experience" id="experience" aria-label="Professional Experience">
    <div className="container">
      <div className="section-header observe">
        <span className="section-eyebrow">Team Readiness</span>
        <h2 className="section-title">Professional Experience</h2>
        <div className="section-divider" />
      </div>

      <div className="timeline">
        {experience.map((item, i) => (
          <TimelineItem key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
