import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2, Maximize2, Sparkles, Send } from 'lucide-react';
import { personalDetails, skillsData, projectsData } from '../data/portfolioData';

export default function TerminalWidget({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '⚡ Akash Kumar Interactive CLI Shell v1.0.0' },
    { type: 'system', text: 'Type "help" to see available commands or "sudo hire" for a quick summary.' }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  • help       : Display available CLI commands
  • whoami     : About Akash Kumar & Bio
  • skills     : View technical skills & languages
  • projects   : View featured software projects
  • education  : View university & grade metrics
  • contact    : View contact details & email
  • sudo hire  : Quick message for recruiters & engineers
  • clear      : Clear terminal screen`
        });
        break;
      case 'whoami':
      case 'bio':
        newHistory.push({
          type: 'output',
          text: `${personalDetails.name} - ${personalDetails.title}\n${personalDetails.bio}\nOrigin: ${personalDetails.education.origin} | Location: ${personalDetails.contact.location}`
        });
        break;
      case 'skills':
        newHistory.push({
          type: 'output',
          text: `TECHNICAL SKILLS:
  - MERN Stack (MongoDB, Express, React, Node.js)
  - Core Languages: JavaScript (ES6+), Python, C++
  - Backend Frameworks: Node.js, FastAPI
  - Fundamentals: Data Structures & Algorithms (DSA), OOP, SQL/Data Mining, Linux, Git`
        });
        break;
      case 'projects':
        newHistory.push({
          type: 'output',
          text: `FEATURED PROJECTS:
  1. Bulk Google Slide Generator [Python, Google APIs, Automation]
  2. Mock Test App [MERN Stack, Timed Exam Engine, Analytics]
  3. PDF Study [JavaScript, HTML5 Canvas, PDF Drawing & Annotations]`
        });
        break;
      case 'education':
        newHistory.push({
          type: 'output',
          text: `EDUCATION:
  Degree: ${personalDetails.education.degree}
  University: ${personalDetails.education.university}
  Grade: ${personalDetails.education.grade}`
        });
        break;
      case 'contact':
        newHistory.push({
          type: 'output',
          text: `CONTACT INFORMATION:
  Email: ${personalDetails.contact.email}
  GitHub: ${personalDetails.contact.github} (${personalDetails.contact.githubUser})
  LinkedIn: ${personalDetails.contact.linkedin} (${personalDetails.contact.linkedinUser})`
        });
        break;
      case 'sudo hire':
      case 'hire':
        newHistory.push({
          type: 'output',
          text: `🚀 ACCESS GRANTED!
  Thank you for considering Akash Kumar for your engineering team!
  Direct Email: ${personalDetails.contact.email}
  GitHub: ${personalDetails.contact.github}
  Ready to contribute with MERN Stack, Python, C++, and solid CS fundamentals.`
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 110,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '750px',
          height: '520px',
          background: 'var(--terminal-bg)',
          borderRadius: '0.75rem',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          boxShadow: '0 0 35px rgba(0, 0, 0, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div
          style={{
            padding: '0.75rem 1rem',
            background: '#090c15',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: '0.82rem', fontFamily: 'JetBrains Mono', color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>
              akash@portfolio-cli:~
            </span>
          </div>

          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Terminal Output */}
        <div
          style={{
            flex: 1,
            padding: '1.25rem',
            overflowY: 'auto',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.88rem',
            lineHeight: 1.6,
            color: '#e2e8f0'
          }}
        >
          {history.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '0.6rem', whiteSpace: 'pre-wrap' }}>
              {item.type === 'user' && (
                <span style={{ color: '#38bdf8', fontWeight: 700 }}>{item.text}</span>
              )}
              {item.type === 'system' && (
                <span style={{ color: '#a855f7' }}>{item.text}</span>
              )}
              {item.type === 'output' && (
                <span style={{ color: '#4ade80' }}>{item.text}</span>
              )}
              {item.type === 'error' && (
                <span style={{ color: '#f87171' }}>{item.text}</span>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Form */}
        <form
          onSubmit={handleCommand}
          style={{
            padding: '0.75rem 1rem',
            background: '#070a12',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span style={{ color: '#38bdf8', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or 'sudo hire'..."
            autoFocus
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.9rem'
            }}
          />
          <button
            type="submit"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
