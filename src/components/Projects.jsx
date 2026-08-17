import React, { useState, useRef, useEffect } from 'react';
import { FolderGit2, ArrowRight, ExternalLink, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon, FiverrIcon } from './SocialIcons';
import { projectsData, freelanceProjectsData, personalDetails } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

function ProjectSlider({ projects, renderCard }) {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = clientWidth > 768 ? clientWidth / 2 : clientWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), projects.length - 1));
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, [projects]);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollAmount = container.clientWidth > 768 ? container.clientWidth / 2 + 12 : container.clientWidth;
    const targetScroll = direction === 'next' 
      ? container.scrollLeft + scrollAmount 
      : container.scrollLeft - scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  const scrollToIndex = (index) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cardWidth = container.clientWidth > 768 ? container.clientWidth / 2 + 12 : container.clientWidth;
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: activeIndex === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '9999px',
                background: activeIndex === idx ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => scroll('prev')}
            disabled={!canScrollLeft}
            aria-label="Previous Project"
            className="slider-nav-btn"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: canScrollLeft ? 'var(--bg-tertiary)' : 'rgba(255, 255, 255, 0.04)',
              color: canScrollLeft ? 'var(--text-primary)' : 'var(--text-muted)',
              border: '1px solid var(--border-color)',
              cursor: canScrollLeft ? 'pointer' : 'not-allowed',
              opacity: canScrollLeft ? 1 : 0.4,
              transition: 'all 0.2s ease'
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('next')}
            disabled={!canScrollRight}
            aria-label="Next Project"
            className="slider-nav-btn"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: canScrollRight ? 'var(--bg-tertiary)' : 'rgba(255, 255, 255, 0.04)',
              color: canScrollRight ? 'var(--text-primary)' : 'var(--text-muted)',
              border: '1px solid var(--border-color)',
              cursor: canScrollRight ? 'pointer' : 'not-allowed',
              opacity: canScrollRight ? 1 : 0.4,
              transition: 'all 0.2s ease'
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        onScroll={updateScrollState}
        className="project-slider-track"
      >
        {projects.map((project) => (
          <div key={project.id} className="project-slide-item">
            {renderCard(project)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const renderProjectCard = (project) => (
    <div
      key={project.id}
      className="glass-card"
      style={{
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      }}
    >
      <div>
        <div
          style={{
            width: '100%',
            height: '210px',
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
              background: 'rgba(10, 13, 20, 0.85)',
              backdropFilter: 'blur(6px)',
              padding: '0.3rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--accent-secondary)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {project.category}
          </div>
        </div>

        <div style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
            {project.shortDescription}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {project.techStack.map((tech, idx) => (
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
          justifyContent: 'space-between',
          gap: '0.5rem'
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
          View Specs <ArrowRight size={16} />
        </button>

        {project.liveDemo && project.liveDemo !== '#' ? (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.4rem 0.85rem', fontSize: '0.82rem' }}
          >
            Live Site <ExternalLink size={14} />
          </a>
        ) : (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center' }}
            title="View Source Code"
          >
            <GithubIcon size={18} />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <FolderGit2 size={14} /> Portfolio Showcase
          </span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Client freelance web solutions, full-stack applications, and automation systems built with modern engineering.
          </p>
        </div>

        {/* Subsection 1: Freelance Projects */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.25rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid var(--border-color)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '0.5rem', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--accent-emerald)' }}>
                <Briefcase size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Freelance Client Work</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Custom web platforms built for real-world businesses</p>
              </div>
            </div>

            <a
              href={personalDetails.contact.fiverr}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{
                borderColor: '#1dbf73',
                color: '#1dbf73',
                fontSize: '0.88rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <FiverrIcon size={18} /> Hire Me on Fiverr
            </a>
          </div>

          <ProjectSlider
            projects={freelanceProjectsData}
            renderCard={renderProjectCard}
          />
        </div>

        {/* Subsection 2: Personal & Software Projects */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.25rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid var(--border-color)'
            }}
          >
            <div style={{ padding: '0.5rem', borderRadius: '0.5rem', background: 'rgba(99, 102, 241, 0.12)', color: 'var(--accent-primary)' }}>
              <FolderGit2 size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Core Software & Lab Projects</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Automation tools, algorithms, and full-stack web platforms</p>
            </div>
          </div>

          <ProjectSlider
            projects={projectsData}
            renderCard={renderProjectCard}
          />
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <style>{`
        .project-slider-track {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 0.5rem 0.25rem 1.5rem 0.25rem;
          scrollbar-width: thin;
          scrollbar-color: var(--accent-primary) transparent;
        }

        .project-slider-track::-webkit-scrollbar {
          height: 6px;
        }

        .project-slider-track::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 9999px;
        }

        .project-slider-track::-webkit-scrollbar-thumb {
          background: var(--accent-primary);
          border-radius: 9999px;
        }

        .project-slide-item {
          flex: 0 0 calc(50% - 0.75rem);
          min-width: 320px;
          scroll-snap-align: start;
        }

        .slider-nav-btn:hover:not(:disabled) {
          border-color: var(--accent-primary) !important;
          color: var(--accent-primary) !important;
          transform: scale(1.05);
        }

        .glass-card:hover .project-img-hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .project-slide-item {
            flex: 0 0 100%;
            min-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

