import React from 'react';
import { education } from '../data/portfolioData';

const Education = () => (
  <section className="education" id="education" aria-label="Education">
    <div className="container">
      <div className="section-header observe">
        <span className="section-eyebrow">Academic Background</span>
        <h2 className="section-title">Education</h2>
        <div className="section-divider" />
      </div>

      <div className="education-grid stagger-children">
        {education.map((edu) => (
          <div key={edu.id} className="edu-card observe">
            <div className="edu-icon" aria-hidden="true">
              {edu.current ? '🎓' : '📘'}
            </div>
            <div className="edu-body">
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-institution">{edu.institution}</div>
              <div className="edu-meta">
                <span className="edu-period">{edu.period}</span>
                <span className="edu-score">{edu.score}</span>
                {edu.current && (
                  <span className="edu-current-badge">Currently Enrolled</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
