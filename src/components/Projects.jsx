import React, { useState } from 'react';
import { FolderGit2, ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <FolderGit2 size={14} /> Featured Work
          </span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Innovative web applications, automation scripts, and software tools built with modern technologies.
          </p>
        </div>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    width: '100%',
                    height: '200px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'var(--bg-tertiary)'
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    className="project-img-hover"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      background: 'rgba(10, 13, 20, 0.8)',
                      backdropFilter: 'blur(6px)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--accent-secondary)'
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.6rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                    {project.shortDescription}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '0.2rem 0.6rem',
                          borderRadius: '0.35rem',
                          background: 'rgba(99, 102, 241, 0.1)',
                          border: '1px solid rgba(99, 102, 241, 0.2)',
                          color: 'var(--accent-primary)',
                          fontSize: '0.75rem',
                          fontWeight: 600
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: '1rem 1.5rem',
                  background: 'var(--bg-tertiary)',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-primary)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  View Details & Features <ArrowRight size={16} />
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center' }}
                  title="View GitHub Repository"
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <GithubIcon size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <style>{`
        .glass-card:hover .project-img-hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
