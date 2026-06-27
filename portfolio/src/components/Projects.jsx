import React from 'react';
import { projects } from '../data/portfolioData';

const TAG_COLORS = {
  Java: 'tag-amber',
  'Fast-API': 'tag-emerald',
  HTML5: 'tag-cyan',
  JavaScript: 'tag-amber',
  MySQL: 'tag-indigo',
  MongoDB: 'tag-emerald',
  'Express.js': 'tag-violet',
  'React.js': 'tag-cyan',
  'Node.js': 'tag-emerald',
  CSS3: 'tag-violet',
  'Machine Learning': 'tag-pink',
};

const getTagColor = (tech) => TAG_COLORS[tech] || 'tag-cyan';

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

const ProjectCard = ({ project }) => (
  <article className="project-card observe" aria-label={`Project: ${project.name}`}>
    {project.featured && (
      <div className="project-featured-badge">⚡ Featured</div>
    )}

    <div className="project-header">
      <h3 className="project-name">{project.name}</h3>
      <span className="project-subtitle">{project.subtitle}</span>
    </div>

    <div className="project-tech">
      {project.tech.map((t) => (
        <span key={t} className={`tag ${getTagColor(t)}`}>{t}</span>
      ))}
    </div>

    <p className="project-description">{project.description}</p>

    <ul className="project-metrics" aria-label="Key metrics">
      {project.metrics.map((m) => (
        <li key={m} className="project-metric">{m}</li>
      ))}
    </ul>

    <div className="project-footer">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
        aria-label={`View ${project.name} source code on GitHub`}
      >
        <GitHubIcon />
        View Source
        <ExternalIcon />
      </a>
    </div>
  </article>
);

const Projects = () => (
  <section className="projects" id="projects" aria-label="Featured Projects">
    <div className="container">
      <div className="section-header observe">
        <span className="section-eyebrow">Engineering Proof</span>
        <h2 className="section-title">High-Impact Projects</h2>
        <div className="section-divider" />
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <div className="projects-more observe" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <a
          href="https://github.com/Me-Rahul-Raj-R"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          <GitHubIcon />
          View All Projects on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
