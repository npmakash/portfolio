import React from 'react';
import { GraduationCap, Award, Briefcase, Code, MapPin, User, CheckCircle } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function About() {
  const stats = [
    { label: 'University Grade', value: '7+ SGPA', desc: 'AKTU CS Undergrad', icon: GraduationCap },
    { label: 'Key Projects', value: '03+', desc: 'MERN & Python Tools', icon: Code },
    { label: 'Internships', value: '02', desc: 'Infosys & Code Alpha', icon: Briefcase },
    { label: 'Certifications', value: '03', desc: 'Alison & Udemy', icon: Award },
  ];

  return (
    <section id="about" style={{ padding: '6rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <User size={14} /> Background & Education
          </span>
          <h2 className="section-title">
            About <span className="text-gradient">Akash Kumar</span>
          </h2>
          <p className="section-subtitle">
            An ambitious Computer Science engineer dedicated to software engineering, algorithmic efficiency, and modern web application development.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.5rem'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '0.75rem',
                    background: 'rgba(99, 102, 241, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    flexShrink: 0
                  }}
                >
                  <Icon size={26} />
                </div>
                <div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {stat.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem' }} className="about-grid">
          {/* Education Card */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.5rem', borderRadius: '0.5rem', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-primary)' }}>
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Higher Education</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Computer Science & Engineering</p>
                </div>
              </div>

              <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                  {personalDetails.education.degree}
                </h4>
                <p style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  {personalDetails.education.university}
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <span>🎓 Grade: <strong>{personalDetails.education.grade}</strong></span>
                  <span>📍 Location: <strong>{personalDetails.education.location}</strong></span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Gaining comprehensive theoretical knowledge and practical software engineering expertise in Data Structures & Algorithms, Object-Oriented Software Design, Operating Systems, Database Management Systems, and Cloud-Native Web Architectures.
              </p>
            </div>
          </div>

          {/* Pillars Card */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Core Technical Foundations
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'Full Stack Web Engineering', desc: 'MERN stack, REST APIs, responsive component design.' },
                { title: 'Data Structures & Algorithms', desc: 'Efficiency optimization, problem-solving in C++ & Python.' },
                { title: 'Object-Oriented Programming', desc: 'Modular design patterns, encapsulation, and clean code.' },
                { title: 'Database & Data Mining', desc: 'Certified in relational database querying & pattern extraction.' },
                { title: 'Version Control & Linux', desc: 'Git branching workflows, shell navigation, and CLI tools.' }
              ].map((pillar, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-emerald)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                      {pillar.title}
                    </strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {pillar.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
