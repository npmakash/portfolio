import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.85rem 1.25rem',
        borderRadius: '0.75rem',
        background: type === 'success' ? '#064e3b' : '#7f1d1d',
        color: '#ffffff',
        border: `1px solid ${type === 'success' ? '#10b981' : '#ef4444'}`,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
        animation: 'fadeIn 0.3s ease',
        fontWeight: 600,
        fontSize: '0.9rem'
      }}
    >
      {type === 'success' ? <CheckCircle2 size={20} style={{ color: '#34d399' }} /> : <AlertCircle size={20} style={{ color: '#f87171' }} />}
      <span>{message}</span>
    </div>
  );
}
