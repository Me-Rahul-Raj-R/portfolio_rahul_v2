import React from 'react';
import { skills } from '../data/portfolioData';

const COLOR_MAP = {
  cyan: 'tag-cyan',
  violet: 'tag-violet',
  emerald: 'tag-emerald',
  amber: 'tag-amber',
  indigo: 'tag-indigo',
  pink: 'tag-pink',
};

const Skills = () => (
  <section className="skills" id="skills" aria-label="Technical Skills">
    <div className="container">
      <div className="section-header observe">
        <span className="section-eyebrow">What I work with</span>
        <h2 className="section-title">Technical Arsenal</h2>
        <div className="section-divider" />
      </div>

      <div className="skills-grid stagger-children">
        {skills.map((group) => (
          <div
            key={group.category}
            className="skill-category observe"
            data-color={group.color}
          >
            <div className="skill-category-label">{group.category}</div>
            <div className="skill-pills">
              {group.items.map((item) => (
                <span key={item} className={`tag ${COLOR_MAP[group.color]}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
