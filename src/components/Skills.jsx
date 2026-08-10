import React, { useState } from 'react';
import { Cpu, Code2, Layers, Server, Zap, FileCode, Terminal, Box, Database, GitBranch, TerminalSquare, Atom } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  React: Atom,
  Server: Server,
  Code2: Code2,
  Layers: Layers,
  Zap: Zap,
  FileCode: FileCode,
  Terminal: Terminal,
  Cpu: Cpu,
  Box: Box,
  Database: Database,
  GitBranch: GitBranch,
  TerminalSquare: TerminalSquare
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((cat) => cat.category)];

  const filteredSkills = activeCategory === 'All'
    ? skillsData.flatMap((cat) => cat.skills)
    : skillsData.find((cat) => cat.category === activeCategory)?.skills || [];

  return (
    <section id="skills" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Cpu size={14} /> Skills & Capabilities
          </span>
          <h2 className="section-title">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical stack, programming languages, and core computer science competencies.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--accent-primary)' : 'var(--border-color)',
                background: activeCategory === cat ? 'var(--accent-primary)' : 'var(--bg-glass-card)',
                color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.25s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredSkills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '0.6rem',
                          background: 'rgba(99, 102, 241, 0.12)',
                          color: 'var(--accent-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <IconComponent size={22} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{skill.name}</h3>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Skill Confidence</span>
                      </div>
                    </div>
                    <span style={{ fontWeight: 800, color: 'var(--accent-primary)', fontSize: '1rem' }}>
                      {skill.level}%
                    </span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
                    {skill.desc}
                  </p>
                </div>

                {/* Progress Bar */}
                <div style={{ width: '100%', height: '8px', background: 'var(--bg-tertiary)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${skill.level}%`,
                      background: 'var(--gradient-brand)',
                      borderRadius: '9999px',
                      transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
