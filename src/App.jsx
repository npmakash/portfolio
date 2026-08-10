import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalWidget from './components/TerminalWidget';
import Toast from './components/Toast';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '4rem 2rem', textAlign: 'center', background: '#0a0d14', color: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ color: '#ef4444', marginBottom: '1rem' }}>Something went wrong loading this section.</h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', maxWidth: '500px' }}>
            {this.state.error?.toString()}
          </p>
          <button onClick={() => window.location.reload()} style={{ padding: '0.75rem 1.5rem', background: '#6366f1', color: '#ffffff', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 600 }}>
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'success' });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: '', type: 'success' }), 3500);
  };

  return (
    <ErrorBoundary>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        <main style={{ flex: 1 }}>
          <Hero onOpenTerminal={() => setTerminalOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact showToast={showToast} />
        </main>

        <Footer />

        <TerminalWidget
          isOpen={terminalOpen}
          onClose={() => setTerminalOpen(false)}
        />

        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: '', type: 'success' })}
        />
      </div>
    </ErrorBoundary>
  );
}
